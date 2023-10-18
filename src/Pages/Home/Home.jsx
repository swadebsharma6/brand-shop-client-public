import DiscountSection from "../../components/HomeComponents/DiscountSection";
import MarqueLoading from "../../components/HomeComponents/MarqueLoading";
import Slider from "./Slider";


const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <MarqueLoading></MarqueLoading>
           <DiscountSection></DiscountSection>
          
        </div>
    );
};

export default Home;