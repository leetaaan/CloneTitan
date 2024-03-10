import React, { useState, useEffect } from "react";
import "./services.css";
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
      <div className="box-innovation">
        <a className="title-innovation">INNOVATIONS</a>
        <div className="items">
          <div className="item">
            <img className="img-innovation" src={`https://titancorpvn.com/assets/images/innovation.jpg`} alt="#" />
              <p className="text-innovation">
                We always hunger for new idea creation by providing facilities for product development and an 
                environment where creativity leverages our skills and services.
              </p>
          </div>
        </div>
      </div>
    // <>
    //   {services.length > 0 ? services.map((item, index) => (
    //        <div className="box-innovation">
    //        <a className="title-innovation">INNOVATIONS</a>
    //        <div className="items">
    //          <div className="item">
    //            <img className="img-innovation" src={item.image.imageURL} alt="#" />
    //              <p className="text-innovation">
    //                We always hunger for new idea creation by providing facilities for product development and an 
    //                environment where creativity leverages our skills and services.
    //              </p>
    //          </div>
    //        </div>
    //      </div>
            
    //       ))
    //     : null}
        
    // </>
    
  );
};

export default Services;
