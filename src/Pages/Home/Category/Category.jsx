import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../../../components/Header/Footer/Footer";
import CategorySlide from "./CategorySlide";
import ProductCard from "./ProductCard";

const Category = () => {
  // loaded products
  const {brand} = useParams();

  const loadedProducts = useLoaderData();
 

  const allProducts = loadedProducts.filter(product => product.brand === brand);
  console.log(brand, allProducts);

  return (
    <section>
    <CategorySlide></CategorySlide>
    <div className="max-w-6xl mx-auto">
    <div className="my-6">
    <h2 className="text-5xl font-bold text-primary text-center mb-3">Our Awesome <span className="text-secondary">Collection</span></h2>
    <p className="text-center font-bold">Choose Your Favorite One</p>
    </div>
      <div className="grid md:grid-cols-2  gap-4">
        {
          allProducts.map((product) => (
          <ProductCard
           key={product._id}
            product={product}
            ></ProductCard>
        ))
      }
      </div>
    </div>
    <Footer></Footer>
    </section>
  );
};

export default Category;
