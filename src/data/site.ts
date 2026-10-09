// TODOS los datos de la empresa se editan aquí.
export const site = {
  name: 'Suministros Hosteleros Sanz',
  legalName: 'Suministros Sanz E.E.',
  nif: 'E-44502805',
  legalForm: 'entidad sin personalidad jurídica',
  years: 'Más de 45 años',
  email: 'suministrosanz@hotmail.com',
  address: 'Camino Hondo, 36',
  city: '12530 Burriana (Castellón)',
  phones: [
    { label: 'Móvil', display: '639 91 36 60', tel: '+34639913660' },
    { label: 'Móvil', display: '617 27 43 42', tel: '+34617274342' },
    { label: 'Fijo', display: '964 51 35 59', tel: '+34964513559' },
  ],
  whatsapp: '34639913660',
  hours: ['Lunes a viernes: 8:00–13:30 y 15:30–18:00', 'Sábados: 8:00–14:00'],
  zone: 'Toda la provincia de Castellón',
};
export const maps = 'https://www.google.com/maps/search/?api=1&query=Suministros+Sanz+E.E.+Burriana';
export const categories = [
  { slug: 'menaje-cocina', name: 'Menaje y cocina', img: '/img/menaje-cocina.webp', text: 'El material de trabajo del día a día en cocina y sala, para negocios y para casa. Cuéntanos qué necesitas y te buscamos la referencia.' },
  { slug: 'vajilla', name: 'Vajilla', img: '/img/vajilla.webp', text: 'Para presentar cada servicio con buena imagen, tanto si montas un local nuevo como si solo necesitas reponer. Consúltanos.' },
  { slug: 'cristaleria', name: 'Cristalería', img: '/img/cristaleria.webp', text: 'Para servir cada bebida con buena imagen. Tenemos variedad para barra, sala y celebraciones. Pregúntanos lo que busques.' },
  { slug: 'cuberteria', name: 'Cubertería', img: '/img/cuberteria.webp', text: 'Lo que deja la mesa lista. Consúltanos para equipar un local o reponer piezas sueltas.' },
  { slug: 'textil-mesa', name: 'Textil y mesa', img: '/img/textil-mesa.webp', text: 'Para vestir la mesa y cuidar la presentación de tu sala. Dinos qué necesitas.' },
  { slug: 'fiestas-penas', name: 'Fiestas y peñas', img: '/img/fiestas-penas.webp', text: 'Todo para celebrar sin complicaciones: fiestas, peñas y reuniones. Consúltanos y te preparamos lo que necesites.' },
  { slug: 'envases-para-llevar', name: 'Envases para llevar', img: '/img/envases-para-llevar.webp', text: 'Para servir pedidos a domicilio y comida para llevar, y para conservar y transportar con seguridad. Hay envases de distintos tamaños y materiales.' },
  { slug: 'desechables', name: 'Desechables', img: '/img/desechables.webp', text: 'Prácticos para el servicio rápido, el día a día y los eventos. Dinos para qué lo necesitas y te orientamos.' },
  { slug: 'consumibles-hosteleria', name: 'Consumibles para hostelería', img: '/img/consumibles-hosteleria.webp', text: 'Lo que se gasta cada día y no puede faltar en un negocio. Pregúntanos y te lo servimos.' },
  { slug: 'celulosa-papel', name: 'Celulosa y papel', img: '/img/celulosa-papel.webp', text: 'Papel para cocina, sala y aseos, en distintos formatos. Pregúntanos por lo que uses en tu negocio.' },
  { slug: 'limpieza-profesional', name: 'Limpieza profesional', img: '/img/limpieza-profesional.webp', text: 'Productos y utensilios para mantener tu negocio impecable, de la cocina a la sala. Si no sabes qué te conviene, cuéntanos para qué lo necesitas.' },
  { slug: 'higiene-proteccion', name: 'Higiene y protección', img: '/img/higiene-proteccion.webp', text: 'Para trabajar con higiene y con seguridad. Cuéntanos qué necesitas y te ayudamos a encontrarlo.' },
  { slug: 'bano-aseos', name: 'Baño y aseos', img: '/img/bano-aseos.webp', text: 'Todo para equipar y mantener los aseos de tu local. Pregúntanos y te aconsejamos.' },
];
// Extintores tiene página propia.
export const extintores = { slug: 'extintores', name: 'Extintores y mantenimiento', href: '/extintores', img: '/img/extintores.webp', text: 'Venta, revisión y mantenimiento de extintores, para tu negocio o para tu casa.' };
export const nav = [
  ['Inicio', '/'], ['Empresa', '/empresa'], ['Productos', '/productos'], ['Servicios', '/servicios'],
  ['Extintores', '/extintores'], ['Zona', '/zona-de-servicio'], ['Contacto', '/contacto'],
];
export const wa = (msg: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
