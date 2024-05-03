import LoginImg from '../assets/login.jpg'
import DevImg from '../assets/dev.jpg'
import Pagination from '../assets/pagination.png'
import Bprofile from '../assets/bprofile.png'

export const Project = () => {
    return (
        <>
            <div className="bg-indigo-800 m-20 max-w-full rounded-3xl border-2 border-white">
                <div className="grid justify-items-center m-10">
                    <h1  className='text-5xl text-green-500 mt-10 font-extrabold'>Projects</h1>
                </div>

                <div>
                    <div className='grid grid-cols-2 gap-4 p-5'>
                        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
                            <div className='md:flex'>
                                <div className='p-8'>
                                    <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                                        Developers Community Forum
                                    </div>
                                    <a href='#'>Subheading</a>
                                    <p className="mt-2 text-slate-500">
                                        Developers Community Forum is a great place to post queries, exchange knowledge,
                                        and connect with fellow developers on a variety of development topics.
                                    </p>
                                </div>
                                <div className='md:shrink-0 p-5'>
                                    <img src={DevImg} alt="dev" width={150} height={150} />
                                </div>
                            </div>
                        </div>
                        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
                            <div className='md:flex'>
                                <div className='md:shrink-0 p-5'>
                                    <img src={LoginImg} alt="login" width={150} height={150} />
                                </div>
                                <div className='p-8'>
                                    <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                                        Login Functionality with OTP
                                    </div>
                                    <a href='https://github.com/Abhishek-Mahanta/l_otp.git'>Subheading : click here for source code</a>
                                    <p className="mt-2 text-slate-500">
                                        Login functionality with otp verification.Where users, doctors and admins can login by providing the OTP.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='grid grid-cols-2 gap-4 p-5'>
                        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
                            <div className='md:flex'>
                                <div className='p-8'>
                                    <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                                        Forms Pagination
                                    </div>
                                    <a href='https://github.com/Abhishek-Mahanta/Formspagination.git'>Subheading : click here for source code</a>

                                    <p className="mt-2 text-slate-500">
                                        Made this project,worked on forms pagination also used toast,storing data in localstorage. In this project users can
                                        create their own profile.
                                    </p>
                                    <br />
                                    <a href='https://elaborate-donut-e9b78c.netlify.app/'>Click here(URL)</a>
                                </div>
                                <div className='md:shrink-0 p-5'>
                                    <img src={Pagination} alt="pagination" width={150} height={150} />
                                </div>
                            </div>
                        </div>
                        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
                            <div className='md:flex'>
                                <div className='md:shrink-0 p-5'>
                                    <img src={Bprofile} alt="bprofile" width={150} height={150} />
                                </div>
                                <div className='p-8'>
                                    <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                                        Business Profile Page
                                    </div>
                                    <a href='https://github.com/Abhishek-Mahanta/BusinessProfilePage.git'>Subheading : click here</a>
                                    <p className="mt-2 text-slate-500">
                                    Made this project,used toast,storing data in localstorage. In this project users can
                                        create their own business profile.
                                    </p>
                                    <br />
                                    <a href='https://businessprofilepage.netlify.app/'>Click here(URL)</a>
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
