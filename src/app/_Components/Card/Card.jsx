import React from "react"

function Card({ title, description, children }) {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] shadow-md rounded-xl p-4 w-full max-w-sm border-1 border-gray-300">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm mb-3">{description}</p>
      {children} {/* optional content like button or image */}
    </div>
  )
}

export default Card
