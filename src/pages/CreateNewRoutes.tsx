import React from "react";
import { MdOutlineSearch } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { RiArrowUpDownLine } from "react-icons/ri";

const CreateNewRoutesPage: React.FC = () => {
    return(
        <div className='h-screen w-screen overflow-auto bg-[#F6F6F6]'>
            <div className="relative w-full h-52">
                <img
                    src={require("../assets/adventureVector.jpg")}
                    alt=""
                    className=""
                />
                <div className="absolute inset-x-0 flex flex-col pl-4 top-10">
                    <span className="text-sm font-bold text-white">Create Your</span>
                    <span className="text-sm font-bold text-white">City Walk Adventure</span>
                </div>
            </div>
            {/*Search Route*/}
            <div className="pt-2 pl-2">
                <span className="text-sm font-bold">Route Name</span>
                <div className='pt-2 pl-0'>
                    <div className="items-center justify-center w-9/12 p-1 bg-white rounded-md w-18">
                        <span className='pl-2 text-sm text-center text-gray-400'>Enter your route name here</span>
                    </div>
                </div>
            </div>
            {/*Search the maps*/}
            <div className='pt-6 pl-2'>
                <div className="flex items-center justify-center p-1 bg-indigo-600 rounded-full w-44">
                    <MdOutlineSearch size={18} color="white"/>
                    <span className='pl-2 text-sm text-white'>Search the Maps</span>
                </div>
            </div>
            {/*Map section*/}
            {/*Add destination*/}
            <div className="flex">
                <div className="flex flex-col justify-between pt-6 pl-2">
                    <div className="w-4 h-4 border border-black rounded-full"></div>
                    <SlLocationPin size={18} color="#FF0000"/>
                    <IoAddCircleOutline size={18}/>
                </div>
                <div className="flex flex-col pl-3">
                    <div className='pt-6'>
                        <div className="flex items-center p-1 bg-white rounded-md w-60 justify-normal">
                            <span className='pl-2 text-xs text-gray-400'>Choose starting point or click on the map</span>
                        </div>
                    </div>
                    <div className='pt-4'>
                        <div className="flex items-center p-1 bg-white rounded-md justify-normal w-60">
                            <span className='pl-2 text-xs text-gray-400'>Choose destination or click on the map</span>
                        </div>
                    </div>
                    <div className="pt-3">
                        <span className="pl-2 text-xs text-gray-400">Add destination</span>
                    </div>
                </div>
                <div className="justify-center pt-12 pl-2">
                    <RiArrowUpDownLine size={18}/>
                </div>
            </div>
            <div className="flex justify-center pt-8">
                    <button className="px-1 py-1 text-sm text-white bg-[#574DEA] rounded hover:bg-blue-700">
                        Create Routes
                    </button>
            </div>
        </div>
    );
};

export default CreateNewRoutesPage;