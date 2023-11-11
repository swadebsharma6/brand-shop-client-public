import Footer from "../../components/Header/Footer/Footer";
import Collection from "../../components/HomeComponents/Collection";
import DiscountSection from "../../components/HomeComponents/DiscountSection";
import MarqueLoading from "../../components/HomeComponents/MarqueLoading";
import Popular from "../../components/HomeComponents/Popular";
import FAQ from "./FAQ";
import Optimaized from "./Optimaized";
import Slider from "./Slider";


const Home = () => {
 
    return (
        <div>
           
           <Slider></Slider>
           <DiscountSection></DiscountSection>
           <Optimaized></Optimaized>
           <Collection></Collection>
           <Popular></Popular>
           <DiscountSection></DiscountSection>
            <FAQ></FAQ>
           <MarqueLoading></MarqueLoading>
           <Footer></Footer>
           
          
        </div>
    );
};

export default Home;