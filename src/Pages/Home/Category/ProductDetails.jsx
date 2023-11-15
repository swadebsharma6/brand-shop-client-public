import { useLoaderData } from "react-router-dom";



const ProductDetails = () => {

    const product = useLoaderData();
    console.log(product)

    return (
        <section className="mt-20">
            <h3 className="text-center text-xl font-bold">This is Product Details Routes</h3>
        </section>
    );
};

export default ProductDetails;