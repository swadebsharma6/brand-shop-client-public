import Banner from "./Banner";

const UpdateProduct = () => {

    const handleUpdateProduct = event =>{
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const photo = form.photo.value;
        const rating = form.rating.value;
      
    
        const updateProduct = {name, brand,photo,rating}
        console.log(updateProduct)
    }


    return (
        <section>
            <Banner></Banner>
            <div className="h-[750px] md:w-[800px] mx-auto">
      
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
                 <span className="label-text text-xl font-bold">Image</span>
                 </label>
                 <label className="input-group">
                 <input type="text" name="photo" placeholder="Photo" id="" className="input input-bordered w-full" />
                 </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-3">
                 <label className="label">
                 <span className="label-text text-xl font-bold">Rating</span>
                 </label>
                 <label className="input-group">
                 <input type="text" name="rating" placeholder="rating" id="" className="input input-bordered w-full" />
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