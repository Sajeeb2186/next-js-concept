import Link from 'next/link';
import React from 'react'

export default function page() {


    const services = [
        {
          slug: "web-development",
          title: "Web Development",
          description: "We build responsive and high-performance websites using modern technologies."
        },
        {
          slug: "graphic-design",
          title: "Graphic Design",
          description: "Creative and visually appealing designs to enhance your brand identity."
        },
        {
          slug: "seo-optimization",
          title: "SEO Optimization",
          description: "Boost your website’s ranking with expert SEO strategies and techniques."
        },
        {
          slug: "digital-marketing",
          title: "Digital Marketing",
          description: "Increase your online presence with targeted digital marketing campaigns."
        },
        {
          slug: "app-development",
          title: "App Development",
          description: "Developing high-quality mobile applications for Android and iOS platforms."
        }
      ];
      
      console.log(services);
      




  return (
    <div className='p-24'> 
    
    {
      services.map((service =>(
        <div className='border-2 p-12'>
         <h3>{service.title}</h3>
         <h3>{service.description}</h3>
         <button className='bg-pink-600 rounded p-2 hover:bg-green-500'>
          
          <Link href={`/service/${service.slug}`}>View Details</Link>
          
         </button>

        </div>
      )))
        


    }
      
    </div>
  )
}
