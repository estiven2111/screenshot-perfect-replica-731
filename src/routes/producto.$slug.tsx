import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ProductDetail } from "@/components/site/ProductParts";
import { getProduct, categoryName } from "@/data/products";
import { site } from "@/config/site";

export const Route = createFileRoute("/producto/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ params, loaderData }) => {
    const p = loaderData?.product;
    if (!p) return { meta: [{ title: "Producto no disponible | Proveedora Express" }, { name: "robots", content: "noindex" }] };
    const title = `${p.name} | Proveedora Express`.slice(0, 60);
    const img = p.images[0] ? `${site.url}${p.images[0]}` : undefined;
    return {
      meta: [
        { title },
        { name: "description", content: p.description.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: p.short },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/producto/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/producto/${params.slug}` }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org", "@type": "Product", name: p.name, description: p.description,
          image: img, category: categoryName(p.category), brand: { "@type": "Brand", name: site.name },
        }) },
        { type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org", "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: "/" },
            { "@type": "ListItem", position: 2, name: "Catálogo", item: "/catalogo" },
            { "@type": "ListItem", position: 3, name: p.name, item: `/producto/${params.slug}` },
          ],
        }) },
      ],
    };
  },
  component: ProductPage,
  notFoundComponent: () => (
    <main className="mx-auto max-w-xl px-4 pb-20 pt-32 text-center">
      <h1 className="text-3xl">Producto no encontrado</h1>
      <Link to="/catalogo" className="mt-6 inline-block font-bold text-emerald">Ver catálogo</Link>
    </main>
  ),
  errorComponent: () => <main className="pt-32 text-center">No pudimos cargar este producto.</main>,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 pt-24">
      <nav aria-label="Ruta" className="mb-6 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-emerald">Inicio</Link> / <Link to="/catalogo" className="hover:text-emerald">Catálogo</Link> / <span className="text-foreground">{product.name}</span>
      </nav>
      <ProductDetail product={product} />
    </main>
  );
}
