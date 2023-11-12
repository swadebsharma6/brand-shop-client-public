

import { useLoaderData } from "react-router-dom";
import CategorySlide from "./CategorySlide";
import ProductCard from "./ProductCard";


const Category = () => {

    // const[brands, setBrands] = useState([]);
    // useEffect(()=>{
    //     fetch('http://localhost:5000/brands')
    //     .then(res =>res.json())
    //     .then(data => setBrands(data))
    // }, []);

    const loadedProducts = useLoaderData();
    


   


    return (
        <section className="max-w-6xl mx-auto">
            <CategorySlide></CategorySlide>
             <div className="grid md:grid-cols-2  gap-4">
               {    

                loadedProducts.map(product => <ProductCard
                      key={product._id}
                      product={product}
                      ></ProductCard>)  
             }
             </div>
            
        </section>
    );
};

export default Category;