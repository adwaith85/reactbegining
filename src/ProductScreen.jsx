import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function ProductScreen(){

    const [product,SetProduct]=useState({})
    const {id}=useParams()

    const getproductdata=async()=>{

        const res=await fetch('https://fakestoreapi.com/products/'+id);

        const data=await res.json()

SetProduct(data)
    }

    useEffect(()=>{
        getproductdata()
    },[])

    return<>
    
    <h1>{product.title}</h1>

    <img src={product.image} alt="" />
    </>
}


export default ProductScreen