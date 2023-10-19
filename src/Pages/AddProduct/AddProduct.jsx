

const AddProduct = () => {

    const handleAddProduct = event =>{
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const rating = form.rating.value;
      
    
        const newCoffee = {name, brand, price,description,photo,rating}
        console.log(newCoffee)
        // send data to the server
        // fetch('https://coffee-store-server-side-mtq7sbjdm-swadebsharma6.vercel.app/coffee',{
        // method: 'POST',
        // headers:{
        //   'content-brand': 'application/json'
        // },
        // body:JSON.stringify(newCoffee)
        // })
        // .then(res =>res.json())
        // .then(data =>{
        //   console.log(data) 
        //   if(data.insertedId){
        //     alert('product added successfully')
        //   }
        // })
      }





    return (
        <section className="my-10">
          <h2 className="text-center text-3xl font-bold text-purple-600 underline my-7 pb-5">Add Products</h2> 
          <div className="text-center">
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
               <span className="label-text text-xl font-bold">PhotoLink</span>
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
               <input type="text" name="rating" placeholder="Rating" id="" className="input input-bordered w-full" />
               </label>
              </div>
             
             </div>
           {/*form photoUrl row*/}
             

             <button type="submit" className="btn btn-primary  btn-block">Add Coffee</button>

          </form>
          </div>
        </section>
    );
};

export default AddProduct;