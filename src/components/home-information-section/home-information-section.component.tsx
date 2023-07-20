import { FC } from 'react'
import {AiOutlineSafety} from 'react-icons/ai'
import {BsCreditCard2Front} from 'react-icons/bs'
import {FaExchangeAlt} from 'react-icons/fa'

const HomeInformationSection:FC=()=>{
    return(
        <>
            <div className="w-full h-screen justify-center items-center flex ">
                <div>
                    <div className="grid grid-cols-1 gap-5 p-16">
                        <div className="flex w-full h-full grid grid-cols-3 gap-4 items-center text-center">
                            <div>   
                                <span className='text-center justify-center items-center flex text-5xl'><AiOutlineSafety/></span>
                                <div className='mt-3'>
                                    <div>
                                        <span className='font-bold text-xl'>Secure Shopping</span>
                                    </div>
                                    <div>
                                        <span className='text-sm'>Safe shopping with DesignCorner.com assurance</span>
                                    </div>
                                </div>
                            </div>
                            <div>   
                                <span className='text-center justify-center items-center flex text-5xl'><BsCreditCard2Front/></span>
                                <div className='mt-3'>
                                    <div>
                                        <span className='font-bold text-xl'>Payment Options</span>
                                    </div>
                                    <div>
                                        <span className='text-sm'>Installment options up to 36 months</span>
                                    </div>
                                </div>
                            </div>
                            <div>   
                                <span className='text-center justify-center items-center flex text-5xl'><FaExchangeAlt/></span>
                                <div className='mt-3'>
                                    <div>
                                        <span className='font-bold text-xl'>Easy Returns</span>
                                    </div>
                                    <div>
                                        <span className='text-sm'>Easy returns within 2 weeks</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-7'>
                            <div>
                                <span className="text-3xl font-bold">Beatiful Your Home With Design Corner</span>
                            </div>
                            <div className="mt-5">
                                <span>
                                DesignCorner, founded in 1955 under the name of Kaanygit, serves with the aim of beautifying and developing living spaces. The company, which has been serving as a wholesaler for many years, opened its first store in Izmir Bornova in 1996, and started to offer DIY market retailing with innovative and modern lines across Turkey with other stores opened in Antalya Topçular and Izmir Balçova in 1998. B&Q of Kingfisher group, one of the three most important global brands in the home improvement industry in 2000; By signing a partnership agreement with the company, it gained an advantage over its competitors. Continuing to exist in the retail field for 27 years, DesignCorner started to continue its successful activities in the digital field by launching www.designcorner.com.tr in addition to its physical stores in 2006. In 2013, DesignCorner Fix, with a brand new format, opened its neighborhood construction market store in Çekmeköy and activated its multi-channel structuring. By establishing the R&D center in 2018, it took another step in developing innovative projects. By closing a gap with the "UstMASI" application, it established a free platform where it brings together customers and craftsmen in need of renovation. Currently serving with 358 stores, online shopping site and mobile application in 53 different cities of Turkey, DesignCorner successfully continues to be the construction market, which is the first choice of everyone who wants to create pleasant and sustainable living spaces and improve their existing spaces.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeInformationSection