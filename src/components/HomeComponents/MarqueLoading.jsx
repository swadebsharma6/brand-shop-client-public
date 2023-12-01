import Marquee from "react-fast-marquee";




const MarqueLoading = () => {
    return (
        <div className="my-20">
           <Marquee pauseOnHover={true}  speed={100}>
           <div className="p-10 border border-primary-focus rounded-xl mr-10">
           <h3 className="text-2xl uppercase font-bold ">Free Delivery</h3>
          </div>
           <div className="p-10 border border-primary-focus rounded-xl mr-10">
           <h3 className="text-2xl uppercase font-bold ">A Personal touch</h3>
          </div>
           <div className="p-10 border border-secondary-focus rounded-xl mr-10">
           <h3 className="text-2xl uppercase font-bold ">You WiLL Love It</h3>
          </div>
           <div className="p-10 border border-primary-focus rounded-xl mr-10">
           <h3 className="text-2xl uppercase font-bold ">The Latest trends</h3>
          </div>
           <div className="p-10 border border-secondary-focus rounded-xl mr-10">
           <h3 className="text-2xl uppercase font-bold ">Quality You can trust</h3>
          </div>
           <div className="p-10 border border-primary-focus rounded-xl mr-10">
           <h3 className="text-2xl uppercase font-bold ">JEWELRYIZE ME</h3>
          </div>
           <div className="p-10 border border-secondary-focus rounded-xl mr-10">
           <h3 className="text-2xl uppercase font-bold ">Good quality and Services</h3>
          </div>
           
           </Marquee> 
        </div>
    );
};

export default MarqueLoading;