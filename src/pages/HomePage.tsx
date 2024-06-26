import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdExplore } from "react-icons/md";
import { MdNotifications } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { IoIosAdd } from "react-icons/io";

const HomePage: React.FC = () => {
    return(
        <div className='h-screen w-screen overflow-auto bg-[#F6F6F6]'>
            {/*Welcome and profile section*/}
            <div className='flex items-center justify-between pr-4'>
                <span className='pl-4 text-l'>Welcome,Sam</span>
                <img src="w3schools_green.jpg" alt= "placeholder"></img>
            </div>
            {/*Caption section*/}
            <div className='flex flex-col pt-6 pl-4'>
                <span className='text-l'>Find Your Path</span>
                <span className='text-xl font-bold'>Explore the Charm of the City</span>
            </div>
            {/*Searchbar section*/}
            <div className='pt-8 pl-4'>
                <div className="box-border flex items-center justify-between w-11/12 p-1 bg-indigo-600 rounded-md w-18">
                    <FiSearch color='white' size={18}/>
                    <span className='text-white text0-sm'>Find your next adventure</span>
                    <HiOutlineAdjustmentsHorizontal color='white' size={18}/>
                </div>
            </div>
            {/*Explore Cities section*/}
            <div className='pt-8 pl-4'>
                <span className='text-xl font-bold'>Explore Cities</span>
                <div className='flex pt-2 overflow-x-auto text-nowrap'>
                    <span className='pb-3 pr-4 text-sm'>All</span>
                    <span className='pb-3 pr-4 text-sm'>Popular</span>
                    <span className='pb-3 pr-4 text-sm font-bold'>Recommended</span>
                    <span className='pb-3 pr-4 text-sm'>Most Viewed</span>
                    <span className='pb-3 text-sm'>Highest Rated</span>
                </div>
            </div>
            {/*Cities card*/}
            <div className='flex justify-between pb-4 pr-4 mb-6 overflow-x-auto'>
                {/*Kota Kinabalu*/}
                <div className='pt-4 pb-2 pl-4'>
                    <div className="box-border rounded-md h-75 w-62 p-2 bg-[#ffffff]">
                        <img
                            src={require("../assets/kotaKinabalu.jpg")}
                            alt="test"
                            className='object-cover h-32 pt-2 rounded-md w-44'
                        ></img>
                        <div className='pt-1 font-bold text-l'>Kota Kinabalu</div>
                        <div className='flex justify-between w-44'>
                            <div className='flex items-center justify-between pt-1'>
                                <IoLocationOutline size={18}/>
                                <span>Malaysia</span>
                            </div>
                            <div className='flex items-center justify-between pt-1'>
                            <CiStar size={18}/>
                            <span>4.9</span>
                            </div>
                        </div>          
                    </div>
                </div>
                {/*Kuala Lumpur*/}
                <div className='pt-4 pb-2 pl-6'>
                    <div className="box-border rounded-md h-75 w-62 p-2 bg-[#ffffff]">
                    <img
                        src={require("../assets/kualaLumpur.jpg")}
                        alt="test"
                        className='object-cover h-32 pt-2 rounded-md w-44'
                    ></img>
                    <div className='pt-1 font-bold text-l'>Kuala Lumpur</div>
                    <div className='flex justify-between w-44'>
                        <div className='flex items-center justify-between pt-1'>
                            <IoLocationOutline size={18}/>
                            <span>Malaysia</span>
                        </div>
                        <div className='flex items-center justify-between pt-1'>
                        <CiStar size={18}/>
                        <span>4.8</span>
                        </div>
                    </div> 
                    </div>
                </div>
                {/*Malacca*/}  
                <div className='pt-4 pb-2 pl-6'>
                    <div className="box-border rounded-md h-75 w-62 p-2 bg-[#ffffff]">
                    <img
                        src={require("../assets/malacca.jpg")}
                        alt="test"
                        className='object-cover h-32 pt-2 rounded-md w-44'
                    ></img>
                    <div className='pt-1 font-bold text-l'>Malacca</div>
                    <div className='flex justify-between w-44'>
                        <div className='flex items-center justify-between pt-1'>
                            <IoLocationOutline size={18}/>
                            <span>Malaysia</span>
                        </div>
                        <div className='flex items-center justify-between pt-1'>
                        <CiStar size={18}/>
                        <span>4.5</span>
                        </div>
                    </div>      
                    </div>
                </div>
                {/*Ipoh*/}
                <div className='pt-4 pb-2 pl-6'>
                    <div className="box-border rounded-md h-75 w-62 p-2 bg-[#ffffff]">
                    <img
                        src={require("../assets/ipoh.jpg")}
                        alt="test"
                        className='object-cover h-32 pt-2 rounded-md w-44'
                    ></img>
                    <div className='pt-1 font-bold text-l'>Ipoh</div>
                    <div className='flex justify-between w-44'>
                        <div className='flex items-center justify-between pt-1'>
                            <IoLocationOutline size={18}/>
                            <span>Malaysia</span>
                        </div>
                        <div className='flex items-center justify-between pt-1'>
                        <CiStar size={18}/>
                        <span>4.9</span>
                        </div>
                    </div>            
                    </div>
                </div>
            {/*Subang Jaya*/}
            <div className='pt-4 pb-2 pl-6'>
                <div className="box-border rounded-md h-75 w-62 p-2 bg-[#ffffff]">
                <img
                    src={require("../assets/subangJaya.jpg")}
                    alt="test"
                    className='object-cover h-32 pt-2 rounded-md w-44'
                ></img>
                <div className='pt-1 font-bold text-l'>Subang Jaya</div>
                <div className='flex justify-between w-44'>
                    <div className='flex items-center justify-between pt-1'>
                        <IoLocationOutline size={18}/>
                        <span>Malaysia</span>
                    </div>
                    <div className='flex items-center justify-between pt-1'>
                    <CiStar size={18}/>
                    <span>4.5</span>
                    </div>
                </div>       
                </div>
            </div>
            {/*George Town*/}
            <div className='pt-4 pb-2 pl-6'>
                <div className="box-border rounded-md h-75 w-62 p-2 bg-[#ffffff]">
                <img
                    src={require("../assets/georgeTown.jpg")}
                    alt="test"
                    className='object-cover h-32 pt-2 rounded-md w-44'
                ></img>
                <div className='pt-1 font-bold text-l'>George Town</div>
                <div className='flex justify-between w-44'>
                    <div className='flex items-center justify-between pt-1'>
                        <IoLocationOutline size={18}/>
                        <span>Malaysia</span>
                    </div>
                    <div className='flex items-center justify-between pt-1'>
                    <CiStar size={18}/>
                    <span>5.0</span>
                    </div>
                </div>       
                </div>
            </div>
            </div>
            <div className='flex items-center justify-between pt-8 pl-4'>
                <span className='text-xl font-bold'>Top Destinations</span>
                <div className='flex items-center justify-between pr-4'>
                <span className='text-sm text-blue-600'>View All</span>
                <MdOutlineKeyboardArrowRight size={18} color='blue'/>
                </div>
            </div>
            {/*Top destinations section*/}
            <div className='flex justify-between pl-2 pr-4 overflow-x-auto mb-28'>
                {/*Heritage Museum*/}
                <div className='pt-4 pb-5 pl-2'>
                    <div className="box-border rounded-md h-75 w-62 p-3 bg-[#ffffff]">
                        <img
                            src={require("../assets/heritageMusuem.jpg")}
                            alt="test"
                            className='object-cover h-48 pt-2 rounded-md w-72'
                        ></img>
                        <div className='pt-1 font-bold text-l'>Heritage Museum</div>
                        <div className='pt-1 text-sm w-72'>Immerse yourself in the vibrant experience of Baba Nyonya culture</div>
                        <div className='flex justify-between w-72'>
                            <div className='flex items-center justify-between pt-1'>
                                <IoLocationOutline size={18} color='blue'/>
                                <span className='text-blue-600'>Melaka</span>
                            </div>
                            <div className='flex items-center justify-between pt-1'>
                            <div className='flex justify-evenly'>
                                <FaStar size={18} color='blue'/>
                                <FaStar size={18} color='blue'/>
                                <FaStar size={18} color='blue'/>
                                <FaStar size={18} color='blue'/>
                                <FaStarHalfAlt size={18} color='blue'/>
                            </div>
                            <span className='pl-2 text-blue-600'>32 reviews</span>
                            </div>
                        </div>            
                    </div>
                </div>
                {/*Mossy Forest*/}
                <div className='pt-4 pb-5 pl-4'>
                    <div className="box-border rounded-md h-75 w-62 p-3 bg-[#ffffff]">
                        <img
                            src={require("../assets/mossyForest.jpg")}
                            alt="test"
                            className='object-cover h-48 pt-2 rounded-md w-72'
                        ></img>
                        <div className='pt-1 font-bold text-l'>Mossy Forest</div>
                        <div className='pt-1 text-sm w-72'>A mystical and enchanting high-altitude rainforest renowned for its diverse ecosystem</div>
                        <div className='flex justify-between w-72'>
                            <div className='flex items-center justify-between pt-1'>
                                <IoLocationOutline size={18} color='blue'/>
                                <span className='text-blue-600'>Cameron</span>
                            </div>
                            <div className='flex items-center justify-between pt-1'>
                            <div className='flex justify-evenly'>
                                <FaStar size={18} color='blue'/>
                                <FaStar size={18} color='blue'/>
                                <FaStar size={18} color='blue'/>
                                <FaStar size={18} color='blue'/>
                                <FaStarHalfAlt size={18} color='blue'/>
                            </div>
                            <span className='pl-2 text-blue-600'>50 reviews</span>
                            </div>
                        </div>     
                    </div>
                </div>
                {/*Langkawi*/}
                <div className='pt-4 pb-5 pl-4'>
                    <div className="box-border rounded-md h-75 w-62 p-3 bg-[#ffffff]">
                        <img
                            src={require("../assets/langkawi.jpg")}
                            alt="test"
                            className='object-cover h-48 pt-2 rounded-md w-72'
                        ></img>
                        <div className='pt-1 font-bold text-l'>Langkawi</div>
                        <div className='pt-1 text-sm w-72'>Jewel of Kedah, this island paradise boasts stunning beaches, lush rainforests</div>
                        <div className='flex justify-between w-72'>
                            <div className='flex items-center justify-between pt-1'>
                                <IoLocationOutline size={18} color='blue'/>
                                <span className='text-blue-600'>Kedah</span>
                            </div>
                            <div className='flex items-center justify-between pt-1'>
                            <div className='flex justify-evenly'>
                                <FaStar size={18} color='blue'/>
                                <FaStar size={18} color='blue'/>
                                <FaStar size={18} color='blue'/>
                                <FaStar size={18} color='blue'/>
                                <FaStarHalfAlt size={18} color='blue'/>
                            </div>
                            <span className='pl-2 text-blue-600'>85 reviews</span>
                            </div>
                        </div>            
                    </div>
                </div>
            </div>
            {/*Navigation bar*/}
            <div className="fixed bottom-0 box-border h-20 w-full p-4 bg-[#FFFFFF]">
                <div className='flex items-center justify-between'>
                    <IoMdHome size={25} color='gray'/>
                    <div className='pr-5'>
                        <MdExplore size={25} color='gray'/>
                    </div>
                    <div className='absolute -translate-x-1/2 -translate-y-1/2 left-1/2'>
                    <div className='h-16 w-16 rounded-full bg-[#574DEA]'>
                        <div className='flex items-center justify-center'>
                            <IoIosAdd size={70} color='white'/>
                        </div>
                    </div>
                </div>
                <div className='pl-5'>
                    <MdNotifications size={25} color='gray'/>
                </div>
                <FaUser size={25} color='gray'/>
            </div>
        </div>
    </div>
    );
};

export default HomePage;