import React, { useState, useEffect } from 'react'
import './services.css'
import { getItemByCategory } from "../../api/itemApi";



const Services = () => {
  const [services, setServices] = useState([]);

  let categorySlug = "we-provide",
  p = 1,
  ps = 5;

  useEffect(() => {
    getItemByCategory(categorySlug, ps, p).then((data) => {
      if (data) {
        setServices(data.items);
        console.log(data.items);
      } else setServices([]);
    });
  }, [categorySlug, ps, p]);

  return (
    <div className='service'>
        <div className="headser">
        <h1>WE PROVIDE</h1>
        <a>Professional and trusted services with cost-effective and exceptional expertise to deal with any complexities in scalable projects</a>
        </div>
        
        <div className="grid-container">
        {services.length > 0 ? services.map((item, index) => (

            <div className="grid-item services-item" key={index}>
              <img className='logo-services-item' src={item.image.imageUrl} alt="" />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>

        )):null}
        </div>
          </div>
  )
}

export default Services