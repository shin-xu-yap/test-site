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
            <div className='pr-4 flex items-center justify-between'>
                <span className='pl-4 text-l'>Welcome,Sam</span>
                <img src="w3schools_green.jpg" alt= "placeholder"></img>
            </div>
            {/*Caption section*/}
            <div className='pl-4 pt-6 flex flex-col align-items-center'>
                <span className='text-xl'>Find Your Path</span>
                <span className='text-2xl font-bold'>Explore the Charm of the City</span>
            </div>
            {/*Searchbar section*/}
            <div className='pl-4 pt-8'>
                <div className="w-1/2 flex justify-between bg-indigo-600 box-border w-18 p-3 rounded-md">
                    <FiSearch color='white' size={20}/>
                    <span className='text-white'>Find your next adventure</span>
                    <HiOutlineAdjustmentsHorizontal color='white' size={20}/>
                </div>
            </div>
            {/*Explore Cities section*/}
            <div className='pl-4 pt-8'>
                <span className='text-xl font-bold'>Explore Cities</span>
                <div className='pt-2 w-2/3 flex justify-between'>
                    <span className='text-md'>All</span>
                    <span className='text-md'>Popular</span>
                    <span className='text-md font-bold'>Recommended</span>
                    <span className='text-md'>Most Viewed</span>
                    <span className='text-md'>Highest Rated</span>
                </div>
            </div>
            {/*Cities card*/}
            <div className='flex justify-between overflow-x-auto pb-4 pr-4 mb-10'>
                {/*Kota Kinabalu*/}
                <div className='pt-4 pl-4'>
                    <div className="box-border rounded-md h-75 w-62 p-2 bg-[#ffffff]">
                        <img
                            src={require("../assets/kotaKinabalu.jpg")}
                            alt="test"
                            className='pt-2 rounded-md w-44 h-32 object-cover'
                        ></img>
                        <div className='pt-1 text-l font-bold'>Kota Kinabalu</div>
                        <div className='w-44 flex justify-between'>
                            <div className='pt-1 flex items-center justify-between'>
                                <IoLocationOutline size={18}/>
                                <span>Malaysia</span>
                            </div>
                            <div className='pt-1 flex items-center justify-between'>
                            <CiStar size={18}/>
                            <span>4.9</span>
                            </div>
                        </div>          
                    </div>
                </div>
                {/*Kuala Lumpur*/}
                <div className='pt-4 pl-6'>
                    <div className="box-border rounded-md h-75 w-62 p-2 bg-[#ffffff]">
                    <img
                        src={require("../assets/kualaLumpur.jpg")}
                        alt="test"
                        className='pt-2 rounded-md w-44 h-32 object-cover'
                    ></img>
                    <div className='pt-1 text-l font-bold'>Kuala Lumpur</div>
                    <div className='w-44 flex justify-between'>
                        <div className='pt-1 flex items-center justify-between'>
                            <IoLocationOutline size={18}/>
                            <span>Malaysia</span>
                        </div>
                        <div className='pt-1 flex items-center justify-between'>
                        <CiStar size={18}/>
                        <span>4.8</span>
                        </div>
                    </div> 
                    </div>
                </div>
                {/*Malacca*/}  
                <div className='pt-4 pl-6'>
                    <div className="box-border rounded-md h-75 w-62 p-2 bg-[#ffffff]">
                    <img
                        src={require("../assets/malacca.jpg")}
                        alt="test"
                        className='pt-2 rounded-md w-44 h-32 object-cover'
                    ></img>
                    <div className='pt-1 text-l font-bold'>Malacca</div>
                    <div className='w-44 flex justify-between'>
                        <div className='pt-1 flex items-center justify-between'>
                            <IoLocationOutline size={18}/>
                            <span>Malaysia</span>
                        </div>
                        <div className='pt-1 flex items-center justify-between'>
                        <CiStar size={18}/>
                        <span>4.5</span>
                        </div>
                    </div>      
                    </div>
                </div>
                {/*Ipoh*/}
                <div className='pt-4 pl-6'>
                    <div className="box-border rounded-md h-75 w-62 p-2 bg-[#ffffff]">
                    <img
                        src={require("../assets/ipoh.jpg")}
                        alt="test"
                        className='pt-2 rounded-md w-44 h-32 object-cover'
                    ></img>
                    <div className='pt-1 text-l font-bold'>Ipoh</div>
                    <div className='w-44 flex justify-between'>
                        <div className='pt-1 flex items-center justify-between'>
                            <IoLocationOutline size={18}/>
                            <span>Malaysia</span>
                        </div>
                        <div className='pt-1 flex items-center justify-between'>
                        <CiStar size={18}/>
                        <span>4.9</span>
                        </div>
                    </div>            
                    </div>
                </div>
            {/*Subang Jaya*/}
            <div className='pt-4 pl-6'>
                <div className="box-border rounded-md h-75 w-62 p-2 bg-[#ffffff]">
                <img
                    src={require("../assets/subangJaya.jpg")}
                    alt="test"
                    className='pt-2 rounded-md w-44 h-32 object-cover'
                ></img>
                <div className='pt-1 text-l font-bold'>Subang Jaya</div>
                <div className='w-44 flex justify-between'>
                    <div className='pt-1 flex items-center justify-between'>
                        <IoLocationOutline size={18}/>
                        <span>Malaysia</span>
                    </div>
                    <div className='pt-1 flex items-center justify-between'>
                    <CiStar size={18}/>
                    <span>4.5</span>
                    </div>
                </div>       
                </div>
            </div>
            {/*George Town*/}
            <div className='pt-4 pl-6'>
                <div className="box-border rounded-md h-75 w-62 p-2 bg-[#ffffff]">
                <img
                    src={require("../assets/georgeTown.jpg")}
                    alt="test"
                    className='pt-2 rounded-md w-44 h-32 object-cover'
                ></img>
                <div className='pt-1 text-l font-bold'>George Town</div>
                <div className='w-44 flex justify-between'>
                    <div className='pt-1 flex items-center justify-between'>
                        <IoLocationOutline size={18}/>
                        <span>Malaysia</span>
                    </div>
                    <div className='pt-1 flex items-center justify-between'>
                    <CiStar size={18}/>
                    <span>5.0</span>
                    </div>
                </div>       
                </div>
            </div>
            </div>
            <div className='pl-4 pt-8 flex items-center justify-between'>
                <span className='text-xl font-bold'>Top Destinations</span>
                <div className='pr-4 flex items-center justify-between'>
                <span className='text-blue-600'>View All</span>
                <MdOutlineKeyboardArrowRight size={18} color='blue'/>
                </div>
            </div>
            {/*Top destinations section*/}
            <div className='pl-2 flex justify-between overflow-x-auto mb-24 pr-4'>
                {/*Heritage Museum*/}
                <div className='pt-2 pl-2 pb-4'>
                    <div className="box-border rounded-md h-75 w-62 p-4 bg-[#ffffff]">
                    <img
                        src={require("../assets/heritageMusuem.jpg")}
                        alt="test"
                        className='pt-2 rounded-md w-80 h-52 object-cover'
                    ></img>
                    <div className='pt-1 text-l font-bold'>Heritage Museum</div>
                    <div className='w-72 pt-1 text-sm'>Immerse yourself in the vibrant experience of Baba Nyonya culture</div>
                    <div className='w-72 flex justify-between'>
                        <div className='pt-1 flex items-center justify-between'>
                            <IoLocationOutline size={18} color='blue'/>
                            <span className='text-blue-600'>Melaka</span>
                        </div>
                        <div className='pt-1 flex items-center justify-between'>
                        <div className='flex justify-evenly'>
                            <FaStar size={18} color='blue'/>
                            <FaStar size={18} color='blue'/>
                            <FaStar size={18} color='blue'/>
                            <FaStar size={18} color='blue'/>
                            <FaStarHalfAlt size={18} color='blue'/>
                        </div>
                        <span className='text-blue-600'>32 reviews</span>
                        </div>
                    </div>            
                    </div>
                </div>
                {/*Mossy Forest*/}
                <div className='pt-2 pl-4 pb-4'>
                    <div className="box-border rounded-md h-75 w-62 p-4 bg-[#ffffff]">
                    <img
                        src={require("../assets/mossyForest.jpg")}
                        alt="test"
                        className='pt-2 rounded-md w-80 h-52 object-cover'
                    ></img>
                    <div className='pt-1 text-l font-bold'>Mossy Forest</div>
                    <div className='w-72 pt-1 text-sm'>A mystical and enchanting high-altitude rainforest renowned for its diverse ecosystem</div>
                    <div className='w-72 flex justify-between'>
                        <div className='pt-1 flex items-center justify-between'>
                            <IoLocationOutline size={18} color='blue'/>
                            <span className='text-blue-600'>Cameron</span>
                        </div>
                        <div className='pt-1 flex items-center justify-between'>
                        <div className='flex justify-evenly'>
                            <FaStar size={18} color='blue'/>
                            <FaStar size={18} color='blue'/>
                            <FaStar size={18} color='blue'/>
                            <FaStar size={18} color='blue'/>
                            <FaStarHalfAlt size={18} color='blue'/>
                        </div>
                        <span className='text-blue-600'>50 reviews</span>
                        </div>
                    </div>     
                    </div>
                </div>
                {/*Langkawi*/}
                <div className='pt-2 pl-4 pb-4'>
                    <div className="box-border rounded-md h-75 w-62 p-4 bg-[#ffffff]">
                        <img
                            src={require("../assets/langkawi.jpg")}
                            alt="test"
                            className='pt-2 rounded-md w-80 h-52 object-cover'
                        ></img>
                        <div className='pt-1 text-l font-bold'>Langkawi</div>
                        <div className='w-72 pt-1 text-sm'>Jewel of Kedah, this island paradise boasts stunning beaches, lush rainforests</div>
                        <div className='w-72 flex justify-between'>
                            <div className='pt-1 flex items-center justify-between'>
                                <IoLocationOutline size={18} color='blue'/>
                                <span className='text-blue-600'>Kedah</span>
                            </div>
                            <div className='pt-1 flex items-center justify-between'>
                            <div className='flex justify-evenly'>
                                <FaStar size={18} color='blue'/>
                                <FaStar size={18} color='blue'/>
                                <FaStar size={18} color='blue'/>
                                <FaStar size={18} color='blue'/>
                                <FaStarHalfAlt size={18} color='blue'/>
                            </div>
                            <span className='text-blue-600'>85 reviews</span>
                            </div>
                        </div>            
                    </div>
                </div>
                {/*Perhentian Islands*/}
                <div className='pt-2 pl-4 pb-4'>
                    <div className="box-border rounded-md h-75 w-62 p-4 bg-[#ffffff]">
                    <img
                        src={require("../assets/perhentianIslands.jpg")}
                        alt="test"
                        className='pt-2 rounded-md w-80 h-52 object-cover'
                    ></img>
                    <div className='pt-1 text-l font-bold'>Perhentian Islands</div>
                    <div className='w-72 pt-1 text-sm'>Renowned for its crystal-clear waters, a heaven for diving and snorkeling enthusiasts</div>
                    <div className='w-72 flex justify-between'>
                        <div className='pt-1 flex items-center justify-between'>
                            <IoLocationOutline size={18} color='blue'/>
                            <span className='text-blue-600'>Terengganu</span>
                        </div>
                        <div className='pt-1 flex items-center justify-between'>
                        <div className='flex justify-evenly'>
                            <FaStar size={18} color='blue'/>
                            <FaStar size={18} color='blue'/>
                            <FaStar size={18} color='blue'/>
                            <FaStar size={18} color='blue'/>
                            <FaStarHalfAlt size={18} color='blue'/>
                        </div>
                        <span className='text-blue-600'>100 reviews</span>
                        </div>
                    </div>     
                    </div>
                </div>
                </div>
                {/*Navigation bar*/}
                <div className="fixed bottom-0 box-border h-20 w-full p-4 bg-[#FFFFFF]">
                <div className='flex items-center justify-between px-16'>
                    <IoMdHome size={35} color='gray'/>
                    <div className='px-28'>
                    <MdExplore size={35} color='gray'/>
                    </div>
                    <div className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <div className='h-16 w-16 rounded-full bg-[#574DEA]'>
                        <div className='flex items-center justify-center'>
                        <IoIosAdd size={70} color='white'/>
                        </div>
                    </div>
                    </div>
                    <div className='px-28'>
                    <MdNotifications size={35} color='gray'/>
                    </div>
                    <FaUser size={30} color='gray'/>
                </div>
                </div>
        </div>
    );
};

export default HomePage;