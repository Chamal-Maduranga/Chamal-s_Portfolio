// src/_data/data.js

// --- Keep these imports for your images ---
import photographyImage from '../../public/photography.jpg'
import graphicImage from '../../public/graphic.jpg'
import webImage from '../../public/web.jpg'

// --- REMOVE all 'lucide-react' imports from this file ---

// --- Menu Items (This was already correct) ---
export const menuItems = [
  { label: "About", href: "about" },
  { label: "Portfolio", href: "portfolio" },
  { label: "Services", href: "services" },
  { label: "Contact", href: "contact" },
];

// --- Social Links (This was already correct) ---
export const socialLinks = [
  { label: "GitHub", href: "https://github.com/yourusername" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
  { label: "Instagram", href: "https://instagram.com/yourusername" },
  { label: "Twitter", href: "https://twitter.com/yourusername" },
];

// --- Services / Skills (Corrected Section) ---
export const services = [
  {
    icon: "Camera", // Use string identifier
    title: "Photography",
    description: "Creative photography for weddings, events, and personal projects.",
    toolsUse: [
      { icon: "Camera", name: "Canon DSLR" },
      { icon: "Code", name: "Lightroom" },
      { icon: "Code", name: "Photoshop" },
    ],
    image: photographyImage
  },
  {
    icon: "PenTool", // Use string identifier
    title: "Graphic Design",
    description: "Logos, branding, and custom designs tailored to your style.",
    toolsUse: [
      { icon: "PenTool", name: "Adobe Illustrator" },
      { icon: "Code", name: "Adobe Photoshop" },
      { icon: "Braces", name: "Figma" },
    ],
    image: graphicImage
  },
  {
    icon: "Laptop", // Use string identifier
    title: "Web Development",
    description: "Modern responsive websites built with React, Next.js, and Tailwind.",
    toolsUse: [
      { icon: "Laptop", name: "Next.js" },
      { icon: "Layout", name: "React" },
      { icon: "Code", name: "Tailwind CSS" },
      { icon: "Database", name: "Supabase" },
    ],
    image: webImage
  },
];