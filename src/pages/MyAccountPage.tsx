import React from "react";
import { FaUser } from "react-icons/fa";
import { IoIosAdd, IoMdHome } from "react-icons/io";
import { MdExplore, MdKeyboardArrowRight, MdNotifications, MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const MyAccountPage: React.FC = () => {
    return(
        <div className='h-screen w-screen overflow-auto bg-[#F6F6F6]'>
            {/*header section*/}
            <div className="bg-[#574DEA] h-44 rounded-b-xl">
                <div className="flex justify-between pt-6 pl-4 pr-4">
                    <span className="text-sm font-bold text-white">My Account</span>
                    <span className="text-xs text-white">Edit</span>
                </div>
                <div className="flex justify-center pt-2">
                    <img 
                        src={require("../assets/atkinsonClock.jpg")}
                        alt="profile" 
                        className="object-cover w-12 h-12 rounded-full">
                    </img>
                </div>
                <div className="flex flex-col justify-center pt-4">
                    <span className="text-xs font-bold text-center text-white"> Sam Moreira</span>
                    <div className="flex justify-center pt-1">
                        <span className="pr-2 text-xs text-center text-white">+60123456789</span>
                        <div className="w-px h-4 bg-white"></div>
                        <span className="pl-2 text-xs text-center text-white">sam@gmail.com</span>
                    </div>
                </div>
            </div>
            {/*Completed walks*/}
            <div className="flex items-center justify-between pt-2 pl-2">
                <span className="text-sm font-bold">Completed Walks</span>
                <div className="flex pr-2 justify-normal">
                    <span className="text-xs text-[#574DEA]">View All</span>
                    <MdKeyboardArrowRight size={18} color="#574DEA"/>
                </div>
            </div>
            <div className='flex justify-between pb-3 pr-4 mb-6 overflow-x-auto'>
                {/*Penang*/}
                <div className="w-full pt-4 pb-1 pl-4">
                        <img 
                            src={require("../assets/penangStreetArt.jpg")}
                            alt=""
                            className="object-cover w-40 rounded-t-sm h-28"
                        />
                    <div className="w-40 h-12 bg-white rounded-b-sm">
                        <span className="pl-1 text-xs font-bold">Penang Street Art Hunt</span>
                        <div className="flex justify-between pl-1 pr-1">
                            <span className="text-[9px]">Day of completion</span>
                            <span className="text-[9px] text-[#574DEA] font-bold">11 June 2024</span>
                        </div>
                    </div>
                </div>
                {/*Kinabalu*/}
                <div className="w-full pt-4 pb-1 pl-4">
                        <img 
                            src={require("../assets/mountKinabalu.jpg")}
                            alt=""
                            className="object-cover w-40 rounded-t-sm h-28"
                        />
                    <div className="w-40 h-12 bg-white rounded-b-sm">
                        <span className="pl-1 text-xs font-bold">Kinabalu Nature Explorer</span>
                        <div className="flex justify-between pl-1 pr-1">
                            <span className="text-[9px]">Day of completion</span>
                            <span className="text-[9px] text-[#574DEA] font-bold">20 August 2024</span>
                        </div>
                    </div>
                </div>
                {/*KL*/}
                <div className="w-full pt-4 pb-1 pl-4">
                        <img 
                            src={require("../assets/KLHiddenWaterfall.jpg")}
                            alt=""
                            className="object-cover w-40 rounded-t-sm h-28"
                        />
                    <div className="w-40 h-12 bg-white rounded-b-sm">
                        <span className="pl-1 text-xs font-bold">KL Hidden Waterfall</span>
                        <div className="flex justify-between pl-1 pr-1">
                            <span className="text-[9px]">Day of completion</span>
                            <span className="text-[9px] text-[#574DEA] font-bold">22 January 2025</span>
                        </div>
                    </div>
                </div>
            </div>
            {/*Settings*/}
            <div className="flex flex-col overflow-auto mb-28">
                <div className="pl-4">
                    <div className="relative flex p-2 bg-white rounded-sm justify-normal w-72">
                        <div className="absolute inset-x-0 flex items-center justify-center w-12 h-12 py-1 pt-1 pl-2 pr-2 top-2 right-16">
                            <div className="flex items-center justify-center p-1.5 bg-[#574DEA] rounded-full">
                                <MdOutlineFavorite size={20} color="#FFFFFF"/>
                            </div>
                        </div>
                        <div className="flex flex-col pl-14">
                            <span className="text-sm font-bold">Saved Routes</span>
                            <span className="text-xs">View all your saved routes</span>
                        </div>
                        <div className="pl-10">
                            <MdKeyboardArrowRight size={40} color="#574DEA"/>
                        </div>
                    </div>
                </div>
                
                <div className="pt-4 pl-4">
                    <div className="relative flex p-2 bg-white rounded-sm justify-normal w-72">
                        <div className="absolute inset-x-0 flex items-center justify-center w-12 h-12 py-1 pt-1 pl-2 pr-2 top-2 right-16">
                            <div className="items-center justify-center p-1.5 bg-[#EA4335] rounded-full">
                                <MdSettings size={22} color="#FFFFFF"/>
                            </div>
                        </div>
                        <div className="flex flex-col pl-14">
                            <span className="text-sm font-bold">Settings</span>
                            <span className="text-xs">Adjust system settings</span>
                        </div>
                        <div className="pl-14">
                            <MdKeyboardArrowRight size={40} color="#574DEA"/>
                        </div>
                    </div>
                </div>

                <div className="pt-4 pb-4 pl-4">
                    <div className="relative flex p-2 bg-white rounded-sm justify-normal w-72">
                        <div className="absolute inset-x-0 w-12 py-1 pt-1 pl-2 pr-2 top-2 right-16">
                            <div className="flex items-center justify-center p-1 bg-[#574DEA] rounded-full">
                                <AiOutlineQuestionCircle size={22} color="#FFFFFF"/>
                            </div>
                        </div>
                        <div className="flex flex-col pl-14">
                            <span className="text-sm font-bold">FAQ</span>
                            <span className="text-xs text-nowrap">View FAQ here</span>
                        </div>
                        <div className="pl-24">
                            <MdKeyboardArrowRight size={40} color="#574DEA"/>
                        </div>
                    </div>
                </div>
            </div>
            {/*navigation*/}
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

export default MyAccountPage;