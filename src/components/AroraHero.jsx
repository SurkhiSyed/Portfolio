import React, { useEffect } from 'react';
import { color, motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const COLORS = ['#023D2A', '#0D2A4D', '#3D2A4D', '#4D1A2E'];
export const AroraHero = () => {
    const color = useMotionValue(COLORS[0]);
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

    useEffect(() => {
        animate(color, COLORS, {
            ease: 'easeInOut',
            duration: 10,
            repeat: Infinity,
            repeatType: 'mirror'
        });
    }, []);

    return (
        <motion.section
            style={{
                backgroundImage
            }}
            className='fixed top-0 left-0 w-full h-full z-0 bg-gray-950'
        >
            <div className='absolute inset-0 z-0'>
                <Canvas>
                    <Stars radius={50} count={2500} factor={4} fade speed={2}/>
                </Canvas>
            </div>
        </motion.section>
    );
};