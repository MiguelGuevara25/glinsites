import icon from "@/images/icons/close-1-1.png";
import logo4 from "../../public/images/logoGlinsiteHorizontalBlanco.png";
import logo3 from "../../public/images/logoGlinsiteHorizontalBlanco.png";
import logo2 from "../../public/images/logoGlinsiteHorizontalAzul.png";
import logo1 from "../../public/images/logoGlinsiteHorizontalAzul.png";
import logo6 from "../../public/images/logoGlinsiteHorizontalAzul.png";
import logo7 from "../../public/images/logoGlinsiteHorizontalAzul.png";
import logo8 from "../../public/images/logoGlinsiteHorizontalBlanco.png";
import logo5 from "../../public/images/logoGlinsiteHorizontalAzul.png";
import logo10 from "../../public/images/logoGlinsiteVerticalBlanco.png";
import logo9 from "../../public/images/logoGlinsiteHorizontalBlanco.png";

const home = {
  id: 1,
  name: "Home",
  href: "/",
};

const navItemsTwo = [
  { ...home, href: "/" },
  {
    id: 4,
    name: "Projects",
    href: "#portfolio",
  },
  {
    id: 8,
    name: "Contact",
    href: "#contact",
  },
];

const navItems = [
  home,
  {
    id: 2,
    name: "About Us",
    href: "/about",
    subNavItems: [
      { id: 1, name: "About Two", href: "/about-2" },
      { id: 2, name: "About Me", href: "/about-me" },
      { id: 3, name: "Our Mission", href: "/mission" },
      { id: 4, name: "Our History", href: "/history" },
      {
        id: 5,
        name: "Our Team",
        href: "/team",
        subItems: [
          { id: 1, name: "Team 01", href: "/team" },
          { id: 2, name: "Team 02", href: "/team-2" },
          { id: 3, name: "Team 03", href: "/team-3", isNew: true },
        ],
        isNew: true,
      },
      { id: 6, name: "Our Process", href: "/process", isNew: true },
      { id: 7, name: "Our Partner", href: "/partners", isNew: true },
    ],
  },
  {
    id: 3,
    name: "Pages",
    href: "",
    subNavItems: [
      { id: 1, name: "Our Pricing", href: "/pricing" },
      { id: 2, name: "Pricing 02", href: "/pricing-2", isNew: true },
      { id: 3, name: "How it Works", href: "/how-it-works" },
      { id: 4, name: "Coming Soon", href: "/coming-soon" },
      { id: 5, name: "Testimonials", href: "/testimonials" },
      { id: 6, name: "Testimonials Two", href: "/testimonials-2" },
      { id: 7, name: "FAQs", href: "/faqs" },
      { id: 8, name: "Events", href: "/events" },
      { id: 9, name: "Event Details", href: "/event-details" },
      { id: 10, name: "Clients Page", href: "/clients" },
      { id: 11, name: "404 Page", href: "/404" },
      { id: 12, name: "Login Page", href: "/login" },
      { id: 13, name: "Register Page", href: "/register" },
      { id: 14, name: "Forget Page", href: "/forgot-password" },
      {
        id: 15,
        name: "Under Construction",
        href: "/under-construction",
        isNew: true,
      },
    ],
  },
  {
    id: 4,
    name: "Services",
    href: "/services",
    subNavItems: [
      { id: 1, name: "All Services", href: "/services" },
      { id: 2, name: "Services Two", href: "/services-2", isNew: true },
      { id: 3, name: "Website Development", href: "/web-development" },
      { id: 4, name: "Graphic Designing", href: "/graphic-designing" },
      { id: 5, name: "Digital Marketing", href: "/digital-marketing" },
      { id: 6, name: "SEO & Content Writing", href: "/seo" },
      { id: 7, name: "App Development", href: "/app-development" },
      { id: 8, name: "UI/UX Designing", href: "/ui-designing" },
    ],
  },
  {
    id: 5,
    name: "Portfolio",
    href: "/portfolio",
    subNavItems: [
      { id: 1, name: "Portfolio", href: "/portfolio" },
      { id: 2, name: "Portfolio Single 01", href: "/portfolio-single" },
      { id: 3, name: "Portfolio Single 02", href: "/portfolio-single-2" },
      { id: 4, name: "Portfolio Single 03", href: "/portfolio-single-3" },
    ],
  },
  {
    id: 6,
    name: "Shop",
    href: "/shop",
    subNavItems: [
      { id: 1, name: "Shop Page", href: "/shop" },
      { id: 2, name: "Product Details", href: "/product-details" },
      { id: 3, name: "Cart Page", href: "/cart" },
      { id: 4, name: "Checkout Page", href: "/checkout" },
    ],
  },
  {
    id: 7,
    name: "Blog",
    href: "/blog-grid",
    subNavItems: [
      { id: 1, name: "Blog Sidebar", href: "/blog" },
      { id: 2, name: "Blog Grid View", href: "/blog-grid" },
      { id: 3, name: "Blog Single", href: "/blog-single" },
    ],
  },
  {
    id: 8,
    name: "Contact",
    href: "/contact",
    subNavItems: [
      { id: 1, name: "Contact 01", href: "/contact" },
      { id: 2, name: "Contact 02", href: "/contact-2", isNew: true },
    ],
  },
];

export const socials = [
  {
    id: 3,
    icon: "fab fa-instagram",
    href: "https://www.instagram.com/glinsites/",
  },
];

const headerData = {
  title: "Linoor - DIgital Agency NextJS Template",
  title2: "Welcome to Creative Buinsess Agency.",
  title3: "Welcome to Amazing Consulting Agency.",
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  navItems,
  navItemsTwo,
  address: "Suite 20 Golden Street USA",
  phone: "+1 (631)256-0214",
  phone2: "+ 92 666 888 0000",
  email: "glinsites@gmail.com",
  icon,
  socials,
  text: "",
};

export default headerData;
