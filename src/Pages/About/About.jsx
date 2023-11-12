import Footer from "../../components/Header/Footer/Footer";
import AboutUs from "./AboutComponents/AboutUs";
import Banner from "./AboutComponents/Banner";
import CustomerReview from "./AboutComponents/CustomerReview";


const About = () => {

    

    return (
        <div>
            <Banner></Banner>
            <div className="max-w-6xl mx-auto">
            <AboutUs></AboutUs>
            <CustomerReview></CustomerReview>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;