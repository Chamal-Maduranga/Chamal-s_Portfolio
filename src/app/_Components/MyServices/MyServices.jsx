import React from 'react'
import Card from '../Card/Card'

function MyServices() {
  return (
    <section id="services" className="py-12 bg-[var(--background)] text-[var(--foreground)]">
  <div className="text-center mb-8">
    <h2 className="text-2xl font-bold">My Services</h2>
    <p className="text-sm">What I can do for you</p>
  </div>

  <div className="grid gap-6 md:grid-cols-3">
    <Card title="Web Design" description="Modern websites with Next.js & Tailwind." />
    <Card title="Graphic Design" description="Creative posters, logos, and branding." />
    <Card title="Photography" description="Professional wedding & event photography." />
  </div>
</section>

  )
}

export default MyServices
