import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BrandCard = ({item}) => {

    const {brand, brand_image} = item;

    return (
        <section>
        <div className="card h-[490px]  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img  src={brand_image} alt="Shoes" className="w-full rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{brand}</h2>
          <div className="card-actions">
            <Link to={`/category/${item.brand}`}><button className="btn btn-primary">Explore More Now</button></Link>
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