"use client"
import React, { useState } from "react"
import { menuItems } from "@/_data/data"
import Link from "next/link"
import { Menu, X } from "lucide-react"

function Nav() {
  const [menuShow, setMenuShow] = useState(false)

  return (
    <div>
      {/* Menu Button */}
      <button
        onClick={() => setMenuShow(!menuShow)}
        className="p-2 z-50 relative"
      >
        {menuShow ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Nav with transition */}
      <nav
        className={`fixed left-0 w-full bg-[var(--background)] text-[var(--foreground)] shadow-lg overflow-hidden transition-all duration-500 ease-in-out
        ${menuShow ? "max-h-60 top-[60px]" : "max-h-0 top-[60px]"}`}
      >
        <div className="flex flex-col gap-4 p-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={`#${item.href}`}
              onClick={() => setMenuShow(false)} // close after click
              className="hover:text-[var(--accent)]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default Nav
