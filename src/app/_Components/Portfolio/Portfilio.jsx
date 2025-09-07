import React from 'react'
import Card from '../Card/Card'
import { services } from '@/_data/data'
import Image from 'next/image'

function Portfilio() {
  return (
    <div>
      <p className='text-5xl uppercase font-reemakufi text-center p-2 mt-10'>portfolio</p>
      <div className='p-5  md:flex  '>
        {services.map((item, index)=>(<div key={index} className='mt-4'>
            <Card title={item.title} description={item.description}>
                <Image src={item.image} alt={item.title} className='rounded-4xl'/>
            </Card>
        </div>))}
        
      </div>
    </div>
  )
}

export default Portfilio
