import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";


const Collection = () => {

   
    const [brands, setBrands] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/brands')
        .then(res => res.json())
        .then(data => setBrands(data))
    }, []);


    return (
        <section className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center underline">Our Collection: {brands.length}</h2>

            <div className="grid md:grid-cols-3 gap-6">
            {
                brands.map(item => <BrandCard
                    key={item._id}
                    item={item}
                    ></BrandCard>)
            }
            </div>
        </section>
    );
};

export default Collection;