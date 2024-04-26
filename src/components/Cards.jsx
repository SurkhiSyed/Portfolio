import React from 'react'
import metEmployedImg from '../Assets/maxresdefault.webp'
import Printer from '../Assets/3D-Printer.webp'
import unity from '../Assets/unityexploreworld.png'
import worldtreeSweeper from '../Assets/Screenshot_2024-04-04_190807.webp'
import { Link } from 'react-router-dom'
import './Cards.css';

const Cards = () => {
  return (
    <div className='w-full py-[5rem] px-4 bg-black'>
        <div className='max-w-[800px] mx-auto grid gap-8'>
            <Link to='https://devpost.com/software/soluhacks' target='_blank' rel='noopener noreferrer'>
            <div className='card-container'>
                <div className='overlay'>
                <div className='text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                    <h2 className='text-xl font-bold'>MetEmployed - EduSands Hacks Winner</h2>
                    <p className='text-l'>
                    Tackling social equity by providing the less fortunate with the same opportunities. This project was geared towards addressing a real-world societal problem. I worked on the front-end as well as some back-end.
                    </p>
                </div>
                </div>
                <img className='w-90 mx-auto bg-white' src={metEmployedImg} alt='/' />
            </div>
            </Link>
            <Link to='https://drive.google.com/drive/folders/1s56gmrxlXBasoJM-iDi_LU_zjG3toEDf?usp=sharing' target='_blank' rel='noopener noreferrer'>
            <div className='card-container'>
                <div className='overlay'>
                <div className='text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                    <h2 className='text-xl font-bold'>BioSafe3D</h2>
                    <p className='text-l'>
                    The goal was to increase the efficiency of 3D printers while simultaneously making them more affordable, eco-friendly, user-friendly, and efficient. One of our groups aims is to improve the printing process.
                    </p>
                </div>
                </div>
                <img className='w-90 mx-auto bg-white' src={Printer} alt='/' />
            </div>
            </Link>
            <Link to='https://github.com/SurkhiSyed/Final-ExploreWorld' target='_blank' rel='noopener noreferrer'>
            <div className='card-container'>
                <div className='overlay'>
                <div className='text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                    <h2 className='text-xl font-bold'>ExploreWorld-Unity</h2>
                    <p className='text-l'>
                    This project is a world exploration game that includes real world physics to control objects such as vehicles in a fun and interesting way. Developments are ongoing.
                    </p>
                </div>
                </div>
                <img className='w-90 mx-auto bg-white' src={unity} alt='/' />
            </div>
            </Link>
            <Link to='https://github.com/SurkhiSyed/WorldTreeSweeper-Unity?tab=readme-ov-file' target='_blank' rel='noopener noreferrer'>
            <div className='card-container'>
                <div className='overlay'>
                <div className='text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                    <h2 className='text-xl font-bold'>WorldTreeSweeper-Unity</h2>
                    <p className='text-l'>
                    This game was created using the Unity Game Engine with a solo-type RPG in mind, with the task of controlling the avatar through challenging terrain and difficult enemies. Real world physics that learned in Grade 11 and 12 was taken into consideration and different principles were applied when programming the character to move at the player's command.
                    </p>
                </div>
                </div>
                <img className='w-90 mx-auto bg-white' src={worldtreeSweeper} alt='/' />
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Cards