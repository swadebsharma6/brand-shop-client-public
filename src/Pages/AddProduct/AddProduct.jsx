import Swal from "sweetalert2";
import Footer from "../../components/Header/Footer/Footer";
import Banner from "./Banner";


const AddProduct = () => {

    const handleAddProduct = event =>{
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const type = form.type.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const rating = form.rating.value;
      
    
        const newProduct = {name, brand, type, price,description,photo,rating}
        console.log(newProduct)
        // send data to server
        fetch('https://brand-shop-server-site.vercel.app/products', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data);
          if(data.insertedId){
            Swal.fire({
              title: "Success!",
              text: "Product Added Successfully.",
              icon: "success"
            });
            form.reset();
          }
        })
      }





    return (
        <section className="">
        <Banner></Banner>
         <div className="h-[750px] md:w-[900px] mx-auto ">
      
           <div>
           <div className="text-center p-8">
           <form onSubmit={handleAddProduct}>
            {/*form name and brand row*/}
              <div className="md:flex mb-7">
               <div className="form-control md:w-1/2">
                <label className="label">
                <span className="label-text text-xl font-bold">Product Name</span>
                </label>
                <label className="input-group">
                <input type="text" name="name" placeholder="Name" id="" className="input input-bordered w-full" />
                </label>
               </div>
               <div className="form-control md:w-1/2 md:ml-3">
                <label className="label">
                <span className="label-text text-xl font-bold">Product brand</span>
                </label>
                <label className="input-group">
                <input type="text" name="brand" placeholder="brand" id="" className="input input-bordered w-full" />
                </label>
               </div>
              
              </div>
            {/*form price and description row*/}
              <div className="md:flex mb-7">
               <div className="form-control md:w-1/2">
                <label className="label">
                <span className="label-text text-xl font-bold">Price</span>
                </label>
                <label className="input-group">
                <input type="text" name="price" placeholder="price" id="" className="input input-bordered w-full" />
                </label>
               </div>
               <div className="form-control md:w-1/2 md:ml-3">
                <label className="label">
                <span className="label-text text-xl font-bold">Description</span>
                </label>
                <label className="input-group">
                <input type="text" name="description" placeholder="description" id="" className="input input-bordered w-full" />
                </label>
               </div>
              
              </div>
            {/*form category and details row*/}
              <div className="md:flex mb-7">
               <div className="form-control md:w-1/2">
                <label className="label">
                <span className="label-text text-xl font-bold">Type</span>
                </label>
                <label className="input-group">
                <input type="text" name="type" placeholder="type" id="" className="input input-bordered w-full" />
                </label>
               </div>
               <div className="form-control md:w-1/2 md:ml-3">
                <label className="label">
                <span className="label-text text-xl font-bold">Rating</span>
                </label>
                <label className="input-group">
                <input type="text" name="rating" placeholder="Rating" id="" className="input input-bordered w-full" />
                </label>
               </div>
              
              </div>
            {/*form photoUrl row*/}
              <div className="md:flex mb-7">
              <div className="form-control md:w-full">
              <label className="label">
              <span className="label-text text-xl font-bold">PhotoLink</span>
              </label>
              <label className="input-group">
              <input type="text" name="photo" placeholder="Photo" id="" className="input input-bordered w-full" />
              </label>
             </div>
              </div>
  
              <button type="submit" className="btn btn-primary  btn-block">Add Product</button>
  
           </form>
           </div>
           </div>
         </div>
         <Footer></Footer>
        </section>
    );
};

export default AddProduct;