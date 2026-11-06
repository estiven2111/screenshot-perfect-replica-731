import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Factory, ShieldCheck, BadgeDollarSign, Truck, Palette, MessageCircle, Target, Eye, Mail, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import logo from "@/assets/logo.webp.asset.json";
import asesora from "@/assets/asesora.png.asset.json";
import { site, waLink } from "@/config/site";
import { products, categories } from "@/data/products";
import { ProductCard } from "@/components/site/ProductParts";

const faqs = [
  { q: "¿Venden vinipel apto para alimentos?", a: "Sí. Nuestro vinipel está hecho a base de aceite vegetal y es apto para la manipulación de alimentos." },
  { q: "¿Tienen registro INVIMA?", a: "Sí, nuestro vinipel cuenta con registro INVIMA y ficha técnica disponible. Pídela por WhatsApp." },
  { q: "¿Venden al por mayor y al detal?", a: "Sí. Atendemos negocios, distribuidores y emprendedores con ventas al por mayor y al detal." },
  { q: "¿Hacen envíos?", a: "Sí, despachamos con agilidad. Escríbenos por WhatsApp con tu ubicación y te confirmamos tiempos y costos." },
  { q: "¿En qué colores tienen vinipel y papel chicle?", a: "Blanco, negro, rosado y transparente." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Proveedora Express | Vinipel y desechables al por mayor" },
      { name: "description", content: "Proveedora Express: fabricantes y rebobinadores de vinipel y papel chicle con registro INVIMA. Cintas, bolsas, servilletas y desechables." },
      { property: "og:title", content: "Proveedora Express | Economía, agilidad y buen servicio" },
      { property: "og:description", content: "Fabricantes y distribuidores directos de vinipel, papel chicle y desechables." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: `${site.url}${logo.url}` },
      { name: "twitter:image", content: `${site.url}${logo.url}` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org", "@type": ["Organization", "LocalBusiness"], name: site.name, slogan: site.slogan,
        url: site.url, logo: `${site.url}${logo.url}`, telephone: site.phone, address: site.address,
        sameAs: [site.instagram, site.facebook],
      }) },
      { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }) },
    ],
  }),
  component: Index,
});

const reasons = [
  { icon: Factory, t: "Fabricantes y distribuidores directos", d: "Sin intermediarios: mejores precios y respaldo." },
  { icon: ShieldCheck, t: "Vinipel con registro INVIMA", d: "Apto para alimentos, con ficha técnica disponible." },
  { icon: BadgeDollarSign, t: "Economía en precios", d: "Al por mayor y al detal." },
  { icon: Truck, t: "Agilidad en despachos", d: "Tu pedido llega a tiempo." },
  { icon: Palette, t: "Variedad de colores y presentaciones", d: "Blanco, negro, rosado y transparente." },
  { icon: MessageCircle, t: "Atención personalizada", d: "Te asesoramos por WhatsApp." },
];

function Index() {
  const featured = products.filter((p) => p.featured);
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero pt-16 text-on-dark">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <img src={logo.url} alt="Proveedora Express logo" width={96} height={96} className="h-24 w-24 rounded-full bg-background p-1 ring-2 ring-gold" />
            <p className="eyebrow mt-6">Fabricantes · Rebobinadores · Distribuidores</p>
            <h1 className="mt-3 text-5xl leading-tight md:text-6xl">Proveedora Express: vinipel y desechables para tu negocio</h1>
            <p className="mt-4 text-xl italic text-gold">"{site.slogan}"</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/catalogo" className="rounded-full bg-leaf px-7 py-3 font-bold text-coal transition hover:brightness-95">Ver catálogo</Link>
              <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gold px-7 py-3 font-bold text-on-dark transition hover:bg-gold hover:text-coal">
                <MessageCircle className="h-5 w-5" /> WhatsApp
              </a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute bottom-0 h-72 w-72 rounded-full bg-emerald/50 blur-3xl" />
            <img src={asesora.url} alt="Asesora virtual de Proveedora Express" width={622} height={635} fetchPriority="high" className="relative w-full max-w-md" />
          </div>
        </div>
        <div className="gold-rule" />
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="scroll-mt-16 px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">Quiénes somos</p>
          <h2 className="mt-3 text-4xl">Fabricantes de vinipel y papel chicle</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Somos Proveedora Express, una empresa fabricante, rebobinadora y distribuidora directa de insumos de empaque y desechables para restaurantes, cafeterías, panaderías, tiendas, supermercados, eventos y emprendedores. Producimos y rebobinamos vinipel y papel chicle industrial y apto para alimentos, y ofrecemos cintas, bolsas, servilletas, cubiertos y cajas plásticas para comida, con ventas al por mayor y al detal. Al ser fabricantes y distribuidores directos, te damos mejores precios, respaldo y rapidez en cada pedido.
          </p>
        </div>
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          {[
            { icon: Target, t: "Misión", d: "Proveer a nuestros clientes insumos de empaque y desechables de calidad, con productos aptos para el manejo de alimentos y respaldo de registro INVIMA, a precios competitivos, con entregas ágiles y una atención cercana, para que sus negocios operen sin contratiempos." },
            { icon: Eye, t: "Visión", d: "Ser reconocidos como la proveedora de empaques y desechables más confiable y ágil de la región, destacando por la calidad de nuestra fabricación, la cercanía con el cliente y el cumplimiento, y crecer junto a los negocios que nos eligen." },
          ].map((b) => (
            <article key={b.t} className="rounded-2xl border-t-4 border-gold bg-mist p-8 shadow-card">
              <b.icon className="h-8 w-8 text-emerald" />
              <h3 className="mt-4 text-2xl">{b.t}</h3>
              <p className="mt-3 text-muted-foreground">{b.d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Destacados */}
      <section className="bg-mist px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div><p className="eyebrow">Productos destacados</p><h2 className="mt-3 text-4xl">Vinipel, cintas, bolsas y más</h2></div>
            <Link to="/catalogo" className="font-bold text-emerald hover:underline">Ver todo el catálogo →</Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>

      {/* Por qué */}
      <section className="bg-coal px-4 py-20 text-on-dark">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-center">Por qué elegirnos</p>
          <h2 className="mt-3 text-center text-4xl">Economía, agilidad y buen servicio</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r) => (
              <div key={r.t} className="rounded-2xl border border-gold/25 bg-on-dark/5 p-6">
                <r.icon className="h-9 w-9 text-leaf" />
                <h3 className="mt-4 text-xl">{r.t}</h3>
                <p className="mt-2 text-sm text-on-dark/70">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="preguntas" className="scroll-mt-16 px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow text-center">Preguntas frecuentes</p>
          <h2 className="mt-3 text-center text-4xl">Resolvemos tus dudas</h2>
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="text-left text-base font-bold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Contact />
    </main>
  );
}

const formSchema = z.object({
  nombre: z.string().trim().min(2, "Escribe tu nombre").max(100),
  correo: z.string().trim().email("Correo no válido").max(255),
  telefono: z.string().trim().max(20).optional(),
  producto: z.string().min(1, "Elige un producto"),
  mensaje: z.string().trim().min(5, "Escribe un mensaje").max(1000),
});

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    if (fd.empresa) return; // honeypot
    const r = formSchema.safeParse(fd);
    if (!r.success) {
      setErrors(Object.fromEntries(r.error.issues.map((i) => [i.path[0], i.message])));
      return;
    }
    setErrors({});
    const d = r.data;
    const text = `Hola Proveedora Express, soy ${d.nombre} (${d.correo}${d.telefono ? `, ${d.telefono}` : ""}). Me interesa: ${d.producto}. ${d.mensaje}`;
    window.open(waLink(text), "_blank");
    setSent(true);
    e.currentTarget.reset();
  }

  const field = "w-full rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring";
  return (
    <section id="contacto" className="scroll-mt-16 bg-hero px-4 py-20 text-on-dark">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Contáctanos</p>
          <h2 className="mt-3 text-4xl">Cotiza con Proveedora Express</h2>
          <div className="mt-6 flex items-end gap-4">
            <img src={asesora.url} alt="Asesora de Proveedora Express" width={160} height={163} loading="lazy" className="w-40" />
            <ul className="space-y-2 pb-4 text-sm text-on-dark/85">
              <li className="flex gap-2"><Phone className="h-4 w-4 text-gold" /><a href={`tel:${site.phone}`}>{site.phoneDisplay}</a></li>
              <li className="flex gap-2"><Mail className="h-4 w-4 text-gold" />{site.email}</li>
              <li className="flex gap-2"><MapPin className="h-4 w-4 text-gold" />{site.address}</li>
              <li className="flex gap-2"><Clock className="h-4 w-4 text-gold" />{site.hours}</li>
              <li className="flex gap-3 pt-1">
                <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
                <a href={site.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
                <span>{site.social}</span>
              </li>
            </ul>
          </div>
          <iframe title="Ubicación de Proveedora Express" src={site.mapEmbed} loading="lazy" className="mt-4 h-56 w-full rounded-2xl border-0" />
        </div>
        <form onSubmit={onSubmit} noValidate className="space-y-4 rounded-3xl bg-background p-6 text-foreground shadow-card md:p-8">
          <input type="text" name="empresa" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
          {[
            { n: "nombre", l: "Nombre", t: "text" },
            { n: "correo", l: "Correo", t: "email" },
            { n: "telefono", l: "Teléfono (opcional)", t: "tel" },
          ].map((f) => (
            <label key={f.n} className="block text-sm font-semibold">{f.l}
              <input name={f.n} type={f.t} className={`${field} mt-1`} />
              {errors[f.n] && <span className="text-xs text-destructive">{errors[f.n]}</span>}
            </label>
          ))}
          <label className="block text-sm font-semibold">Producto de interés
            <select name="producto" defaultValue="" className={`${field} mt-1`}>
              <option value="" disabled>Selecciona una categoría</option>
              {categories.map((c) => <option key={c.slug}>{c.name}</option>)}
            </select>
            {errors.producto && <span className="text-xs text-destructive">{errors.producto}</span>}
          </label>
          <label className="block text-sm font-semibold">Mensaje
            <textarea name="mensaje" rows={4} className={`${field} mt-1`} />
            {errors.mensaje && <span className="text-xs text-destructive">{errors.mensaje}</span>}
          </label>
          <button type="submit" className="w-full rounded-full bg-leaf py-3 font-bold text-coal transition hover:brightness-95">Enviar mensaje</button>
          {sent && <p role="status" className="rounded-xl bg-mist p-3 text-center text-sm font-semibold text-emerald">¡Gracias! Tu mensaje está listo. Te responderemos muy pronto.</p>}
        </form>
      </div>
    </section>
  );
}
