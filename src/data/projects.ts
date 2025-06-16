import { NextJS, Tailwind, React, Css, Html } from "./icons"

// Lista de tecnologías a resaltar
const TECH_KEYWORDS = [
  'React', 'Next.js', 'NextJS', 'CSS', 'HTML', 'JavaScript', 'TypeScript',
  'Node.js', 'WordPress', 'Vue.js', 'Astro', 'Tailwind', 'Material UI', 'MUI',
  'Redux', 'Redux Thunk', 'API', 'SSR', 'Figma', 'Make.com', 'Vercel'
];

// Función para resaltar tecnologías en el texto
const highlightTechnologies = (text: string): string => {
  let result = text;
  TECH_KEYWORDS.forEach(tech => {
    const regex = new RegExp(`\\b${tech}\\b`, 'g');
    result = result.replace(regex, `<b>${tech}</b>`);
  });
  return result;
};

export const CATEGORIES = [
  "Infografías",
  "Desarrollo web",
  "Experimentos",
]

export const TAGS = { 
  NEXT: {
    name: "Next.js",
    class: "bg-black text-white",
    icon: NextJS,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: Tailwind,
  },
  REACT: {
    name: "React.js",
    class: "bg-[#077ea4] text-white",
    icon: React,
  },
  CSS: {
    name: "CSS",
    class: "bg-[#077ea4] text-white",
    icon: Css,
  },
  HTML: {
    name: "HTML",
    class: "bg-[#077ea4] text-white",
    icon: Html,
  },
}

export const PROJECTS = [
  {
    cat: "Infografías",
    title: "Filtro de datos",
    description:
      highlightTechnologies("Desarrollo de filtro de datos para la noticia de ¿Quiénes son los cardenales que elegirán al nuevo papa? Implementado con React y JavaScript."),
    link: "https://www.rtve.es/noticias/20250428/buscador-quienes-son-cardenales-elegiran-nuevo-papa/16471993.shtmll",
    image: "https://img2.rtve.es/i/?w=1600&i=01745579621311.jpg",
    tags: [TAGS.REACT, TAGS.CSS, TAGS.HTML],
    github: '',
  },
  {
    cat: "Infografías",
    title: "Desarrollo de Landing",
    description:
      highlightTechnologies("Noticia con módulo de scrolling horizontal, parallax de figuras en canvas, personalización de la maquetación HTML y CSS de la página y conexión con API de noticias."),
    link: "https://www.rtve.es/noticias/20241005/muertes-palestinos-victimas-guerra-gaza-israel/16274312.shtml",
    image: "https://img.rtve.es/i/ano-guerra-gaza_01728057628100.jpg",
    tags: [TAGS.REACT, TAGS.CSS, TAGS.HTML],
    github: ''
  },
  {
    cat: "Infografías",
    title: "Frame a Frame",
    description:
      "Para los juegos olimpícos de Paris 2024 hubo la necesidad de crear un módulo para reproducir secuencias de imagenes con el scroll.",
    link: "https://www.rtve.es/deportes/20240729/resumen-mountain-bike-juegos-olimpicos-paris-2024/16202036.shtml",
    image: "https://img2.rtve.es/i/?w=1600&i=01722270780057.jpg",
    tags: [TAGS.REACT, TAGS.CSS, TAGS.HTML],
    github: ''
  },
  {
    cat: "Infografías",
    title: "Mapa de playas",
    description:
      "Maquetación de la interfaz UI/UX y desarrollo de la integración con la base de datos, incluyendo la interactividad del listado y las fichas de detalle.",
    link: "https://www.rtve.es/noticias/20240725/gran-mapa-playas-espana-buscador/16164854.shtml",
    image: "https://img2.rtve.es/i/?w=1600&i=01721834516789.jpg",
    tags: [TAGS.CSS, TAGS.HTML],
    github: ''
  },
  {
    cat: "Infografías",
    title: "Videos en autoplay",
    description:
      "Reproducción automática y configuración de audio con React.",
    link: "https://www.rtve.es/noticias/20231201/guerra-gaza-diario-testigo-incomodo/2462999.shtml",
    image: "https://nachodiaz.me/wp-content/uploads/2024/01/gaza.gif",
    tags: [TAGS.REACT, TAGS.CSS, TAGS.HTML],
    github: ''
  },
  {
    cat: "Infografías",
    title: "Sitio web con scrollytelling con React y MapBox",
    description:
      "Minisitio desarrollado con React de 6 scrollytelling de texto, videos, ubicaciones y recorridos un un mapa con Mapbox. Gestión de reproducción de videos y audio.",
    link: "https://www.rtve.es/noticias/20240306/11m-mapa-especial-regreso-peor-dia-nuestras-vidas/15995328.shtml",
    image: "https://nachodiaz.me/wp-content/uploads/2024/06/img2.rtve_.jpg",
    tags: [TAGS.REACT, TAGS.CSS, TAGS.HTML],
    github: ''
  },
  {
    cat: "Infografías",
    title: "Scrollytelling Horizontal y GSAP",
    description:
      "Módulo para scrollytelling horizontal desarrollado con React y GSAP",
    link: "https://www.rtve.es/noticias/20231215/visita-mercado-cena-navidad-aun-mas-cara-este-ano/2467151.shtml",
    image: "/img/img-apertura.jpg",
    tags: [TAGS.REACT, TAGS.CSS, TAGS.HTML],
    github: ''
  },
  {
    cat: "Infografías",
    title: "Drag and drop y API de video",
    description:
      "Desarrollo de módulo interactivo con drag and drop y API de vídeo con React",
    link: "https://www.rtve.es/noticias/20230928/productos-alimentos-mas-desperdiciados-espana/2456540.shtm",
    image: "/img/desperdicios.gif",
    tags: [TAGS.REACT, TAGS.CSS, TAGS.HTML],
    github: ''
  },
  {
    cat: "Infografías",
    title: "Desarrollo de componentes web de filtro de datos React",
    description:
      "Desarrollo de módulo interactivo para mostrar quienes son los diputados en el congreso.",
    link: "https://www.rtve.es/noticias/20230817/composicion-congreso-diputados/2453798.shtml",
    image: "/img/filtro-diputados.gif",
    tags: [TAGS.REACT, TAGS.CSS, TAGS.HTML],
    github: ''
  },
  {
    cat: "Desarrollo web",
    title: "CMS para PRATO_DO",
    description:
      highlightTechnologies("Actualmente me encuentro desarrollando el sitio web de PRATO_DO usando WordPress y React, una organización dedicada a la innovación alimentaria, con el objetivo de mejorar la calidad de vida de las personas a través de soluciones sostenibles, creativas y conscientes centradas en la alimentación."),
    link: "https://pratodo.org",
    image: "/img/pratodo_do.png",
    tags: [TAGS.REACT, TAGS.CSS, TAGS.HTML],
    github: ''
  },
  {
    cat: "Desarrollo web",
    title: "Citizens.legal",
    description:
      highlightTechnologies("Plataforma web desarrollada con WordPress que permite a los usuarios armar y gestionar sus propios casos, cargando documentos y siguiendo contenido guiado. Se personalizaron reglas de privacidad y seguridad, se automatizaron procesos clave usando Make.com, logrando ahorrar tiempo operativo y mejorar la experiencia del usuario."),
    link: "",
    image: "/img/citizens.legal.png",
    tags: [TAGS.REACT, TAGS.CSS, TAGS.HTML],
    github: ''
  },
  {
    cat: "Desarrollo web",
    title: "Comunidades Beforget",
    description:
      highlightTechnologies("Integración con la API de Slack, desarrollo de página de filtrado por categorías y términos usando React, y personalización del dashboard de usuario con carruseles para eventos, sesiones y proyectos. Creación de plugin personalizado con WordPress para gestionar proyectos y sesiones, con filtros por términos ODS."),
    link: "https://thesocialcircle.es/login/",
    image: "/img/bfg-comunidades.gif",
    tags: [TAGS.REACT, TAGS.CSS, TAGS.HTML],
    github: ''
  },
  {
    cat: "Desarrollo web",
    title: "Desarrollo del sitio web de la asociación.",
    description:
      highlightTechnologies("Rediseño y desarrollo de un sitio web autoadministrable, orientado a su implementación en WordPress usando Divi y Divi Builder. Se desarrolló un componente en React para mostrar empresas y profesionales asociados, con filtrado por categorías, paginación en el frontend y modales con React Portals para ver detalles."),
    link: "https://aesiguenza.es",
    image: "/img/aes.png",
    tags: [TAGS.REACT, TAGS.CSS, TAGS.HTML],
    github: ''
  },
  {
    cat: "Desarrollo web",
    title: "BergMedical",
    description:
      highlightTechnologies("Desarrollo de frontend con integración de WooCommerce usando WordPress como CMS headless. Renderizado SSR de productos, UI con MUI, y despliegue continuo automatizado (CI) con ramas main y develop. Implementación de endpoint en Node.js para envío de formularios vía SMTP y botón de WhatsApp con contenido dinámico basado en el producto."),
    link: "https://bergmedical-f3u5szigo-sonidiaz.vercel.app",
    image: "/img/bergmedical.png",
    tags: [TAGS.REACT, TAGS.CSS, TAGS.HTML],
    github: ''
  },
  {
    cat: "Desarrollo web",
    title: "La Cabrera.eco",
    description:
      highlightTechnologies("Sitio web desarrollado con WordPress y React como plataforma para dar a conocer los servicios y productos que tiene LaCabrera.eco para fomentar y dinamizar la economía local de los pueblos y promover la sostenibilidad de comunidades locales."),
    link: "https://lacabrera.eco",
    image: "/img/la-cabrera.png",
    tags: [TAGS.REACT, TAGS.CSS, TAGS.HTML],
    github: ''
  },
  {
    cat: "Experimentos",
    title: "Dashboard GlocalHack",
    description:
      highlightTechnologies("Sistema de dashboard para visualizar proyectos ganadores seleccionados desde un canal de Slack. Desarrollado con Next.js, la API de Slack y React con TypeScript."),
    link: "",
    image: "/img/glocalhack.jpg",
    tags: [TAGS.REACT, TAGS.CSS, TAGS.HTML],
    github: 'https://github.com/sonidiaz/univhack22'
  },
  {
    cat: "Experimentos",
    title: "Weather App",
    description:
      highlightTechnologies("Prototipo de aplicación del clima con visualización por ciudad. Gestión de estado con Redux y Redux Thunk para asincronía, rutas con React Router y visualización de datos con Recharts."),
    link: "https://weather-data-app.vercel.app",
    image: "/img/wheatherapp.png",
    tags: [TAGS.REACT, TAGS.CSS, TAGS.HTML],
    github: ''
  },
  {
    cat: "Experimentos",
    title: "BeforGet Sonrisa",
    description:
      highlightTechnologies("Mini app interactiva que detecta tu sonrisa a través de la cámara y reproduce un video solo cuando estás sonriendo. Desarrollada con Vue.js y la librería de reconocimiento facial Jeeliz."),
    link: "https://bfg-smile-ll5lf599n.now.sh",
    image: "/img/bfg-sonrisa.png",
    tags: [TAGS.REACT, TAGS.CSS, TAGS.HTML],
    github: ''
  },
  {
    cat: "Experimentos",
    title: "Ya no me vienen con cuentos",
    description:
      highlightTechnologies("Desarrollo de sitio web con HTML, CSS y JavaScript para campaña de publicidad."),
    link: "https://nachodiaz.me/trabajos/nomascuentos.cl",
    image: "/img/cuentos.jpg",
    tags: [TAGS.REACT, TAGS.CSS, TAGS.HTML],
    github: ''
  },
  {
    cat: "Experimentos",
    title: "Familia Costa",
    description:
      "Prototipo de sitio web para campaña de marketing",
    link: "https://nachodiaz.me/trabajos/famila-costa/",
    image: "/img/familia-galletas.png",
    tags: [TAGS.REACT, TAGS.CSS, TAGS.HTML],
    github: ''
  },
  {
    cat: "Experimentos",
    title: "Reutiliza",
    description:
      "Prototipo de sitio web para campaña de marketing",
    link: "https://nachodiaz.me/trabajos/reutiliza/",
    image: "/img/reutiliza.jpg",
    tags: [TAGS.REACT, TAGS.CSS, TAGS.HTML],
    github: ''
  },
  {
    cat: "Experimentos",
    title: "Conciencia Celeste",
    description:
      "Prototipo de sitio web para campaña de marketing",
    link: "https://nachodiaz.me/trabajos/conciencia-celeste/",
    image: "/img/conciencia.png",
    tags: [TAGS.REACT, TAGS.CSS, TAGS.HTML],
    github: ''
  }
]
