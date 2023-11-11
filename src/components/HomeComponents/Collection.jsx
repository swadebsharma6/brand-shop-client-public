import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";


const Collection = () => {

    const [brands, setBrands] = useState([]);


    useEffect(()=>{
        fetch('/public/brands.json')
        .then(res => res.json())
        .then(data => setBrands(data))
    }, []);

    console.log(brands)


    return (
        <section className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary text-center underline">Our Collection</h2>

            <div className="grid md:grid-cols-3 gap-6">
            {
                brands.map(item => <BrandCard
                    key={item.id}
                    item={item}
                    ></BrandCard>)
            }
            </div>
        </section>
    );
};

export default Collection;