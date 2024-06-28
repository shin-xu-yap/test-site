import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md"
import { MdOutlineLocationOn } from "react-icons/md"
import { MdOutlineStarOutline } from "react-icons/md";
import { MdOutlineMap } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const CityPage:React.FC = () =>{
    return(
        <div className="h-screen w-screen overflow-auto bg-[#F6F6F6]">
            {/*Image Section*/}
            <div className="relative w-full h-52">
                <img 
                    src={require("../assets/kotaKinabaluCity.jpg")} 
                    alt="test"
                    className="object-cover w-full h-full" 
                />
                <div className="absolute inset-x-0 flex justify-between py-1 pt-1 pl-2 pr-2 bottom-40">
                    <div className="p-1.5 bg-white rounded-full">
                        <MdArrowBackIosNew size={18} className="items-center"/>
                    </div>
                    <div className="p-1.5 bg-white rounded-full">
                        <MdOutlineFavoriteBorder size={18} className="items-center"/>
                    </div>
                </div>
                <div className="absolute inset-x-0 flex flex-col justify-between w-full py-1 pt-1 pl-2 bg-white/60 bottom-24">
                    <span className="font-bold text-white text-md text-nowrap">Explore Kota Kinabalu:</span>
                    <span className="font-bold text-white text-md text-nowrap">Your Borneo Adventure starts here</span>
                </div>
                {/*Info section*/}
                <div className="absolute inset-x-0 w-full h-auto pb-6 bg-white rounded-t-lg top-44">
                    {/*Header*/}
                    <div className="flex items-center justify-between pt-4">
                        <span className="pl-4 text-base font-bold ">Kota Kinabalu</span>
                        <div className="flex items-center pr-1">
                            <MdOutlineStarOutline size={16} className="text-gray-500"/>
                            <span className="pl-1 pr-4 text-xs text-gray-500">4.7(100 reviews)</span>
                        </div>
                    </div>
                    <div className="flex justify-between pt-2">
                        <div className="flex items-center pl-3">
                            <MdOutlineLocationOn size={16} className="text-gray-500"/>
                            <span className="pl-1 text-xs text-gray-500">Malaysia</span>
                        </div>
                        <div className="flex items-center ">
                            <MdOutlineMap size={16} className="text-green-500"/>
                            <span className="pl-1 pr-6 text-xs text-green-500">Map Directions</span>
                        </div>
                    </div>
                    {/*Featured routes*/}
                    <div className="flex items-center justify-between pt-6">
                        <span className="pl-4 text-sm font-bold">Featured routes</span>
                        <div className="flex items-center pr-6">
                            <span className="pr-2 text-xs text-[#574DEA]">View All</span>
                            <MdArrowForwardIos size={14} className="text-[#574DEA]"/>
                        </div>
                    </div>
                    {/*Routes*/}
                    <div className="pl-4">
                        {/*Historical Kota Kinabalu*/}
                        <div className="relative flex pt-2 justify-normal">
                            <img
                                src={require("../assets/atkinsonClock.jpg")}
                                alt="test"
                                className='object-cover w-24 pt-2 rounded-md h-28'
                            ></img>
                            <div className="flex flex-col">
                                <span className="pt-2 pl-2 text-sm font-bold">
                                    Historical Kota Kinabalu
                                </span>
                                <span className="pt-1 pl-2 text-xs">
                                    Walk through time
                                </span>
                                <span className="pt-1 pl-2 text-xs">
                                    Uncover the city's past
                                </span>
                                <span className="pt-1 pl-2 text-xs">
                                    A journey through heritage
                                </span>            
                            </div>
                            <button type="button" className="absolute top-24 right-2 w-14 h-6 rounded-sm text-white text-xs font-bold bg-[#574DEA] hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">Explore</button>
                        </div>
                        {/*Cultural Delights*/}
                        <div className="relative flex pt-2 justify-normal">
                            <img
                                src={require("../assets/longHouse.jpg")}
                                alt="test"
                                className='object-cover w-24 pt-2 rounded-md h-28'
                            ></img>
                            <div className="flex flex-col">
                                <span className="pt-2 pl-2 text-sm font-bold">
                                    Cultural Delights
                                </span>
                                <span className="pt-1 pl-2 text-xs">
                                    A feast for the senses
                                </span>
                                <span className="pt-1 pl-2 text-xs">
                                    Explore local traditions
                                </span>
                                <span className="pt-1 pl-2 text-xs">
                                    Unveil Kota Kinabalu's soul
                                </span>            
                            </div>
                            <button type="button" className="absolute top-24 right-2 w-14 h-6 rounded-sm text-white text-xs font-bold bg-[#574DEA] hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">Explore</button>
                        </div>
                        {/*Kinabalu Nature Explorer*/}
                        <div className="relative flex pt-2 justify-normal">
                            <img
                                src={require("../assets/mountKinabalu.jpg")}
                                alt="test"
                                className='object-cover w-24 pt-2 rounded-md h-28'
                            ></img>
                            <div className="flex flex-col">
                                <span className="pt-2 pl-2 text-sm font-bold">
                                    Kinabalu Nature Explorer
                                </span>
                                <span className="pt-1 pl-2 text-xs">
                                    Trek through paradise
                                </span>
                                <span className="pt-1 pl-2 text-xs">
                                    Escape to the wild
                                </span>
                                <span className="pt-1 pl-2 text-xs">
                                    Commune with nature
                                </span>            
                            </div>
                            <button type="button" className="absolute top-24 right-2 w-14 h-6 rounded-sm text-white text-xs font-bold bg-[#574DEA] hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">Explore</button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CityPage;