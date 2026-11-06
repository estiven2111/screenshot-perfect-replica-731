import vinipel from "@/assets/vinipel-1500.webp.asset.json";
import chicle from "@/assets/papel-chicle.webp.asset.json";
import catalogo from "@/assets/catalogo-vinipel.webp.asset.json";
import cinta from "@/assets/cinta-transparente.webp.asset.json";
import bolsas from "@/assets/bolsas.webp.asset.json";
import servilleta from "@/assets/servilleta-elite.webp.asset.json";

export const categories = [
  { slug: "vinipel-y-papel-chicle", name: "Vinipel y papel chicle" },
  { slug: "cintas", name: "Cintas" },
  { slug: "bolsas", name: "Bolsas" },
  { slug: "servilletas", name: "Servilletas" },
  { slug: "cucharas-plasticas", name: "Cucharas plásticas" },
  { slug: "tenedores-plasticos", name: "Tenedores plásticos" },
  { slug: "cajas-plasticas", name: "Cajas plásticas para comida" },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

export type Product = {
  slug: string;
  name: string;
  category: CategorySlug;
  short: string;
  description: string;
  images: string[];
  specs: { label: string; value: string }[];
  uses: string[];
  variants?: { name: string; detail: string }[];
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: "vinipel-x-1500-mt",
    name: "Vinipel x 1.500 mt",
    category: "vinipel-y-papel-chicle",
    short: "Vinipel a base de aceite vegetal, apto para alimentos, con registro INVIMA.",
    description:
      "Vinipel x 1.500 metros hecho a base de aceite vegetal, apto para la manipulación de alimentos. Contamos con registro INVIMA y ficha técnica disponible.",
    images: [vinipel.url],
    specs: [
      { label: "Longitud", value: "1.500 metros" },
      { label: "Material", value: "A base de aceite vegetal" },
      { label: "Certificación", value: "Registro INVIMA" },
      { label: "Ficha técnica", value: "Disponible" },
      { label: "Colores", value: "Blanco, negro, rosado y transparente" },
    ],
    uses: ["Carnes, frutas y verduras", "Panaderías y restaurantes", "Supermercados"],
    featured: true,
  },
  {
    slug: "papel-chicle-industrial",
    name: "Papel chicle industrial",
    category: "vinipel-y-papel-chicle",
    short: "Fabricantes y rebobinadores. Uso industrial y apto para alimentos.",
    description:
      "Somos fabricantes y rebobinadores de papel chicle para uso industrial y para la manipulación de alimentos.",
    images: [chicle.url],
    specs: [
      { label: "Uso", value: "Industrial y alimentos" },
      { label: "Colores", value: "Blanco, negro, rosado y transparente" },
    ],
    uses: ["Embalaje de estibas y cajas", "Protección en trasteos", "Manipulación de alimentos"],
    featured: true,
  },
  {
    slug: "catalogo-de-vinipel",
    name: "Catálogo de vinipel",
    category: "vinipel-y-papel-chicle",
    short: "Cuatro presentaciones de vinipel para cada necesidad.",
    description: "Elige la presentación de vinipel que mejor se adapte a tu negocio.",
    images: [catalogo.url],
    specs: [{ label: "Presentaciones", value: "4" }],
    uses: ["Cocinas", "Cafeterías", "Tiendas y hogares"],
    variants: [
      { name: "X300 Largo", detail: "Peso 460 g a 465 g" },
      { name: "X300 Corto", detail: "Peso 260 g a 265 g" },
      { name: "X100", detail: "Peso 270 g a 275 g" },
      { name: "X500", detail: "Peso 650 g a 660 g" },
    ],
    featured: true,
  },
  {
    slug: "cinta-transparente-de-empaque",
    name: "Cinta transparente de empaque",
    category: "cintas",
    short: "Fabricantes y distribuidores directos de cinta de empaque.",
    description: "Cinta transparente para sellar cajas y empaques. Somos fabricantes y distribuidores directos.",
    images: [cinta.url],
    specs: [{ label: "Color", value: "Transparente" }],
    uses: ["Sellado de cajas", "Despachos y bodegas", "Comercio"],
    featured: true,
  },
  {
    slug: "bolsas-por-millar",
    name: "Bolsas por millar",
    category: "bolsas",
    short: "Bolsas negras y blancas por millar.",
    description: "Bolsas plásticas por millar en color negro y blanco, ideales para tiendas y negocios.",
    images: [bolsas.url],
    specs: [
      { label: "Presentación", value: "Por millar" },
      { label: "Colores", value: "Negras y blancas" },
    ],
    uses: ["Tiendas y supermercados", "Basura y aseo", "Domicilios"],
    featured: true,
  },
  {
    slug: "servilleta-elite-practica",
    name: "Servilleta Elite Práctica",
    category: "servilletas",
    short: "Ventas al por mayor y al detal.",
    description: "Servilleta Elite Práctica. Somos distribuidores directos, con ventas al por mayor y al detal.",
    images: [servilleta.url],
    specs: [{ label: "Marca", value: "Elite" }],
    uses: ["Restaurantes", "Cafeterías", "Eventos"],
    featured: true,
  },
  {
    slug: "cucharas-plasticas-desechables",
    name: "Cucharas plásticas desechables",
    category: "cucharas-plasticas",
    short: "Cucharas desechables para tu negocio o evento.",
    description: "Cucharas plásticas desechables para restaurantes, heladerías y eventos.",
    images: [],
    specs: [{ label: "Tipo", value: "Desechable" }],
    uses: ["Restaurantes", "Heladerías", "Eventos"],
  },
  {
    slug: "tenedores-plasticos-desechables",
    name: "Tenedores plásticos desechables",
    category: "tenedores-plasticos",
    short: "Tenedores desechables resistentes.",
    description: "Tenedores plásticos desechables para comidas rápidas, domicilios y eventos.",
    images: [],
    specs: [{ label: "Tipo", value: "Desechable" }],
    uses: ["Comidas rápidas", "Domicilios", "Eventos"],
  },
  {
    slug: "cajas-plasticas-para-comida",
    name: "Cajas plásticas para comida",
    category: "cajas-plasticas",
    short: "Cajas para llevar y domicilios.",
    description: "Cajas plásticas para comida, ideales para llevar y domicilios.",
    images: [],
    specs: [{ label: "Uso", value: "Comida para llevar" }],
    uses: ["Restaurantes", "Domicilios", "Panaderías"],
  },
];

export const categoryName = (slug: string) => categories.find((c) => c.slug === slug)?.name ?? "";
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
