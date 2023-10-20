import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";


const Category = () => {

    
    const products = useLoaderData();
    console.log(products)


    return (
        <div>

             <div className="grid md:grid-cols-2  gap-4">
                {
                  products.map(product => <ProductCard
                    key={product._id}
                    product={product}
                    ></ProductCard>)  
                }
             </div>
            
        </div>
    );
};

export default Category;