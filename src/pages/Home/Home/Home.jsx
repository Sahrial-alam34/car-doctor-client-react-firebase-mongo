import About from "../About/About";
import Banner from "../Banner/Banner";
import ContactInfo from "../ContactInfo/ContactInfo";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <ContactInfo></ContactInfo>
           
        </div>
    );
};

export default Home;