export const menuItems = [
  { label: "About", href: "about" },
  { label: "Portfolio", href: "portfolio" },
  { label: "Services", href: "services" },
  { label: "Contact", href: "contact" },
];

// --- Social Links ---
export const socialLinks = [
  { label: "GitHub", href: "https://github.com/yourusername" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
  { label: "Instagram", href: "https://instagram.com/yourusername" },
  { label: "Twitter", href: "https://twitter.com/yourusername" },
];

// --- Services / Skills ---
import { Laptop, Camera, PenTool, Code, Layout, Database, Braces } from "lucide-react";
import photographyImage from '../../public/photography.jpg'
import graphicImage from '../../public/graphic.jpg'
import webImage from '../../public/web.jpg'
export const services = [
  {
    icon: Camera,
    title: "Photography",
    description: "Creative photography for weddings, events, and personal projects.",
    toolsUse: [
      { icon: Camera, name: "Canon DSLR" },
      { icon: Code, name: "Lightroom" },
      { icon: Code, name: "Photoshop" },
    ],
    image: photographyImage
  },
  {
    icon: PenTool,
    title: "Graphic Design",
    description: "Logos, branding, and custom designs tailored to your style.",
    toolsUse: [
      { icon: PenTool, name: "Adobe Illustrator" },
      { icon: Code, name: "Adobe Photoshop" },
      { icon: Braces, name: "Figma" },
    ],
    image: graphicImage
  },
  {
    icon: Laptop,
    title: "Web Development",
    description: "Modern responsive websites built with React, Next.js, and Tailwind.",
    toolsUse: [
      { icon: Laptop, name: "Next.js" },
      { icon: Layout, name: "React" },
      { icon: Code, name: "Tailwind CSS" },
      { icon: Database, name: "Supabase" },
    ],
    image: webImage
  },
];



