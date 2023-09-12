import {useParams} from 'react-router-dom'
import { useState, useEffect } from "react";
import { callAPI } from "../utils/CallApi";

function ProductPage() {
  const {id} = useParams();
  const [product, setProduct] = useState(null);

 
  
  const getProduct = () => {
    callAPI(`data/products.json`).then((productResults) => {
      setProduct(productResults[id]);
    });
  };


  useEffect(() => {
    getProduct();
  }, []);


  if (!product?.title) return <h1>Loading Product ...</h1>;


  return (
    <div>
      Product {product.title}
    </div>
  )
}

export default ProductPage
