import { About } from '../containers';
import { Navbar, Review, Contact, Footer } from '../components';

const AboutPage = () => {
    return (
        <div>
            <Navbar />
            <About />
            <Review />
            <Contact />
            <Footer />
        </div>
    );
};

export default AboutPage