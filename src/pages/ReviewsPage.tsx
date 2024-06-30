import React from "react";
import { MdArrowBackIosNew, MdStarRate } from "react-icons/md";
import { MdStarHalf } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";

const ReviewPage:React.FC = () =>{
    return(
        <div className="h-screen w-screen overflow-auto bg-[#F6F6F6]">
            {/*Header section*/}
            <div className="flex items-center justify-normal bg-[#574DEA] h-12">
                <div className="w-12 py-1 pt-1 pl-2 pr-2 bottom-44">
                    <div className="p-1 bg-white rounded-full">
                        <MdArrowBackIosNew size={22} className="items-center"/>
                    </div>
                </div>
                <span className="pl-2 text-sm font-bold text-white">Reviews</span>
            </div>
            
            {/*Filter section*/}
            <div className="flex justify-around pt-2 pl-2">
                <div className="flex items-center justify-center w-20 h-7 bg-[#948DFF]/40 border border-[#948DFF] rounded">
                    <span className="text-center text-xs font-bold text-[#574DEA]">All</span>
                </div> 
                <div className="flex items-center justify-center w-20 h-7 bg-white border border-[#838383] rounded">
                    <span className="text-xs font-bold text-center text-[#838383]">Star</span>
                    <MdOutlineKeyboardArrowDown size={18} color="#838383"/>
                </div>  
                <div className="flex items-center justify-center w-20 h-7 bg-white border border-[#838383] rounded">
                    <span className="text-xs font-bold text-center text-[#838383]">Date</span>
                    <MdOutlineKeyboardArrowDown size={18} color="#838383"/>
                </div>  
            </div>
           
            {/*Kristin Watson*/}
            <div>
                <div className="flex items-center pt-4 pl-4 justify-normal">
                    <img 
                        src={require("../assets/atkinsonClock.jpg")}
                        alt="profile" 
                        className="object-cover w-10 h-10 rounded-full">
                    </img>
                    <div className="flex flex-col">
                        <span className="pl-2 text-sm font-bold">Kristin Watson</span>
                        <div className="flex items-center justify-normal">
                            <div className="flex pt-1 pl-2 justify-normal">
                                <MdStarRate size={16} color="#574DEA"/>
                                <MdStarRate size={16} color="#574DEA"/> 
                                <MdStarRate size={16} color="#574DEA"/> 
                                <MdStarRate size={16} color="#574DEA"/>  
                                <MdStarHalf size={16} color="#574DEA"/>
                            </div>
                            <span className="pl-6 text-xs">14 July, 2023</span>
                        </div>
                    </div>
                </div>       
                <div className="w-11/12 pt-2 pb-3 pl-4">
                    <span className="pt-2 text-xs ">
                        The Atkinson Clock Tower is a great starting point, and it was fascinating to learn about its history. The Sunday market on Gaya Street was a sensory overload in the best way possible - so many delicious local snacks and beautiful handicrafts! Bargaining for souvenirs was a fun experience. Pasar Besar was a cool contrast, offering fresh produce and a glimpse into daily life for locals. Highly recommend comfortable shoes and bringing cash for all the amazing eats!  
                    </span>
                </div>
            </div>

            <div className="bg-[#838383] border"></div>

            {/*Floyd Miles*/}
            <div>
                <div className="flex items-center pt-4 pl-4 justify-normal">
                    <img 
                        src={require("../assets/atkinsonClock.jpg")}
                        alt="profile" 
                        className="object-cover w-10 h-10 rounded-full">
                    </img>
                    <div className="flex flex-col">
                        <span className="pl-2 text-sm font-bold">Floyd Miles</span>
                        <div className="flex items-center justify-normal">
                            <div className="flex pt-1 pl-2 justify-normal">
                                <MdStarRate size={16} color="#574DEA"/>
                                <MdStarRate size={16} color="#574DEA"/> 
                                <MdStarRate size={16} color="#574DEA"/> 
                                <MdStarRate size={16} color="#574DEA"/>  
                                <MdStarRate size={16} color="#574DEA"/>  
                            </div>
                            <span className="pl-6 text-xs">5 May, 2024</span>
                        </div>
                    </div>
                </div>       
                <div className="w-11/12 pt-2 pb-3 pl-4">
                    <span className="pt-2 text-xs ">
                    This route is every foodie's dream! From the fresh coconut water at the Sunday market to the local delicacies at Pasar Besar, I was in heaven. Don't miss the chance to try the satay and the fresh tropical fruits. The historical aspect was a nice bonus, and the Clock Tower is a great photo opportunity.
                    </span>
                </div>
            </div>

            <div className="bg-[#838383] border"></div>

            {/*David Webb*/}
            <div>
                <div className="flex items-center pt-4 pl-4 justify-normal">
                    <img 
                        src={require("../assets/atkinsonClock.jpg")}
                        alt="profile" 
                        className="object-cover w-10 h-10 rounded-full">
                    </img>
                    <div className="flex flex-col">
                        <span className="pl-2 text-sm font-bold">David Webb</span>
                        <div className="flex items-center justify-normal">
                            <div className="flex pt-1 pl-2 justify-normal">
                                <MdStarRate size={16} color="#574DEA"/>
                                <MdStarRate size={16} color="#574DEA"/> 
                                <MdStarRate size={16} color="#574DEA"/> 
                                <MdStarRate size={16} color="#574DEA"/>  
                                <MdStarRate size={16} color="#574DEA"/>  
                            </div>
                            <span className="pl-6 text-xs">11 June, 2024</span>
                        </div>
                    </div>
                </div>       
                <div className="w-11/12 pt-2 pb-2 pl-4">
                    <span className="pt-2 text-xs ">
                    This walk gave a good historical intro to Kota Kinabalu. The Clock Tower is beautiful, and the Sunday market was vibrant and lively. However, Pasar Besar felt a bit overwhelming with the crowds and strong fish smells. It might be better for experienced travelers who enjoy a truly local experience. Still, a worthwhile walk overall!
                    </span>
                </div>
            </div>
            
            <div className="flex justify-center">
                <span className="pr-2 font-bold text-xs text-[#574DEA]">View All</span>
                <GoArrowRight size={18} color="#574DEA"/>
            </div>
        </div>
    )
}

export default ReviewPage