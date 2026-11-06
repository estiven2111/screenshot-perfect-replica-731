// Datos de contacto y marca de Proveedora Express — edita aquí y se actualiza todo el sitio.
export const site = {
  name: "Proveedora Express",
  slogan: "Economía, agilidad y buen servicio",
  url: "https://tuproveedoraexpress.com",
  website: "tuproveedoraexpress.com",
  phoneDisplay: "324 318 1349",
  phone: "+573243181349",
  whatsapp: "573243181349",
  whatsappDefaultText: "Hola Proveedora Express, quiero más información",
  email: "[TU_CORREO@dominio.com]",
  instagram: "https://instagram.com/proveedoraexpress",
  facebook: "https://facebook.com/proveedoraexpress",
  social: "@proveedoraexpress",
  address: "[DIRECCIÓN]",
  city: "[CIUDAD]",
  hours: "[HORARIO]",
  mapEmbed: "https://www.google.com/maps?q=Colombia&output=embed",
};

export const waLink = (text: string = site.whatsappDefaultText) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
