import Footer from "../../components/Header/Footer/Footer";
import Collection from "../../components/HomeComponents/Collection";
import DiscountSection from "../../components/HomeComponents/DiscountSection";
import MarqueLoading from "../../components/HomeComponents/MarqueLoading";
import Popular from "../../components/HomeComponents/Popular";
import Product from "./Product/Product";
import Slider from "./Slider";


const Home = () => {
 
    return (
        <div>
           <Slider></Slider>
           <DiscountSection></DiscountSection>
           <MarqueLoading></MarqueLoading>
           <Collection></Collection>
           <Popular></Popular>
           <DiscountSection></DiscountSection>
           <Product></Product>
           <Footer></Footer>
           
          
        </div>
    );
};

export default Home;