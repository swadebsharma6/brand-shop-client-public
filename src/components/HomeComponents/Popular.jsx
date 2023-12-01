import camara from '../../assets/images/camera.jpg';
import pdrone from '../../assets/images/p-drone.jpg';
import headphone from '../../assets/images/p-headphone.jpg';
import ptab from '../../assets/images/p-tab.jpg';
import watch from '../../assets/images/smart-watch.jpg';

const Popular = () => {
    return (
        <section className="max-w-6xl mx-auto my-16">
        
        <div className="my-6">
        <h2 className="text-5xl font-bold text-primary text-center mb-3">Most Popular <span className="text-secondary">Product</span></h2>
        <p className="text-center font-bold">Choose Your Favorite One</p>
        </div>


       <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
         
         <div>
             <div className="p-6  border rounded-xl shadow-xl mb-8">
             <img className='w-full'  src={pdrone} alt="" />
             <h4 className="text-2xl font-bold my-3">Camera</h4>
             
             </div>
             <div className="p-6 border rounded-xl shadow-xl">
                <img className='w-full' src={ptab} alt="" />
                <h4 className="text-2xl font-bold my-3">Tablet</h4>
               
             </div>
         </div>
         <div>
           <img className='w-full rounded-lg' src={watch} alt="" />
         </div>
         <div>
         <div className="p-10 border rounded-xl shadow-xl mb-8">
         <img className='w-full' src={camara} alt="" />
         <h4 className="text-2xl font-bold my-3">Drone</h4>
         
      </div>
      <div className="p-10 border rounded-xl shadow-xl">
         <img className='w-full' src={headphone} alt="" />
         <h4 className="text-2xl font-bold my-3">HeadPhone</h4>
        
      </div>
         </div>
       </div> 
     </section>
    );
};

export default Popular;