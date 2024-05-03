import React, { useState } from 'react';
import HeroPic from '../assets/abhishek.jpeg';
import Html from '../assets/html.png'
import Javascript from '../assets/javascript.png'
import Reactjs from '../assets/reactjs.png'
import Tailwindcss from '../assets/tailwindcss.png'
import Css from '../assets/css.png'
import Bootstrap from '../assets/bootstrap.jpg'
import Vite from '../assets/vite.jpg'

const hero = () => {
    return (
        
        <section className='flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white'>
            <div className='lg:w-1/2 ssm:w-fit'>
                <p className='text-3xl mb-5 text-slate-300'>Hello everyone, I'm</p>
                <h1 className='text-6xl font-serif fontsize:12px text-green-500'>Abhishek Mahanta</h1>
                <p className='text-3xl mb-5 text-slate-300'>Frontend Developer</p>
                <hr />

                <div className='md:shrink-0 flex mt-5 space-x-4 cursor-pointer'>
                    <a style={{ width: '50px', height: '50px', borderRadius: '8px', overflow: 'hidden' }}>
                        <img src={Html} alt="html" style={{ width: '100%', height: '90%', borderRadius: 'inherit' }} />
                    </a>
                    <a style={{ width: '50px', height: '50px', borderRadius: '8px', overflow: 'hidden' }}>
                        <img src={Css} alt="css" style={{ width: '100%', height: '90%', borderRadius: 'inherit' }} />
                    </a>
                    <a style={{ width: '50px', height: '50px', borderRadius: '8px', overflow: 'hidden' }}>
                        <img src={Javascript} alt="javascript" style={{ width: '100%', height: '90%', borderRadius: 'inherit' }} />
                    </a>
                    <a style={{ width: '50px', height: '50px', borderRadius: '8px', overflow: 'hidden' }}>
                        <img src={Reactjs} alt="reactjs" style={{ width: '100%', height: '90%', borderRadius: 'inherit' }} />
                    </a>
                    <a style={{ width: '50px', height: '50px', borderRadius: '8px', overflow: 'hidden' }}>
                        <img src={Vite} alt="vite" style={{ width: '100%', height: '90%', borderRadius: 'inherit' }} />
                    </a>
                    <a style={{ width: '50px', height: '50px', borderRadius: '8px', overflow: 'hidden' }}>
                        <img src={Tailwindcss} alt="tailwindcss" style={{ width: '100%', height: '90%', borderRadius: 'inherit' }} />
                    </a>
                    <a style={{ width: '50px', height: '50px', borderRadius: '8px', overflow: 'hidden' }}>
                        <img src={Bootstrap} alt="boopstrap" style={{ width: '100%', height: '90%', borderRadius: 'inherit' }} />
                    </a>
                </div>
                <p className='mt-10 text-slate-300 font-sans'>
                    As a highly motivated Computer Science student, I possess a good understanding of
                    programming principles and concepts. I am a quick learner and thrive in fast-paced
                    environments. I have honed my problem-solving skills and have developed a keen eye for detail.
                    I am enthusiastic, with excellent communication skills and the ability to work well in teams.
                </p>
            </div>
            <div className='w-1/2 items-center ssm:w-fit'>
                <img src={HeroPic} alt="abhishek" width={350} height={350} className='rounded-full  border-8 border-white' />
            </div>
        </section>
        
    )
}

export default hero