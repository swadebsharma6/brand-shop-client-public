import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";


const Collection = () => {

   
    const [brands, setBrands] = useState([]);
    console.log(brands)

    useEffect(()=>{
        fetch('http://localhost:5000/brands')
        .then(res => res.json())
        .then(data => setBrands(data))
    }, []);


    return (
        <section className="max-w-6xl mx-auto my-16">
            <div className="my-6">
            <h2 className="text-5xl font-bold text-primary text-center mb-3">Our Awesome <span className="text-secondary">Collection</span></h2>
            <p className="text-center font-bold">Choose Your Favorite One</p>
            </div>

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