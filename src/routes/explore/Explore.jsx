import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import e from "./Explore.module.css";

const Explore = () => {

  const [productData, setProductData] = useState([]);

  

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setProductData(data))
  },[]);


  return (
    <div className={e.productsWrapper}>
        {
          productData.map(({image,title,id}) => 
            <article className={e.productWrapper} key={id}>
                <img className={e.productImage} src={image} alt="" />
              <div className={e.productAbout}>
                <h1 className={e.productTitle}>{title}</h1>
                <Link className={e.link} to={`/explorenow/${id}`}> Learn More </Link>
              </div>
            </article>
            )
        }
    </div>
  )
}

export default Explore