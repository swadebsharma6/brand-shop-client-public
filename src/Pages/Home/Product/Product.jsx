import { useEffect, useState } from "react";


const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://brand-shop-server-site-lgndkuji3-swadebsharma6.vercel.app/products')
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