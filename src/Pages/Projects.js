import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Analytics from '../components/Analytic';
import Newsletter from '../components/Newsletter';
import ProjectPanels from '../components/ProjectPanels';
import Footer from '../components/Footer';
import {Helmet} from "react-helmet";

function HomePage() {
    return (
        <div>
            <Helmet>
                <title>Projects | Syed Kaab Surkhi</title>
            </Helmet>
            <Navbar/>
            <ProjectPanels/>
            <Footer/>
        </div>
    );
}

export default HomePage;

