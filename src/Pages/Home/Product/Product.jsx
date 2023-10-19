import { useEffect, useState } from "react";


const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    }, [])

    return (
        <div>
            <h3>All Loaded Product: {products.length}</h3>
        </div>
    );
};

export default Product;