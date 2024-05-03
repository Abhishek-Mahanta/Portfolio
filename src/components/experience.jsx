import React from 'react'
import { MdOutlineDateRange } from "react-icons/md";
import Zephyr from '../assets/zephyr.png'

const experience = () => {
    return (
        <>
            <div className="bg-indigo-800 m-20 max-w-full rounded-3xl border-2 border-white">
                <div className="grid justify-items-center m-10">
                    <h1 className='text-5xl text-green-500 mt-10 font-extrabold'>Experience</h1>
                </div>

                <div>
                    <div className='grid grid-cols-2 gap-4 p-5 '>
                        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
                            <div className='md:flex'>
                                <div className='p-8'>
                                    <div class="flex items-center">
                                        <div class='md:shrink-0 p-1'>
                                            <img src={Zephyr} alt="zephyr" width={50} height={50} />
                                        </div>
                                        <div class="uppercase tracking-wide text-xl to-indigo-500 font-semibold">
                                            Zephyr Solutions
                                        </div>
                                    </div>
                                    <hr />

                                    <div class="flex items-center justify-between">
                                        <p class="mt-2 text-slate-500 font-normal">WEB DEVELOPER INTERN</p>
                                        <div class="flex items-center mt-2">
                                            <MdOutlineDateRange />
                                            <p class="text-slate-500 font-normal ml-2">Jan-May 2021</p>
                                        </div>
                                    </div>
                                    <p className="mt-4 text-black font-normal">
                                        - Did my internship here and built an online employee
                                        attendance application.<br />
                                        - This web app provides the interface of
                                        maintaining the attendance of the employees.<br />
                                        - While building the project i learned - JS, MERN,
                                        PHP, HTML , CSS.<br />
                                        - Did my internship here and built an employee
                                        attendance application.<br />
                                        - This web app provides the interface of
                                        maintaining the attendance of the employees.<br />
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
                            <div className='md:flex'>

                                <div className='p-8'>
                                    <div class="flex items-center">
                                    <div class='md:shrink-0 p-1'>
                                            <img src={Zephyr} alt="zephyr" width={50} height={50} />
                                        </div>
                                        <div class="uppercase tracking-wide text-xl to-indigo-500 font-semibold">
                                            Zephyr Solutions
                                        </div>
                                    </div>
                                    <hr/>
                                    <div class="flex items-center justify-between">
                                        <p class="mt-2 text-slate-500 font-normal">WEB DEVELOPER INTERN</p>
                                        <div class="flex items-center mt-2">
                                            <MdOutlineDateRange />
                                            <p class="text-slate-500 font-normal ml-2">Jan-May 2023</p>
                                        </div>
                                    </div>
                                    <p className="mt-4 text-black font-normal">
                                        - Did my internship here and built an online
                                        developers community forum.<br />
                                        - This web app provides the interface of
                                        maintaining the chats between developers.<br />
                                        - Developers can post questions and other
                                        developers can comment on that post.<br />
                                        - Developers can also like and dis-like posts.<br />
                                        - While building the project i learned - JavaScriptt,
                                        MERN Stack , PHP, ReactJS , CSS.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='grid grid-cols-2 gap-4 p-5'>
                </div>
            </div>
        </>
    )
}

export default experience