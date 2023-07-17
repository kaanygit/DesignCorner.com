import {BsTwitter,BsFacebook} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import { Link } from 'react-router-dom'


const FooterSection=()=>{
    return(
        <>
            <div className="w-full h-full p-16 flex bg-gray-900 text-white bottom-0">
                <div className='w-full h-full'>
                    <div>
                        <span className="text-4xl font-bold">DesignCorner.com</span>
                    </div>
                    <div className="flex justify-between w-full">
                        <div className="grid grid-cols-4 flex gap-10 mt-7 ">
                            <div>
                                <div className="borber-b-3"><span>ABOUT US</span></div>
                                <div className="mt-3">
                                    <ul>
                                        <li>about</li>
                                        <li>about</li>
                                        <li>about</li>
                                        <li>about</li>
                                        <li>about</li>
                                        <li>about</li>
                                        <li>about</li>
                                        <li>about</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div><span>MORE PRODUCTS</span></div>
                                <div className="mt-3">
                                    <ul>
                                    <li>about</li>
                                        <li>about</li>
                                        <li>about</li>
                                        <li>about</li>
                                        <li>about</li>
                                        <li>about</li>
                                        <li>about</li>
                                        <li>about</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div><span>QUESTIONS</span></div>
                                <div className="mt-3">
                                    <ul>
                                    <li>about</li>
                                        <li>about</li>
                                        <li>about</li>
                                        <li>about</li>
                                        <li>about</li>
                                        <li>about</li>
                                        <li>about</li>
                                        <li>about</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='flex text-center mt-7 justify-center items-center'>
                            <span>Thank you for choosing us 🎉</span>
                        </div>
                        <div className="mt-7">
                            <div><span>SOCIAL MEDIA</span></div>
                            <div className="flex mt-3 grid grid-cols-1">
                                <h1 className='mt-3 text-2xl text-instagramColor'><FaInstagram/></h1>
                                <h1 className='mt-4 text-2xl text-facebookColor'><BsFacebook/></h1>
                                <h1 className='mt-4 text-2xl text-twitterColor'><BsTwitter/></h1>
                                <Link to='https://github.com/kaanygit' className='mt-4 text-2xl text-white'><AiFillGithub/></Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='text-xs text-center mt-5 w-full'>Created By Kaanygit © 2023</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FooterSection;