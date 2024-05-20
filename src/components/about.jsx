import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaLinkedin } from "react-icons/fa";
import { TbBrandGmail } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

const About = () => {
    return (
        <section className='justify-around flex p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-8 text-white'>
            <div className='w-1/2 mr-[300px]'>
                <div className='border-2 border-gray-300 p-10 rounded-3xl bg-indigo-800'>
                    <p className='text-5xl mb-4 font-extrabold text-green-500'>About Me</p>
                    <p className='text-slate-300 mb-3'>
                        Let's build quality in programming and design with our services.
                    </p>
                    <hr />
                    <div className='mt-7'>
                        <p className='mt-1 font-mono'>Age: 25</p>
                        <p className='mt-1 font-mono'>DOB: 02 Jan 1999</p>
                        <p className='mt-1 font-mono'>Place: Jorhat, Assam</p>
                        <p className='mt-1 font-mono'>Phone Number: 7086714782</p>
                        <p className='mt-1 font-mono'>Email: amahanta04@gmail.com</p>
                        <p className='mt-1 font-mono'>Languages: English, Hindi, Assamese, Bengali</p>
                    </div>
                </div>
            </div>            
                <div className='flex flex-col mt-2 space-y-4 cursor-pointer ml-10'>
                    <a href="https://www.linkedin.com/in/abhishek-mahanta-6917701a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
                        <FaLinkedin size={40} className='border-4 hover:border-indigo-800 rounded-full' />
                    </a>
                    <a href="https://github.com/Abhishek-Mahanta" target="_blank">
                        <FaGithub size={40} className='border-4 hover:border-indigo-800 rounded-full' />
                    </a>
                    <a href="mailto:amahanta04@gmail.com" target="_blank" rel="noopener noreferrer">
                        <TbBrandGmail size={40} className='border-4 hover:border-indigo-800 rounded-full' />
                    </a>
                    <BsFacebook size={40} className='border-4 hover:border-indigo-800 rounded-full' />
                    <BsInstagram size={40} className='border-4 hover:border-indigo-800 rounded-full' />
                    <BsTwitter size={40} className='border-4 hover:border-indigo-800 rounded-full' />
                </div>            
        </section>
    );
}

export default About;
