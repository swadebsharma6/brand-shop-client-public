
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const ProductDetails = () => {

    const product = useLoaderData();
    const {brand, name, type, price,photo, description, rating } = product;
    

    const handleAddToCart =() =>{

        const  product = {
            brand: brand,
            name: name, 
            type: type,
            price: price,
            photo: photo,
            rating: rating,
        };
        
        fetch(`https://brand-shop-server-site.vercel.app/carts`, {
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire(
                    'Success!',
                    'Product Add to cart Successfully.',
                    'success'
                  ) 
            }
        })
        
    }

    return (
        <section className="mt-20 max-w-7xl mx-auto">
            <h3 className="text-center text-2xl font-bold mb-5 text-purple-500">Product Details</h3>
            <div className="border shadow-xl p-10 rounded-xl">
            <div className="md:flex  card lg:card-side">
            <div className="flex-1">
            <figure>
            <img className="rounded-xl" src={photo} alt="Album"/>
            
            </figure>
            </div>
            <div className="flex-1 card-body w-full mx-auto">
              <h2 className="card-title">Name: {name}
              <div className="badge badge-secondary">{brand}</div>
              </h2>
              <p className='text-lg font-bold'> Price:  ${price}</p>
              <p className='text-lg font-bold'> Rating: {rating}</p>
              <p className='text-lg font-bold'> Category: {type}</p>
              <p className='text-lg font-bold'> About: {description}</p>
              <div className="card-actions justify-end">
                <button onClick={handleAddToCart} className="btn btn-outline border-0 border-b-4 btn-primary">Add To Cart</button>
              </div>
            </div>
          </div>
            </div>
        </section>
    );
};

export default ProductDetails;