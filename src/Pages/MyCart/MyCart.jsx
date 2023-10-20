import { useLoaderData } from "react-router-dom";
import MyProduct from "./MyProduct";


const MyCart = () => {
    const loadedProducts = useLoaderData();
  

    return (
        <section>
        
        <div>
        <div className="grid md:grid-cols-2  gap-4">
                {
                  loadedProducts.map(product => <MyProduct
                    key={product._id}
                    product={product}
                    ></MyProduct>)  
                }
             </div>
        
        </div>
        </section>
    );
};

export default MyCart;