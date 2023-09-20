import { Products } from '../containers';
import { Navbar, Review, Contact, Footer } from '../components';

const ServicesPage = () => {
    return (
        <div>
            <Navbar />
            <Products />
            <Review />
            <Contact />
            <Footer />
        </div>
    );
};

export default ServicesPage