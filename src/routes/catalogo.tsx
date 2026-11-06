import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { Search } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ProductCard, ProductDetail } from "@/components/site/ProductParts";
import { categories, products, getProduct, categoryName } from "@/data/products";

const searchSchema = z.object({
  categoria: z.string().optional(),
  q: z.string().optional(),
  p: z.string().optional(),
});

export const Route = createFileRoute("/catalogo")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Catálogo de vinipel y desechables | Proveedora Express" },
      { name: "description", content: "Vinipel apto para alimentos con registro INVIMA, papel chicle, cintas, bolsas por millar, servilletas, cubiertos y cajas plásticas. Cotiza ya." },
      { property: "og:title", content: "Catálogo | Proveedora Express" },
      { property: "og:description", content: "Vinipel, papel chicle, cintas, bolsas y desechables al por mayor y al detal." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/catalogo" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/catalogo" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "/" },
        { "@type": "ListItem", position: 2, name: "Catálogo", item: "/catalogo" },
      ],
    }) }],
  }),
  component: Catalogo,
});

function Catalogo() {
  const { categoria, q, p } = Route.useSearch();
  const navigate = useNavigate({ from: "/catalogo" });
  const term = (q ?? "").toLowerCase().trim();
  const list = products.filter(
    (pr) => (!categoria || pr.category === categoria) && (!term || `${pr.name} ${pr.short} ${categoryName(pr.category)}`.toLowerCase().includes(term)),
  );
  const open = p ? getProduct(p) : undefined;

  return (
    <main className="bg-mist pt-16">
      <section className="bg-hero px-4 py-16 text-center text-on-dark">
        <p className="eyebrow">Fabricantes y distribuidores directos</p>
        <h1 className="mt-3 text-4xl md:text-5xl">Catálogo Proveedora Express</h1>
        <p className="mx-auto mt-3 max-w-xl text-on-dark/75">Vinipel, papel chicle, cintas, bolsas y desechables al por mayor y al detal.</p>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="relative mx-auto max-w-md">
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
          <input
            type="search"
            value={q ?? ""}
            onChange={(e) => navigate({ search: (prev) => ({ ...prev, q: e.target.value || undefined }), replace: true })}
            placeholder="Buscar producto…"
            aria-label="Buscar producto"
            className="w-full rounded-full border bg-background py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Chip active={!categoria} onClick={() => navigate({ search: (prev) => ({ ...prev, categoria: undefined }) })}>Todos</Chip>
          {categories.map((c) => (
            <Chip key={c.slug} active={categoria === c.slug} onClick={() => navigate({ search: (prev) => ({ ...prev, categoria: c.slug }) })}>{c.name}</Chip>
          ))}
        </div>
        <h2 className="sr-only">Productos</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((pr) => <ProductCard key={pr.slug} product={pr} modal />)}
        </div>
        {list.length === 0 && <p className="py-16 text-center text-muted-foreground">No encontramos productos. Escríbenos por WhatsApp y te ayudamos.</p>}
      </section>
      <Dialog open={!!open} onOpenChange={(o) => !o && navigate({ search: (prev) => ({ ...prev, p: undefined }), resetScroll: false })}>
        <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto">
          <DialogTitle className="sr-only">{open?.name}</DialogTitle>
          {open && <ProductDetail product={open} headingLevel="h2" />}
        </DialogContent>
      </Dialog>
    </main>
  );
}

function Chip({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) {
  return (
    <button onClick={onClick} className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${active ? "border-emerald bg-emerald text-primary-foreground" : "bg-background hover:border-leaf"}`}>
      {children}
    </button>
  );
}
