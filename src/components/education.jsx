import React from 'react'
import { MdOutlineDateRange } from "react-icons/md";
import Vkv from '../assets/vkv.jpg'
import Nerim from '../assets/nerim.jpg'

const education = () => {
    return (
        <>
            <div className="bg-indigo-800 m-20 max-w-full rounded-3xl border-2 border-white">
                <div className="grid justify-items-center m-10">
                    <h1 className='text-5xl text-green-500 mt-10 font-extrabold'>Education</h1>
                </div>

                <div>
                    <div className='grid grid-cols-2 gap-4 p-5 '>
                        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
                            <div className='md:flex'>
                                <div className='p-8'>
                                    <div class="flex items-center">
                                        <div class='md:shrink-0 p-1'>
                                            <img src={Vkv} alt="vkv" width={50} height={50} />
                                        </div>
                                        <div class="uppercase tracking-wide text-xl to-indigo-500 font-semibold">
                                            Vivekananda Kendra Vidyalaya
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="flex items-center">
                                        <MdOutlineDateRange />
                                        <p className=" text-slate-500 font-normal ml-2">2015</p>
                                    </div>
                                    <p className="mt-5 text-black font-normal">
                                        12th
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
                            <div className='md:flex'>

                                <div className='p-8'>
                                <div class="flex items-center">
                                        <div class='md:shrink-0 p-1'>
                                            <img src={Nerim} alt="nerim" width={70} height={70} />
                                        </div>
                                        <div class="uppercase tracking-wide text-xl to-indigo-500 font-semibold">
                                            Nerim Group of Institutions
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="flex items-center">
                                        <MdOutlineDateRange />
                                        <p className=" text-slate-500 font-normal ml-2">2019-2021</p>
                                    </div>
                                    <p className="mt-5 text-black font-normal">
                                        Bachelor's in Computer Application
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

export default education