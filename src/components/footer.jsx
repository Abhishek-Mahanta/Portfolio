import React from 'react'
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaLinkedin } from "react-icons/fa6";
import { TbBrandGmail } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

const section = [
  {
    title: 'Information',
    items: ['Abhishek Mahanta', 'Age: 25', '7086714782', 'amahanta04@gmail.com']
  },
  {
    title: 'Tech Stack',
    items: ['Javascipt', 'HTML', 'ReactJS', 'Vite + React', 'CSS', 'TailwindCSS', 'Bootstrap']
  },
  {
    title: 'Projects',
    items: ['Developers Community Forum', 'Login with OTP Verification ', 'Create your project(pagination)', 'Business Profile']
  },
  {
    title: 'Available On',
    items: ['Linkedin', 'Github', 'E-mail']
  },
]

const items = [
  {
    name: 'Linkedin',
    icon: FaLinkedin,
    link: 'https://www.linkedin.com/in/abhishek-mahanta-6917701a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
  },
  {
    name: 'Github',
    icon: FaGithub,
    link: 'https://github.com/Abhishek-Mahanta'
  },
  {
    name: 'Email',
    icon: TbBrandGmail,
    link: 'mailto:amahanta04@gmail.com'
  },
  {
    name: 'Facebook',
    icon: BsFacebook
  },
  {
    name: 'Instagram',
    icon: BsInstagram
  },
  {
    name: 'Twitter',
    icon: BsTwitter
  },
]



const footer = () => {
  return (
    <>
      <div className='w-full mt-24 bg-slate-900 text-gray-300 py-y px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
          {
            section.map((section, index) => (
              <div key={index}>
                <h6 className='font-bold uppercase pt-2 underline'>
                  {section.title}
                </h6>
                <ul>
                  {section.items.map((item, i) => (
                    <li key={i}
                      className='py-1 text-gray-500 hover:text-white cursor-pointer'>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          }

          <div className='cols-span-2 pt-8 md:pt-2'>
            <p className='font-bold uppercase'>
              Welcome to my portfolio
            </p>
            <p className='py-4'>
              Feel free to scroll everything.
            </p>
            <form className='flex flex-col sm:flex-row'>
              <input type="email" placeholder="Enter your e-mail address here"
                className='w-full p-2 mr-4 rounded-md md-4 text-black border-gray-300 border-2 focus:outline-none focus:border-green-500'
                style={{ minWidth: '300px', padding: '8px' }} />
              <button className='p-2 md-4 hover:uppercase'>
                Subscribe
              </button>
            </form>
            <div className='flex justify-between sm:w-[300px] pt-4 mt-6 text-2xl'>
              {items.map((x, index) => {
                return (
                  <a key={index} href={x.link} target="_blank" rel="noopener noreferrer" className='hover:text-white cursor-pointer'>
                    <x.icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center max-w-[1240px] px-2 py-4 mx-auto justify-center sm:flex-row text-center text-gray-500'>
          <p className='py-4'>
            2024, All rights reserved
          </p>


        </div>
      </div>
    </>
  )
}

export default footer