import { Link } from "@tanstack/react-router";
import { MessageCircle, Check } from "lucide-react";
import logo from "@/assets/logo.webp.asset.json";
import { type Product, categoryName, products } from "@/data/products";
import { waLink } from "@/config/site";
import { useState } from "react";

export function ProductImage({ product, src, className = "" }: { product: Product; src?: string; className?: string }) {
  const img = src ?? product.images[0];
  if (!img)
    return (
      <div className={`flex flex-col items-center justify-center gap-3 bg-hero ${className}`}>
        <img src={logo.url} alt={`${product.name} - Proveedora Express`} width={96} height={96} loading="lazy" className="h-24 w-24 rounded-full bg-background p-1 opacity-90" />
        <span className="eyebrow">Foto próximamente</span>
      </div>
    );
  return <img src={img} alt={`${product.name} - Proveedora Express`} width={720} height={720} loading="lazy" className={`object-cover ${className}`} />;
}

export function ProductCard({ product, modal = false }: { product: Product; modal?: boolean }) {
  const inner = (
    <>
      <div className="aspect-square overflow-hidden"><ProductImage product={product} className="h-full w-full transition duration-500 group-hover:scale-105" /></div>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald">{categoryName(product.category)}</span>
        <h3 className="mt-1 text-xl">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{product.short}</p>
        <span className="mt-4 text-sm font-bold text-gold">Cotiza con nosotros →</span>
      </div>
    </>
  );
  const cls = "group flex flex-col overflow-hidden rounded-2xl border bg-card shadow-card transition hover:-translate-y-1";
  return modal ? (
    <Link to="/catalogo" search={(prev) => ({ ...prev, p: product.slug })} mask={{ to: "/producto/$slug", params: { slug: product.slug } }} resetScroll={false} className={cls}>{inner}</Link>
  ) : (
    <Link to="/producto/$slug" params={{ slug: product.slug }} className={cls}>{inner}</Link>
  );
}

export function ProductDetail({ product, headingLevel = "h1" }: { product: Product; headingLevel?: "h1" | "h2" }) {
  const [active, setActive] = useState(0);
  const H = headingLevel;
  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div>
        <div className="aspect-square overflow-hidden rounded-2xl border"><ProductImage product={product} src={product.images[active]} className="h-full w-full" /></div>
        {product.images.length > 1 && (
          <div className="mt-3 flex gap-2">
            {product.images.map((src, i) => (
              <button key={src} onClick={() => setActive(i)} className={`h-16 w-16 overflow-hidden rounded-lg border-2 ${i === active ? "border-leaf" : "border-transparent"}`}>
                <img src={src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
      <div>
        <Link to="/catalogo" search={{ categoria: product.category }} className="text-xs font-bold uppercase tracking-wider text-emerald hover:underline">{categoryName(product.category)}</Link>
        <H className="mt-1 text-3xl md:text-4xl">{product.name}</H>
        <p className="mt-2 font-bold text-gold">Cotiza con nosotros</p>
        <p className="mt-4 text-muted-foreground">{product.description}</p>
        {product.variants && (
          <div className="mt-6">
            <h3 className="text-lg">Presentaciones</h3>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {product.variants.map((v) => (
                <div key={v.name} className="rounded-xl border border-gold/40 bg-mist p-3"><p className="font-bold">{v.name}</p><p className="text-sm text-muted-foreground">{v.detail}</p></div>
              ))}
            </div>
          </div>
        )}
        <h3 className="mt-6 text-lg">Especificaciones</h3>
        <dl className="mt-2 divide-y rounded-xl border">
          {product.specs.map((s) => (
            <div key={s.label} className="flex justify-between gap-4 px-4 py-2 text-sm"><dt className="text-muted-foreground">{s.label}</dt><dd className="text-right font-semibold">{s.value}</dd></div>
          ))}
        </dl>
        <h3 className="mt-6 text-lg">Usos</h3>
        <ul className="mt-2 space-y-1 text-sm">
          {product.uses.map((u) => <li key={u} className="flex gap-2"><Check className="h-4 w-4 text-leaf" />{u}</li>)}
        </ul>
        <a href={waLink(`Hola Proveedora Express, quiero cotizar: ${product.name}`)} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-leaf px-6 py-3 font-bold text-coal transition hover:brightness-95">
          <MessageCircle className="h-5 w-5" /> Cotizar por WhatsApp
        </a>
        {related.length > 0 && (
          <p className="mt-6 text-sm text-muted-foreground">
            También te puede interesar:{" "}
            {related.map((r, i) => (
              <span key={r.slug}>{i > 0 && ", "}<Link to="/producto/$slug" params={{ slug: r.slug }} className="font-semibold text-emerald hover:underline">{r.name}</Link></span>
            ))}
          </p>
        )}
      </div>
    </div>
  );
}
