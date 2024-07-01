import React from "react";
import { FaUser } from "react-icons/fa";
import { IoIosAdd, IoMdHome } from "react-icons/io";
import {MdExplore, MdNotifications, MdOutlineFavoriteBorder } from "react-icons/md";
import { IoMdThumbsUp } from "react-icons/io";

const RoutesPage : React.FC = () => {
    return(
        <div className='h-screen w-screen overflow-auto bg-[#F6F6F6]'>
            {/*Header*/}
            <div className="relative w-full h-48">
                <img 
                    src={require("../assets/mountainVector.jpg")}
                    alt="mountain vector"
                    className="object-cover w-full h-full" 
                />
                <div className="absolute inset-x-0 flex flex-col justify-between w-full py-1 pt-1 pl-2 top-3">
                    <span className="font-bold text-black text-md text-nowrap">Discover</span>
                    <span className="font-bold text-black text-md text-nowrap">New World</span>
                </div>
            </div>
            {/*Filter section*/}
            <div className="flex justify-between pt-2 pl-2 overflow-x-auto">
                <div className="pb-4 pl-2">
                    <div className="flex justify-center items-center w-28 h-7 bg-[#948DFF]/40 border border-[#948DFF] rounded">
                        <span className="text-center text-xs font-bold text-[#574DEA]">Featured Routes</span>
                    </div> 
                </div>
                <div className="pb-4 pl-2">
                    <div className="flex items-center justify-center w-28 h-7 bg-white border border-[#838383] rounded">
                        <span className="text-xs font-bold text-center text-[#838383]">Themed Routes</span>
                    </div>  
                </div>
                <div className="pb-4 pl-2 pr-2">
                    <div className="flex items-center justify-center w-36 h-7 bg-white border border-[#838383] rounded">
                        <span className="text-xs font-bold text-center text-[#838383]">User Created Routes</span>
                    </div>  
                </div>
            </div>

             {/*Results*/}
             <div className="flex flex-col">
                <span className="text-xs">Result: 42 routes</span>
                <div className="pb-20 overflow-x-auto overflow-y-auto">
                    <div className="flex justify-between pl-4">
                        <div className="pb-14">
                            <div className="relative w-40 pt-2 h-28">
                                <img 
                                    src= {require("../assets/atkinsonClock.jpg")} 
                                    alt="clock" 
                                    className="object-cover w-full h-full rounded-sm"
                                />
                                <div className="absolute inset-x-0 w-12 py-1 pt-1 pl-2 pr-2 top-2 left-28">
                                    <div className="items-center justify-center p-1 bg-white rounded-full">
                                        <MdOutlineFavoriteBorder size={22} color="#FF0000"/>
                                    </div>
                                </div>
                                <div className="flex flex-col h-12 pt-1 pl-3 bg-white rounded-sm justify-normal">
                                    <span className="text-xs font-bold">Historical Kota Kinabalu</span>
                                    <div className="flex items-center pt-1 justify-normal">
                                        <IoMdThumbsUp size={14} color="#574DEA"/>
                                        <span className="text-xs font-bold text-[#574DEA]">122</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between pl-4">
                            <div className="relative w-40 pt-2 h-28">
                                <img 
                                    src= {require("../assets/atkinsonClock.jpg")} 
                                    alt="clock" 
                                    className="object-cover w-full h-full rounded-sm"
                                />
                                <div className="absolute inset-x-0 w-12 py-1 pt-1 pl-2 pr-2 top-2 left-28">
                                    <div className="items-center justify-center p-1 bg-white rounded-full">
                                        <MdOutlineFavoriteBorder size={22} color="#FF0000"/>
                                    </div>
                                </div>
                                <div className="flex flex-col h-12 pt-1 pl-3 bg-white rounded-sm justify-normal">
                                    <span className="text-xs font-bold">Kinabalu Nature Explorer</span>
                                    <div className="flex items-center pt-1 justify-normal">
                                        <IoMdThumbsUp size={14} color="#574DEA"/>
                                        <span className="text-xs font-bold text-[#574DEA]">200</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between pl-4">
                        <div className="pb-14">
                            <div className="relative w-40 pt-2 h-28">
                                <img 
                                    src= {require("../assets/atkinsonClock.jpg")} 
                                    alt="clock" 
                                    className="object-cover w-full h-full rounded-sm"
                                />
                                <div className="absolute inset-x-0 w-12 py-1 pt-1 pl-2 pr-2 top-2 left-28">
                                    <div className="items-center justify-center p-1 bg-white rounded-full">
                                        <MdOutlineFavoriteBorder size={22} color="#FF0000"/>
                                    </div>
                                </div>
                                <div className="flex flex-col h-12 pt-1 pl-3 bg-white rounded-sm justify-normal">
                                    <span className="text-xs font-bold">Kinabalu Cultural Delights</span>
                                    <div className="flex items-center pt-1 justify-normal">
                                        <IoMdThumbsUp size={14} color="#574DEA"/>
                                        <span className="text-xs font-bold text-[#574DEA]">80</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pb-4 pl-4 pr-4">
                            <div className="relative w-40 pt-2 h-28">
                                <img 
                                    src= {require("../assets/atkinsonClock.jpg")} 
                                    alt="clock" 
                                    className="object-cover w-full h-full rounded-sm"
                                />
                                <div className="absolute inset-x-0 w-12 py-1 pt-1 pl-2 pr-2 top-2 left-28">
                                    <div className="items-center justify-center p-1 bg-white rounded-full">
                                        <MdOutlineFavoriteBorder size={22} color="#FF0000"/>
                                    </div>
                                </div>
                                <div className="flex flex-col h-12 pt-1 pl-3 bg-white rounded-sm justify-normal">
                                    <span className="text-xs font-bold">Penang Street Art Hunt</span>
                                    <div className="flex items-center pt-1 justify-normal">
                                        <IoMdThumbsUp size={14} color="#574DEA"/>
                                        <span className="text-xs font-bold text-[#574DEA]">95</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between pl-4">
                        <div className="pb-14">
                            <div className="relative w-40 pt-2 h-28">
                                <img 
                                    src= {require("../assets/atkinsonClock.jpg")} 
                                    alt="clock" 
                                    className="object-cover w-full h-full rounded-sm"
                                />
                                <div className="absolute inset-x-0 w-12 py-1 pt-1 pl-2 pr-2 top-2 left-28">
                                    <div className="items-center justify-center p-1 bg-white rounded-full">
                                        <MdOutlineFavoriteBorder size={22} color="#FF0000"/>
                                    </div>
                                </div>
                                <div className="flex flex-col h-12 pt-1 pl-3 bg-white rounded-sm justify-normal">
                                    <span className="text-xs font-bold">Kinabalu Cultural Delights</span>
                                    <div className="flex items-center pt-1 justify-normal">
                                        <IoMdThumbsUp size={14} color="#574DEA"/>
                                        <span className="text-xs font-bold text-[#574DEA]">80</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pb-4 pl-4 pr-4">
                            <div className="relative w-40 pt-2 h-28">
                                <img 
                                    src= {require("../assets/atkinsonClock.jpg")} 
                                    alt="clock" 
                                    className="object-cover w-full h-full rounded-sm"
                                />
                                <div className="absolute inset-x-0 w-12 py-1 pt-1 pl-2 pr-2 top-2 left-28">
                                    <div className="items-center justify-center p-1 bg-white rounded-full">
                                        <MdOutlineFavoriteBorder size={22} color="#FF0000"/>
                                    </div>
                                </div>
                                <div className="flex flex-col h-12 pt-1 pl-3 bg-white rounded-sm justify-normal">
                                    <span className="text-xs font-bold">Penang Street Art Hunt</span>
                                    <div className="flex items-center pt-1 justify-normal">
                                        <IoMdThumbsUp size={14} color="#574DEA"/>
                                        <span className="text-xs font-bold text-[#574DEA]">95</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   


            {/*Navigation*/}
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
    )
}

export default RoutesPage;