import phone from '../../assets/images/phone.jpg';

const DiscountSection = () => {
    return (
        <section className="pb-5">
        <div className="md:flex m-0 items-center">
        <div className=" flex-1">
        <div className='flex-1'>
        <img className='w-full h-[409px]' src={phone} alt="" />
    </div>
        </div>
        <div className="flex-1 p-6 h-[409px]  bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JhZGllbnQlMjBiYWNrZ3JvdW5kfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60')]">
          <div className='text-white mb-5'>
          <p className="text-xl font-semibold mb-4"> sM Grands Fest </p>
          <h4 className="text-4xl mb-4 font-bold">Loving any Buying Your
          <br /> Favorite One.</h4>
          <br />
          <h3 className='text-4xl font-bold mb-4'>Upto 30% Off</h3>
          
          </div>
          <button className="btn btn-secondary">Explore More</button>
        </div>
        </div>
     </section>
    );
};

export default DiscountSection;