import React from "react";
import { RiPinDistanceLine } from "react-icons/ri";
import { MdArrowBackIosNew, MdOutlineShowChart } from "react-icons/md";
import { MdOutlineAccessTime } from "react-icons/md";
import { MdOutlineWatch } from "react-icons/md";

const CityPage:React.FC = () =>{
    return(
        <div className="h-screen w-screen overflow-auto bg-[#F6F6F6]">
            <div className="relative w-full h-56">
                <img
                    src={require("../assets/atkinsonClock.jpg")}
                    alt="test"
                    className='object-cover w-full h-full'
                ></img>
                {/*Back button*/}
                <div className="absolute inset-x-0 w-12 py-1 pt-1 pl-2 pr-2 bottom-44">
                    <div className="p-1 bg-white rounded-full">
                        <MdArrowBackIosNew size={22} className="items-center"/>
                    </div>
                </div>
                {/*Description*/}
                <div className="absolute inset-x-0 bottom-0 flex flex-col justify-between w-full py-1 pt-1 pl-2 bg-white/60">
                    <span className="text-sm font-bold">Historical Kota Kinabalu</span>
                    <span className="text-xs">Embark on a historical journey through Kota Kinabalu. This route unveils the captivating story of Kota Kinabalu's transformation.</span>
                </div>
                {/*Highlights*/}
                <div className="pt-2 pl-2">
                    <span className="text-sm font-bold ">Highlights</span>
                </div>
                <div className="flex justify-around">
                    <div className="flex flex-col pr-5">
                        <div className="flex items-center pt-2 justify-normal">
                            <RiPinDistanceLine size={18}/>
                            <div className="flex flex-col pt-2 pl-2 pr-2 text-xs">
                                    <span className="font-bold">1.5KM</span>
                                    <span>Walking distance</span>
                            </div>
                        </div>
                        <div className="flex items-center pt-2 justify-normal">
                            <MdOutlineShowChart size={18}/>
                            <div className="flex flex-col pt-2 pl-2 pr-2 text-xs">
                                <span className="font-bold">MODERATE</span>
                                <span>Difficulty level</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="flex items-center pt-2 pl-2 justify-normal">
                            <MdOutlineAccessTime size={18}/>
                            <div className="flex flex-col pt-2 pl-2 pr-2 text-xs">
                                <span className="font-bold">30 MINS</span>
                                <span>Duration</span>
                            </div>
                        </div>
                        
                        <div className="flex items-center pt-2 pl-2 justify-normal">
                            <MdOutlineWatch size={18}/>
                            <div className="flex flex-col pt-2 pl-2 pr-2 text-xs">
                                <span className="font-bold">8am - 10am</span>
                                <span>Best Time to walk</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Map*/}
                <div className="pt-2 pl-2">
                    <span className="text-sm font-bold">Map</span>
                </div>
                {/*Integrated map here*/}
                <div className="flex justify-center pt-20">
                    <button className="px-1 py-1 text-sm text-white bg-[#574DEA] rounded hover:bg-blue-700">
                        View Reviews
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CityPage