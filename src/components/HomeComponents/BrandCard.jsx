import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BrandCard = ({item,}) => {

    const {brand, brand_image} = item;

    return (
        <section>
        <div className="card   bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={brand_image} alt="Shoes" className="md:w-[300px] rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{brand}</h2>
          <div className="card-actions">
            <Link to={`/category/${brand}`}><button className="btn btn-outline border-0 border-b-4 btn-primary">Explore More</button></Link>
          </div>
        </div>
      </div>
        </section>
    );
};

export default BrandCard;



BrandCard.propTypes = {
    item: PropTypes.object,
   
    
}