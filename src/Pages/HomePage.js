import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Analytics from '../components/Analytic';
import Newsletter from '../components/Newsletter';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import {Helmet} from "react-helmet";

function HomePage() {
    return (
        <div>
          <Helmet>
            <title>Home | Syed Kaab Surkhi</title>
          </Helmet>
          <Navbar/>
          <Hero/>
          <Cards/>
          <Footer/>
        </div>
    );
  }
  
export default HomePage;
  
