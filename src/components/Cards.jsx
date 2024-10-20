import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import metEmployedImg from '../Assets/maxresdefault.webp';
import Printer from '../Assets/3D-Printer.webp';
import unity from '../Assets/unityexploreworld.png';
import worldtreeSweeper from '../Assets/Screenshot_2024-04-04_190807.webp';
import dinoNFT from '../Assets/dinonft.png';
import { Link } from 'react-router-dom';
import './Cards.css';
import inclusee from '../Assets/original.jpeg'
import vireel from '../Assets/Vireel.png'
import Slider from 'react-slick';
import landTempAnalyze from '../Assets/30-april-BLOG.jpg'

const Cards = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    }

    const cards = [
        { img: metEmployedImg, title: 'MetEmployed - EduSands Hacks Winner', desc: 'Tackling social equity by providing the less fortunate with the same opportunities. This project was geared towards addressing a real-world societal problem. I worked on the front-end as well as some back-end.', link: 'https://devpost.com/software/soluhacks' },
        { img: Printer, title: 'BioSafe3D', desc: 'The goal was to increase the efficiency of 3D printers while simultaneously making them more affordable, eco-friendly, user-friendly, and efficient. One of our groups aims is to improve the printing process.', link: 'https://drive.google.com/drive/folders/1s56gmrxlXBasoJM-iDi_LU_zjG3toEDf?usp=sharing' },
        { img: unity, title: 'ExploreWorld-Unity', desc: 'This project is a world exploration game that includes real world physics to control objects such as vehicles in a fun and interesting way. Developments are ongoing.', link: 'https://github.com/SurkhiSyed/Final-ExploreWorld' },
        { img: worldtreeSweeper, title: 'WorldTreeSweeper-Unity', desc: 'This game was created using the Unity Game Engine with a solo-type RPG in mind, with the task of controlling the avatar through challenging terrain and difficult enemies. Real world physics that learned in Grade 11 and 12 was taken into consideration and different principles were applied.', link: 'https://github.com/SurkhiSyed/WorldTreeSweeper-Unity?tab=readme-ov-file' },
        { img: dinoNFT, title: 'DinoNFT - HawkHacks 3rd Place Winner', desc: 'DinoNFT is a simple web3 dino running game, similar to that of the google offline game. It incorporates a reward system for the player based on their score by allowing them to connect their blockchain wallet to the game, and transfer tokens from the owner\'s wallet to theirs.', link: 'https://github.com/SurkhiSyed/Hack' },
        { img: inclusee, title: 'Inclusee', desc: 'Inclusee is an accessibility addon for Adobe Express that helps designers ensure their creations are accessible to individuals with low vision, dyslexia, and other visual impairments. Incorporating real-time feedback and suggestions by analyzing colors, fonts, and layouts used in design.', link: 'https://devpost.com/software/inclusee' },
        { img: vireel, title: 'Vireel - Startup', desc: 'Vireel is currently a news app that aggregates content from multiple APIs to deliver news in a concise and user-friendly format, allowing users to receive quick summaries tailored to their interests, save their favorite stories, share comments, and engage in discussions instead of sifting through long articles as it expands into a startup.', link: 'https://github.com/SurkhiSyed/Vireel' },
        { img: landTempAnalyze, title: 'Average Land Temperatures Analyzer', desc: 'Developed a C program that studies different average land temperatures over 3 centuries using CSV files and outputs different averages. Used GNU Plots to create different plots in respect to the outputted data to evaluate trends and report conclusions', link: 'https://github.com/SurkhiSyed/LandAverageTemperatures' },
    ];

  return (
    <div className='w-full py-[5rem] px-4'>
        <div className='max-w-[900px] mx-auto gap-8'>
        <Slider {...settings}>
            {cards.map((d) => (
                <div className='card-container'>
                    <Link to={d.link} target='_blank' rel='noopener noreferrer'>
                    <div className='overlay'>
                        <div className='text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                            <h2 className='text-xl font-bold'>{d.title}</h2>
                            <p className='text-l'>
                                {d.desc}
                            </p>
                        </div>
                    </div>
                    <img className='w-90 mx-auto bg-white' src={d.img} alt='/' />
                    </Link>
                </div>
            ))}
        </Slider>
        </div>
    </div>
  )
}

export default Cards;