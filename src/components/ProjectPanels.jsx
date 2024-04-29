import React from 'react'
import { Link } from 'react-router-dom'
import metEmployedImg from '../Assets/maxresdefault.webp'
import Printer from '../Assets/3D-Printer.webp'
import unity from '../Assets/unityexploreworld.png'
import worldtreeSweeper from '../Assets/Screenshot_2024-04-04_190807.webp'

const Projects = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-black'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-[#386e4f80]'>
                <img className='w-80 mx-auto  bg-white rounded-lg' src={metEmployedImg} alt='/'/>
                <p className='text-center text-1xl font-bold text-white my-6'>MetEmployed - EduSands Hacks Winner</p>
                <div className='text-center font-medium'>
                    <p className='py-1 text-white mx-8 mt-2'>Tackling social equity by providing the less fortunate with the same opportunities. This project was geared towards addressing a real-world societal problem. I worked on the front-end as well as some back-end.
                    </p>
                </div>
                <p></p>
                <button className='bg-[#ffffff] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3'>
                <Link to='https://devpost.com/software/soluhacks' target='_blank' rel='noopener noreferrer'>Click Here</Link>
                </button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-[#386e4f80]'>
                <img className='w-80 mx-auto  bg-white rounded-lg' src={Printer} alt='/'/>
                <p className='text-center text-1xl font-bold text-white my-6'>BioSafe3D</p>
                <div className='text-center font-medium'>
                    <p className='py-1 text-white mx-8 mt-2'>The goal was to increase the efficiency of 3D printers while simultaneously making them more affordable, eco-friendly, user-friendly, and efficient. One of our groups aims is to improve the printing process.
                    </p>
                </div>
                <p></p>
                <button className='bg-[#ffffff] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3'>
                <Link to='https://drive.google.com/drive/folders/1s56gmrxlXBasoJM-iDi_LU_zjG3toEDf?usp=sharing' target='_blank' rel='noopener noreferrer'>Click Here</Link>
                </button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-[#386e4f80]'>
                <img className='w-80 mx-auto  bg-white rounded-lg' src={unity} alt='/'/>
                <p className='text-center text-1xl font-bold text-white my-6'>ExploreWorld-Unity</p>
                <div className='text-center font-medium'>
                    <p className='py-1 text-white mx-8 mt-2'>This project is a world exploration game that includes real world physics to control objects such as vehicles in a fun and interesting way. Developments are ongoing.
                    </p>
                </div>
                <p></p>
                <button className='bg-[#ffffff] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3'>
                <Link to='https://github.com/SurkhiSyed/Final-ExploreWorld' target='_blank' rel='noopener noreferrer'>Click Here</Link>
                </button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-[#386e4f80]'>
                <img className='w-80 mx-auto  bg-white rounded-lg' src={worldtreeSweeper} alt='/'/>
                <p className='text-center text-1xl font-bold text-white my-6'>WorldTreeSweeper-Unity</p>
                <div className='text-center font-medium'>
                    <p className='py-1 text-white mx-8 mt-2'>This game was created using the Unity Game Engine with a solo-type RPG in mind, with the task of controlling the avatar through challenging terrain and difficult enemies. Real world physics that learned in Grade 11 and 12 was taken into consideration and different principles were applied.
                    </p>
                </div>
                <p></p>
                <button className='bg-[#ffffff] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3'>
                <Link to='https://github.com/SurkhiSyed/WorldTreeSweeper-Unity?tab=readme-ov-file' target='_blank' rel='noopener noreferrer'>Click Here</Link>
                </button>
            </div>
            
        </div>
    </div>
  )
}

export default Projects