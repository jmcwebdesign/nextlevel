import { Hero, Services, Blog } from '../containers';
import { Navbar, Review, Contact, Footer } from '../components';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Services />
            <Blog />
            <Review />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home