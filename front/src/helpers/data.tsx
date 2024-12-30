import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Youtube,
  Crop,
  Pencil,
  Computer,
  Book,
  // Speech,
  Instagram,
  Github,
} from "lucide-react";

export const socialNetworks = [
  {
    id: 1,
    logo: <Youtube size={30} strokeWidth={1} />,
    src: "https://www.youtube.com/@fedelopezgaitan",
  },
  {
    id: 2,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/federicolopezgaitan",
  },
  {
    id: 3,
    logo: <Instagram size={30} strokeWidth={1} />,
    src: "https://www.instagram.com/fedelopezgaitan/",
  },
  {
      id: 4,
      logo: <Github size={30} strokeWidth={1} />,
      src: "https://github.com/FedericoLGaitan",
  },
  // {
  //     id: 5,
  //     logo: <Twitch size={30} strokeWidth={1} />,
  //     src: "#!",
  // },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fefefe" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={25} color="#fefefe" strokeWidth={1} />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Book",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "/services",
  },
  {
    id: 4,
    title: "Target",
    icon: <CodeSquare size={25} color="#fefefe" strokeWidth={1} />,
    link: "/portfolio",
  },
  // {
  //   id: 5,
  //   title: "Testimonials",
  //   icon: <Speech size={25} color="#fefefe" strokeWidth={1} />,
  //   link: "/testimonials",
  // },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Frontend Developer",
    subtitle: "Proyecto Final SoyHenry Bootcamp",
    description:
      "With a team, we develop  a full stack web application using React, Redux, Node.js, Express, and PostgreSQL. Implemented features such as user authentication, product filtering, and shopping cart functionality. Integrated third-party APIs to enhance the user experience and streamline the checkout process. Deployed the application to Heroku and configured CI/CD pipelines for automated testing and deployment.",
    date: "Nov 2024 ",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    subtitle: "Online Car Retailer",
    description:
      "Currently working on a full stack web application that allows users to browse and purchase cars online....",
    date: "present",
  },
  // {
  //     id: 3,
  //     title: "Especialista en Desarrollo Frontend",
  //     subtitle: "CodeForge Solutions",
  //     description: "Como desarrollador frontend, tendrás la oportunidad de colaborar en proyectos diversos y desafiantes que te permitirán expandir tus habilidades y dejar tu huella en el mundo digital.",
  //     date: "Ago 2019",
  // },
  // {
  //     id: 4,
  //     title: "Prácticas Grado",
  //     subtitle: "WebWizards Inc.",
  //     description: "Únete a nosotros mientras creamos sitios web y aplicaciones interactivas que sorprenden y deleitan a nuestros clientes. Si tienes pasión por el diseño y la programación, y disfrutas colaborar en un entorno creativo, ¡queremos conocerte!        ",
  //     date: "Mar 2018",
  // },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 10,
    text: "Años de experiencia",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 80,
    text: "Clientes satisfechos",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: 220,
    text: "Proyectos finalizados",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 3,
    endCounter: 30,
    text: "Premios ganadores",
    lineRight: false,
    lineRightMobile: false,
  },
];

export const serviceData = [
  {
    icon: <Crop />,
    title: "Branding",
    description:
      "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
  },
  {
    icon: <Pencil />,
    title: "Diseño web",
    description:
      "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
  },
  {
    icon: <Computer />,
    title: "Desarrollo web",
    description:
      "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
  },
  {
    icon: <Book />,
    title: "Copywriting",
    description:
      "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
  },
];

export const dataServices = [

  {
    id: 1,
    title: "Landing Page",
    description: "Desing and development of landing pages that drive conversions and boost your online presence",
    price: "$500",
    image: "/landing-page.png",
  },
  {
    id: 3,
    title: "Blog",
    description: "Development of professional and attractive blogs that attract your audience and reinforce your brand",
    price: "$300",
    image: "/blog.png",
  },
  {
    id: 4,
    title: "Web App",
    description: "Design and development of custom web applications that improve the efficiency of your business",
    price: "$800",
    image: "/web-app.png",
  },
  {
    id: 2,
    title: "E-commerce",
    description: "Creation of custom e-commerce websites that enhance the shopping experience for your customers",
    price: "$1000",
    image: "/e-commerce.png",
  },
]

export const dataPortfolio = [
  {
    id: 1,
    title: "Eventop",
    image: "/eventop.png",
    urlGithub: "https://github.com/ArielDRighi/Eventop-Frontend",
    urlDemo: "https://www.youtube.com/watch?v=CJMwuEcYB44&t=2s&ab_channel=FedeL%C3%B3pezGaitan.",
  },
  {
    id: 2,
    title: "Peautos",
    image: "/peautos.png",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 3,
    title: "E-comerce Demo",
    image: "/ecomdemo.jpeg",
    urlGithub: "https://github.com/FedericoLGaitan/ecom-demo-portfolio",
    urlDemo: "#!",
  },
  {
    id: 4,
    title: "Restaurant Landing",
    image: "/restauran-landing.jpg",
    urlGithub: "https://github.com/FedericoLGaitan/restaurant-landing",
    urlDemo: "#!",
  },
  // {
  //   id: 5,
  //   title: "Webs Impactantes",
  //   image: "/image-5.jpg",
  //   urlGithub: "#!",
  //   urlDemo: "#!",
  // },
  // {
  //   id: 6,
  //   title: "Web Dinámica",
  //   image: "/image-6.jpg",
  //   urlGithub: "#!",
  //   urlDemo: "#!",
  // },
  // {
  //   id: 7,
  //   title: "Dark Web ",
  //   image: "/image-7.jpg",
  //   urlGithub: "#!",
  //   urlDemo: "#!",
  // },
  // {
  //   id: 8,
  //   title: "E-commerce web",
  //   image: "/image-8.jpg",
  //   urlGithub: "#!",
  //   urlDemo: "#!",
  // },
];

export const dataTestimonials = [
  {
    id: 1,
    name: "George Snow",
    description:
      "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
    imageUrl: "/profile1.png",
  },
  {
    id: 2,
    name: "Juan Pérez",
    description:
      "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
    imageUrl: "/profile2.png",
  },
  {
    id: 3,
    name: "María García",
    description:
      "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
    imageUrl: "/profile3.png",
  },
  {
    id: 4,
    name: "Laura Snow",
    description:
      "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
    imageUrl: "/profile4.png",
  },
  {
    id: 5,
    name: "Carlos Sánchez",
    description:
      "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
    imageUrl: "/profile5.png",
  },
  {
    id: 6,
    name: "Antonio Martínez",
    description:
      "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
    imageUrl: "/profile6.png",
  },
];
