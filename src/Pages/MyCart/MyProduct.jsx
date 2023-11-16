// import PropTypes from "prop-types";
// import Swal from "sweetalert2";

// const MyProduct = ({ product, remainProducts, setRemaining} ) => {

//   const {_id, name, brand,  price, photo } = product;

//   const handleDelete = (id) => {
//     console.log("delete ", id);
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`http://localhost:5000/carts/${id}`, {
//           method: "DELETE",
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             console.log(data);
//             if (data.deletedCount > 0) {
//               Swal.fire({
//                 title: "Success!",
//                 text: "Product Deleted Successfully.",
//                 icon: "success",
//               });

//               // const remaining = remainProducts.filter((item) => item._id !== id );
//               // setRemaining(remaining);
//             }
//           });
//       }
//     });
//   };

//   return (
//     <section>
//     <div className="card lg:card-side bg-base-100 shadow-xl my-3 px-5">
//     <figure><img className="w-32 h-32 rounded-xl" src={`${photo}`} alt="Album"/></figure>
//     <div className="card-body">
//       <h2 className="card-title">Name:{name}</h2>
//       <p>Brand: {brand}</p>
//       <p>Price: ${price}</p>
//       <div className="card-actions justify-end items-center">
//         <button onClick={()=>handleDelete(_id)} className="btn  btn-secondary">Delete</button>
//       </div>
//     </div>
//   </div>
//     </section>
//   );
// };

// export default MyProduct;

// MyProduct.propTypes = {
//   product: PropTypes.object,
// };

