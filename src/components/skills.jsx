import Db from '../assets/db.png'
import Git from '../assets/git.png'
import Lf from '../assets/lf.png'
import Pl from '../assets/pl.jpg'

export const Skills = () => {
  return (
    <>
      <div className="bg-indigo-800 m-20 max-w-full rounded-3xl border-2 border-white">
        <div className="grid justify-items-center m-10">
          <h1 className='text-5xl text-green-500 mt-10 font-extrabold'>Skills</h1>
        </div>

        <div>
          <div className='grid grid-cols-2 gap-4 p-5 '>
            <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
              <div className='md:flex'>
                <div className='p-8'>
                  <div className="uppercase tracking-wide text-xl to-indigo-500 font-semibold">
                    Programming Languages
                  </div>
                  <hr />
                  <p className="mt-4 text-slate-500 font-normal">
                    Javascript, CSS, HTML, Java, PHP
                  </p>
                </div>
                <div className='md:shrink-0 p-5'>
                  <img src={Pl} alt="pl" width={150} height={150} />
                </div>
              </div>
            </div>

            <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
              <div className='md:flex'>
                <div className='md:shrink-0 p-5'>
                  <img src={Lf} alt="lf" width={150} height={150} />
                </div>
                <div className='p-8'>
                  <div className="uppercase tracking-wide text-xl to-indigo-500 font-semibold">
                    Libraries,<br />Frameworks
                  </div>
                  <hr />
                  <p className="mt-4 text-slate-500 font-normal">
                    ReactJS, TailwindCSS, Bootstrap, NodeJS
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-4 p-5 '>
            <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
              <div className='md:flex'>
                <div className='p-8'>
                  <div className="uppercase tracking-wide text-xl to-indigo-500 font-semibold">
                    Tools/Platform
                  </div>
                  <hr />
                  <p className="mt-4 text-slate-500 font-normal">
                    Git
                  </p>
                </div>
                <div className='md:shrink-0 p-5'>
                  <img src={Git} alt="git" width={150} height={150} />
                </div>
              </div>
            </div>
            <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
              <div className='md:flex'>
                <div className='md:shrink-0 p-5'>
                  <img src={Db} alt="db" width={150} height={250} />
                </div>
                <div className='p-8'>
                  <div className="uppercase tracking-wide text-xl to-indigo-500 font-semibold">
                    Databases
                  </div>
                  <hr />
                  <p className="mt-4 text-slate-500 font-normal">
                    MongoDB, MySQL
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4 p-5'>
          </div>
        </div>
      </div>

    </>
  )
}
