import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Banner from "./Banner";

const UpdateProduct = () => {

  const product = useLoaderData();
  // console.log(product)

    const handleUpdateProduct = event =>{
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const type = form.type.value;
        const photo = form.photo.value;
        const rating = form.rating.value; 
        const updateProduct = {name, brand, price, type,photo,rating}
        console.log(updateProduct);
        // update a product
        fetch(`http://localhost:5000/products/${product._id}`, {
          method: "PUT",
          headers:{
            'content-type': 'application/json'
          },
          body:JSON.stringify(updateProduct)
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data)
          if(data.modifiedCount > 0){
            Swal.fire({
              title: "Success!",
              text: "Product Updated Successfully.",
              icon: "success"
            });
            form.reset();
          }
        })
    }


    return (
        <section>
            <Banner>
            <p>{product.name}</p>
            </Banner>
            <div className="h-[750px] max-w-5xl mx-auto">
      
            <div>
            <div className="text-center p-8">
            <form onSubmit={handleUpdateProduct}>
             {/*form name and brand row*/}
               <div className="md:flex mb-7">
                <div className="form-control md:w-1/2">
                 <label className="label">
                 <span className="label-text text-xl font-bold">Product Name</span>
                 </label>
                 <label className="input-group">
                 <input type="text" name="name" defaultValue={product?.name} placeholder="Name" id="" className="input input-bordered w-full" />
                 </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-3">
                 <label className="label">
                 <span className="label-text text-xl font-bold">Product brand</span>
                 </label>
                 <label className="input-group">
                 <input type="text" name="brand" defaultValue={product?.brand} placeholder="brand" id="" className="input input-bordered w-full" />
                 </label>
                </div>
               
               </div>
             {/*form price and type row*/}
               <div className="md:flex mb-7">
                <div className="form-control md:w-1/2">
                 <label className="label">
                 <span className="label-text text-xl font-bold">Price</span>
                 </label>
                 <label className="input-group">
                 <input type="text" name="price"  defaultValue={product.price} placeholder="price" id="" className="input input-bordered w-full" />
                 </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-3">
                 <label className="label">
                 <span className="label-text text-xl font-bold">Type</span>
                 </label>
                 <label className="input-group">
                 <input type="text" name="type" placeholder="type" defaultValue={product?.type} id="" className="input input-bordered w-full" />
                 </label>
                </div>
               
               </div>
             {/*form image and rating row*/}
               <div className="md:flex mb-7">
                <div className="form-control md:w-1/2">
                 <label className="label">
                 <span className="label-text text-xl font-bold">Image</span>
                 </label>
                 <label className="input-group">
                 <input type="text" name="photo" defaultValue={product?.photo} placeholder="Photo" id="" className="input input-bordered w-full" />
                 </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-3">
                 <label className="label">
                 <span className="label-text text-xl font-bold">Rating</span>
                 </label>
                 <label className="input-group">
                 <input type="text" name="rating" placeholder="rating" defaultValue={product?.rating} id="" className="input input-bordered w-full" />
                 </label>
                </div>
               
               </div>
               
               <button type="submit" className="btn btn-secondary  btn-block">Update Product</button>
   
            </form>
            </div>
            </div>
          </div>
        </section>
    );
};

export default UpdateProduct;