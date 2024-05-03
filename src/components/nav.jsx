import {CgNametag} from 'react-icons/cg';
import {AiOutlineClose} from 'react-icons/ai';
import {HiMenu} from 'react-icons/hi'
import {useState} from 'react';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { Link } from 'react-scroll'

const nav = () => {

const [toggle1, setToggle1] = useState(false);

function openMenu() {
    setToggle1(true);
}
function closeMenu() {
    setToggle1(false);
}

  return (
    <>
        <div className="flex items-center justify-between p-10 lg:flex-row ">
            <div >
                <a href="#" className="text-white font-mono text-3xl -tracking-wider flex items-center"><CgNametag />ABHISHEK</a>
            </div>
            <div className="space-x-5">
                <div className="ssm:hidden lg:block space-x-2">
                <Link to="about" smooth={true} offset={550} duration={500} id='about' className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl cursor-pointer">About</Link>
                <Link to="project" smooth={true} offset={1200} duration={500} id='project' className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl cursor-pointer">Projects</Link>
                <Link to="skills" smooth={true} offset={2050} duration={500} id='skills' className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl cursor-pointer">Skills</Link>
                <Link to="contact" smooth={true} offset={7000} duration={1500} id='contact' className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl cursor-pointer">Contact</Link>
                </div>
                
                <div className='ssm:block lg:hidden'>
                    {toggle1 ? (
                        <AiOutlineClose onClick={closeMenu} size={30} className='text-white cursor-pointer'/>
                    ):(<HiMenu onClick={openMenu} size={30} className='text-white'/>)}
                    
                </div>
            </div>
        </div>
        <div className='ssm:block lg:hidden'>
            {toggle1 ? (
                <div className='flex justify-between ml-10'>
                <ul className="space-y-4">
                    <li><Link to="about" smooth={true} offset={1300} duration={500}  id='about' className="text-white text-xl  hover:bg-indigo-800 px-3 py-2 rounded-full cursor-pointer">About</Link></li>
                    <li><Link to="project" smooth={true} offset={2300} duration={500} id='project' className="text-white text-xl  hover:bg-indigo-800 px-3 py-2 rounded-full cursor-pointer">Projects</Link></li>
                    <li><Link to="skills" smooth={true} offset={3600} duration={500} id='skills' className='text-white text-xl mb-2 hover:bg-indigo-800 px-3 py-2 rounded-full cursor-pointer'>Skills</Link></li>
                    <li><Link to="contact" smooth={true} offset={7950} duration={1500} id='contact' className='text-white text-xl mb-2 hover:bg-indigo-800 px-3 py-2 rounded-full cursor-pointer'>Contact</Link></li>
                </ul>
            </div>
            ):(
                <div></div>
            )}
            
        </div>
    </>
  )
}

export default nav