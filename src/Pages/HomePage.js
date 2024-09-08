import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Analytics from '../components/Analytic';
import Newsletter from '../components/Newsletter';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import { Helmet } from "react-helmet";
import TimeLineSection from '../components/TimelineSection';
import { AroraHero } from '../components/AroraHero';
import './homepage.css';
import ProjectPanels from '../components/ProjectPanels';

function HomePage() {
    return (
        <div>
            <Helmet>
                <title>Home | Syed Kaab Surkhi</title>
            </Helmet>
            <AroraHero />
            <div className="overlay-content">
                <Navbar />
                <Hero />
                <TimeLineSection />
                <Cards/>
                <ProjectPanels/>
                <Footer />
            </div>
        </div>
    );
}

export default HomePage;