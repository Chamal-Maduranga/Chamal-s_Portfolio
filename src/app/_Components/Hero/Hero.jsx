import React from 'react'
import { services } from '@/_data/data'
import Image from 'next/image'
import profileImage from '../../../../public/p3.png'

function Hero() {
    return (
        <div className='bg-[var(--accent)] pt-5 mt-[60px]'>
            <div className='bg-[var(--accent)] text-[var(--foreground)] font-reemakufi '>
                <p className='text-center text-3xl md:text-5xl'>I'm Chamal Maduranga</p>
                <div className='flex text-[10px] justify-center gap-2 font-light font-poppins md:text-xl'>
                    {services.map((service, index) => (<p key={index}>| {service.title} | </p>))}
                </div>
            </div>

            <div className='flex justify-between h-[380px] md:h-[580px] pt-5'>
                <div className='font-poppins text-[11px]  w-1/2 p-5 md:text-[20px] md:w-[500px] md:mt-[100px] md:ml-[25px] md:tracking-wider'>I’m a passionate designer skilled in image retouching, graphic design, web design, and wedding photography. With an eye for detail and creativity, I combine artistic vision with the latest tools like Next.js and Tailwind CSS to build modern, responsive, and stylish websites. My work blends aesthetic appeal with functionality, ensuring every project leaves a lasting impression.</div>
                <div className='w-1/2 object-cover overflow-hidden'>
                    <Image src={profileImage} alt='profile image' className='object-cover w-full h-full scale-160 translate-x-[30px] translate-y-[30px]' />
                </div>
            </div>
        </div>
    )
}

export default Hero
