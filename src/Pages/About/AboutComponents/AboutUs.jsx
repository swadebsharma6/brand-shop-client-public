import drone from '../../../assets/images/p-drone.jpg';


const AboutUs = () => {
    return (
        <section>
        <div className="md:h-[550px] md:my-12 p-4">
          <div className='md:flex items-center justify-center sm:py-3'>
          <div className='flex-1'>
            <div>
            <img className='w-full rounded' src={drone}alt="" />
            </div>
          
          </div>

          <div className='flex-1 ml-6 text-start'>
          <h3 className='text-orange-500 text-xl mb-4 font-bold underline'>Story About Us</h3>
          <h3 className='text-4xl mb-4 font-bold'>Professional Support<span className='text-secondary'></span></h3>
          <p className='font-bold mb-3'>This striking collection is an inspiring take on the shape of the initial letter adding a touch of modern luxury </p>
          <p className='text-sm font-bold  border-r-4 border-black'>This striking collection is an inspiring take on the shape of the initial letter adding a touch of modern luxuryC</p>
          <div className='mt-4'>
              <p className='font-bold'>We are rethoric question ran over her cheek When she reached the first hills of the Italic Mountains, she</p>
          </div>
      </div>

          </div>
       </div>
      </section>
    );
};

export default AboutUs;