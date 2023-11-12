import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({product,}) => {
  console.log(product)

  const {_id,name, brand, type, price,photo,} = product;
    
    return (
        <div className="h-[700px] m-8">
        <div className="card bg-base-100 shadow-xl">
   <figure><img className="w-full h-[500px]" src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {brand}
      <div className="badge badge-secondary">{name}</div>
    </h2>
    <p>{type}</p>
    <p>{price}</p>
    <div className="card-actions justify-end">
      <Link to={`/products/${_id}`}><button className="btn btn-outline">Details</button></Link> 
      <button className="btn btn-outline btn-secondary">Updates</button>
    </div>
  </div>
        </div>
        </div>
    );
};

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.object,
  
  
}