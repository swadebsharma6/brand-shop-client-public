import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {

  const {_id,name, brand, type, price,photo,rating} = product;
  console.log(product)

    
    return (
        <div className="m-8">
        <div className="card bg-base-100 shadow-xl">
   <figure>
   <img className="w-full h-[250px]" src={photo} alt="Brand" />
   </figure>
  <div className="card-body">
    <h2 className="card-title">{name} 
    <div className="badge badge-secondary">{brand}</div>
    </h2>
    <p className='font-bold text-xl '><span className='font-bold'>Category:</span> {type}</p>
    <p className='text-lg font-bold'> Price:  ${price}</p>
    <p className='text-lg font-bold'> Rating: {rating}</p>
    <div className="card-actions justify-end">
      <Link to={`/details/${_id}`}><button className="btn btn-primary">Details</button></Link> 
      <button className="btn btn-secondary">Updates</button>
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