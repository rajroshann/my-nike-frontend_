import React from 'react'
import {services} from "../constants"
import ServiceCard from '../components/ServiceCard'

function Services() {
  return (
    
    <section className='flex flex-wrap justify-center gap-9       
     '> 
      {services.map((service) => (
        <ServiceCard key={service.label}
               {...service}
        />
      ))}
    </section>
    
    
  )
}

export default Services