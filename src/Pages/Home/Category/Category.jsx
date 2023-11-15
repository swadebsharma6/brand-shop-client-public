import { useLoaderData, useParams } from "react-router-dom";
import CategorySlide from "./CategorySlide";
import ProductCard from "./ProductCard";

const Category = () => {
  // loaded products
  const {brand} = useParams();

  const loadedProducts = useLoaderData();
  console.log(brand,loadedProducts)

  const allProducts = loadedProducts.filter(product => product.brand === brand);
  console.log(allProducts);

  return (
    <section className="max-w-6xl mx-auto">
      <CategorySlide></CategorySlide>
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
    </section>
  );
};

export default Category;
