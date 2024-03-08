import React from 'react'
import { ReactTyped } from "react-typed";
import {
    FaGithubSquare,
    FaInstagram,
    FaLinkedin,
    FaEnvelopeSquare
} from 'react-icons/fa';
import { Link } from 'react-router-dom'
import videoBg from '../Assets/backVid.mp4'
import './Hero.css';


const Hero = () => {
  return (
    <div className='text-white'>
        <video className='video-bg' src={videoBg} autoPlay loop muted />
        <div className='max-w-[800] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                Syed Ka Ab Surkhi
            </h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                    I'm a 
                </p>
                <ReactTyped 
                className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#00d59a]'
                    strings={['Computer Engineer', 'Machine Learning Enthusiast', 'Web Developer', 'Project Leader']} 
                    typeSpeed={120} 
                    backSpeed={140} 
                    loop
                />
            </div>
            <p className='md:text-2xl text-xl font-bold'>A passionate programmer studying engineering who enjoys taking part in challenging competitions with other people.</p>
            <div>
                <div className='flex justify-center py-3 my-4'>
                    <button>
                        <Link to='https://www.instagram.com/5y3d_ss/' target='_blank' rel='noopener noreferrer'><FaInstagram size={60}/></Link>
                    </button>
                    <button>
                        <Link to='https://github.com/SurkhiSyed' target='_blank' rel='noopener noreferrer'><FaGithubSquare size={60} /></Link>
                    </button>
                    <button>
                        <Link to='https://www.linkedin.com/in/syed-kaab-surkhi/' target='_blank' rel='noopener noreferrer'><FaLinkedin size={60} /></Link>
                    </button>
                    <button>
                        <Link to='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ssurkhi56@gmail.com&body=my-text' target='_blank' rel='noopener noreferrer'><FaEnvelopeSquare size={60} /></Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero