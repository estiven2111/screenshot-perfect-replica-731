import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, MessageCircle, Instagram, Facebook, Phone, MapPin, Clock, Globe } from "lucide-react";
import logo from "@/assets/logo.webp.asset.json";
import asesora from "@/assets/asesora.png.asset.json";
import { site, waLink } from "@/config/site";
import { categories } from "@/data/products";

export function Logo({ size = 44 }: { size?: number }) {
  return (
    <span className="inline-flex items-center justify-center rounded-full bg-background p-0.5 ring-1 ring-gold/50" style={{ width: size, height: size }}>
      <img src={logo.url} alt="Logo Proveedora Express" width={size} height={size} className="h-full w-full rounded-full object-contain" />
    </span>
  );
}

const nav = [
  { to: "/", label: "Inicio", hash: undefined },
  { to: "/", label: "Nosotros", hash: "nosotros" },
  { to: "/catalogo", label: "Catálogo", hash: undefined },
  { to: "/", label: "Contacto", hash: "contacto" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-on-dark/10 bg-coal/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3 text-on-dark">
          <Logo />
          <span className="font-display text-xl">Proveedora Express</span>
        </Link>
        <nav className="hidden gap-8 md:flex">
          {nav.map((n) => (
            <Link key={n.label} to={n.to} hash={n.hash} className="text-sm font-semibold text-on-dark/80 transition hover:text-leaf">
              {n.label}
            </Link>
          ))}
        </nav>
        <button className="text-on-dark md:hidden" aria-label="Abrir menú" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-on-dark/10 px-4 pb-4 md:hidden">
          {nav.map((n) => (
            <Link key={n.label} to={n.to} hash={n.hash} onClick={() => setOpen(false)} className="py-2 font-semibold text-on-dark/90">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-coal text-on-dark/80">
      <div className="gold-rule" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3"><Logo size={56} /><span className="font-display text-xl text-on-dark">{site.name}</span></div>
          <p className="mt-4 text-sm">{site.slogan}.</p>
          <div className="mt-4 flex gap-3">
            <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-leaf"><Instagram /></a>
            <a href={site.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-leaf"><Facebook /></a>
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-lg text-on-dark">Catálogo</h3>
          <ul className="space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}><Link to="/catalogo" search={{ categoria: c.slug }} className="hover:text-leaf">{c.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-lg text-on-dark">Enlaces</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-leaf">Inicio</Link></li>
            <li><Link to="/" hash="nosotros" className="hover:text-leaf">Nosotros</Link></li>
            <li><Link to="/" hash="preguntas" className="hover:text-leaf">Preguntas frecuentes</Link></li>
            <li><Link to="/" hash="contacto" className="hover:text-leaf">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-lg text-on-dark">Contacto</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2"><Phone className="h-4 w-4 text-gold" /><a href={`tel:${site.phone}`}>{site.phoneDisplay}</a></li>
            <li className="flex gap-2"><Globe className="h-4 w-4 text-gold" />{site.website}</li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 text-gold" />{site.address}</li>
            <li className="flex gap-2"><Clock className="h-4 w-4 text-gold" />{site.hours}</li>
          </ul>
        </div>
      </div>
      <p className="border-t border-on-dark/10 py-5 text-center text-xs">© {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</p>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-end gap-2"
    >
      <img src={asesora.url} alt="" width={64} height={65} className="hidden h-16 w-auto drop-shadow-lg sm:block" />
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-leaf text-coal shadow-card transition group-hover:scale-105">
        <MessageCircle className="h-7 w-7" />
      </span>
    </a>
  );
}
