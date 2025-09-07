'use client'
import Image from "next/image";
import Header from "./_Components/Header/Header";
import Hero from "./_Components/Hero/Hero";
import Portfilio from "./_Components/Portfolio/Portfilio";
import MyServices from "./_Components/MyServices/MyServices";
import ContactForm from "./_Components/Contact/Contact";


export default function Home() {
  return (
    // <div className="bg-[var(--background)] text-[var(--foreground)] p-4">
    //   Hello, this changes with theme!

    //   <ThemeButton />

    //   <div className="mt-60">
    //     <div className="bg-[var(--background)] text-[var(--foreground)] p-4 mb-4">
    //       Background & Foreground
    //     </div>

    //     <div className="bg-[var(--primary)] text-[var(--foreground)] p-4 mb-4">
    //       Primary & Foreground
    //     </div>

    //     <div className="bg-[var(--accent)] text-[var(--foreground)] p-4 mb-4">
    //       Accent & Foreground
    //     </div>

    //   </div>



    // </div>
    <div className="bg-[var(--background)] text-[var(--foreground)]" >
      <Header/>
      <section it="about">
        <Hero/>
      </section>
      <section id="portfolio">
        <Portfilio/>
      </section>
      <section>
        <MyServices/>
      </section>
      <section>
        <ContactForm/>
      </section>

    </div>


  );
}
