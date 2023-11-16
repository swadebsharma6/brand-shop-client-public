import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
  const loadedProducts = useLoaderData();
  const [remainProducts, setRemaining] = useState(loadedProducts);

  const handleDelete = (id) => {
    console.log("delete ", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://brand-shop-server-site-ho8eewa3g-swadebsharma6.vercel.app/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Success!",
                text: "Product Deleted Successfully.",
                icon: "success",
              });

              const remaining = remainProducts.filter((item) => item._id !== id );
              setRemaining(remaining);
            }
          });
      }
    });
  };

  return (
    <section className="max-w-6xl mx-auto">
      <div className="my-3">
        {
          remainProducts.map((product) => <section 
          key={product._id}
          >
          <div className="card lg:card-side bg-base-100 shadow-xl my-3 px-5">
          <figure><img className="w-32 h-32 rounded-xl" src={product.photo} alt="Album"/></figure>
          <div className="card-body">
            <h2 className="card-title">Name:{product.name}</h2>
            <p>Brand: {product.brand}</p>
            <p>Price: ${product.price}</p>
            <div className="card-actions justify-end items-center">
              <button onClick={()=>handleDelete(product._id)} className="btn  btn-secondary">Delete</button>
            </div>
          </div>
        </div>
          </section>)}
      </div>
    </section>
  );
};

export default MyCart;
