import camera from '../../../assets/images/camera.jpg';
import headPhon from '../../../assets/images/p-headphone.jpg';
import phone from '../../../assets/images/phone.jpg';
import watch from '../../../assets/images/watch.jpg';

const CategorySlide = () => {
    return (
        <section className='mb-6'>
        <div className="carousel w-full h-[400px] rounded-b-xl">
        <div id="slide1" className="carousel-item  relative w-full ">
          <img src={camera} className="w-full" />
          <div className="absolute flex items-center h-full  left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
           <div className='text-white space-y-7 pl-6'>
             <h2 className='text-4xl font-bold'>Discover top <br /> <span className='text-secondary'>Brand suppliers</span> <br />of original Products</h2>
             <p className='font-bold'>Spocket allows you to choose the best products to sell from thousands of dropshipping suppliers all over the world.</p>
           </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={headPhon} className="w-full " />
          <div className="absolute flex items-center h-full   left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className='text-white space-y-7 pl-6'>
          <h2 className='text-4xl font-bold'>Discover top <br /> <span className='text-secondary'>Brand suppliers</span> <br />of original Products</h2>
          <p className='font-bold'>Spocket allows you to choose the best products to sell from thousands of dropshipping suppliers all over the world.</p>
            
          </div>
         </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={phone}  className="w-full " />
          <div className="absolute flex items-center h-full   left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className='text-white space-y-7 pl-6'>
          <h2 className='text-4xl font-bold'>Discover top <br /> <span className='text-secondary'>Brand suppliers</span> <br />of original Products</h2>
          <p className='font-bold'>Spocket allows you to choose the best products to sell from thousands of dropshipping suppliers all over the world.</p>
            
          </div>
         </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={watch} className="w-full" />
          <div className="absolute flex items-center h-full   left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className='text-white space-y-7 pl-6'>
          <h2 className='text-4xl font-bold'>Discover top <br /> <span className='text-secondary'>Brand suppliers</span> <br />of original Products</h2>
          <p className='font-bold'>Spocket allows you to choose the best products to sell from thousands of dropshipping suppliers all over the world.</p>
          </div>
         </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
       </div>
        </section>
    );
};

export default CategorySlide;