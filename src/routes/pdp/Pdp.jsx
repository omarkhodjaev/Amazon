import React, { useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Pdp = () => {
    
    const smth = useParams();
    console.log(smth);
    const [singleProductData,setSingleProductData] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${smth.id}`)
          .then(response => response.json())
          .then(data => setSingleProductData(data))
      },[]);

      
  return (
    <div>
        <div>
            <img src={singleProductData?.image} alt="" />
        </div>
            <h1>{singleProductData?.title}</h1>
    </div>
  )
}

export default Pdp