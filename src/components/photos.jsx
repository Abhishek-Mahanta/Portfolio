import React from 'react'
import Project1 from '../assets/project1.jpg'
import Project2 from '../assets/project2.jpg'
import Project3 from '../assets/project3.jpg'
import Project4 from '../assets/project4.jpg'

const photos = () => {
    return (
        <>
            <div  className="bg-indigo-800 m-20 max-w-full rounded-3xl border-2 border-white">
                <div className="grid justify-items-center m-10">
                    <h1 className="text-5xl text-green-500 mt-10 font-extrabold">Portfolio</h1>
                    <h1 className="text-2xl text-white mt-4 font-serif">My last Projects</h1>
                </div>
                <h1 className='text-3xl text-white mt-4 p-2 font-semibold'>Project 1 : </h1>
                <div className='p-1 items-center rounded-2xl mt-4 mb-8' style={{ padding: '0 20px' }}>
                    <img src={Project1} alt="project1" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
                </div>
                <hr/>
                <h1 className='text-3xl text-white mt-8 p-2 font-semibold'>Project 2 : </h1>
                <div className='p-1 items-center rounded-2xl mt-4 mb-8' style={{ padding: '0 20px' }}>
                    <img src={Project2} alt="project2" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
                </div>
                <hr/>
                <h1 className='text-3xl text-white mt-8 p-2 font-semibold'>Project 3 : </h1>
                <div className='p-1 items-center rounded-2xl mt-4 mb-4' style={{ padding: '0 20px' }}>
                    <img src={Project3} alt="project3" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
                </div>
                <div className='p-1 items-center rounded-2xl mt-8 mb-8' style={{ padding: '0 20px' }}>
                    <img src={Project4} alt="project4" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
                </div>
            </div>
        </>
    )
}

export default photos
