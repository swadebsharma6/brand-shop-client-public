
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyProduct from "./MyProduct";


const MyCart = () => {
    
    const loadedProducts = useLoaderData();
    const [remainProducts, setRemaining] = useState(loadedProducts);
    

   
    return (
        <section>
        
        <div>
        <div className="grid md:grid-cols-2  gap-4">
                {
                  remainProducts.map(product => <MyProduct
                    key={product._id}
                    product={product}
                    remainProducts={remainProducts}
                    setRemaining={setRemaining}
                    ></MyProduct>)  
                }
             </div>
        
        </div>
        </section>
    );
};

export default MyCart;