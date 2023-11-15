import PropTypes from 'prop-types';
import Swal from "sweetalert2";


const MyProduct = ({product, remainProducts, setRemaining}) => {
    const {_id,name, brand, type, price,photo,} = product;

    const handleDelete = id =>{
        console.log('delete ', id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) { 
            fetch(`http://localhost:5000/carts/${id}`,{
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                if(data.deletedCount > 0){
                   alert('Delete data');

                   const remaining = remainProducts.filter(item =>item._id !== id);
                   setRemaining(remaining)
                     }
                
            })

            }
          })
    }

    return (
        <div className="h-[400px] m-8">
        <div className="card bg-base-100 shadow-xl">
   <figure><img className="w-[500px] h-[250px] rounded-2xl" src={photo && photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {brand}
      <div className="badge badge-secondary">{name}</div>
    </h2>
    <p>{type}</p>
    <p>{price}</p>
    <div className="card-actions justify-end">
    <button onClick={() =>handleDelete(_id)} className="btn btn-warning">Delete</button>
    </div>
  </div>
        </div>
        </div>
    );
};

export default MyProduct;

MyProduct.propTypes = {
    product: PropTypes.object,
    
  }