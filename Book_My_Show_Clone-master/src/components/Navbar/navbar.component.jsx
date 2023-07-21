import React from "react";
import {BiChevronRight, BiSearch, BiMenu, BiChevronDown} from "react-icons/bi"

// Small Devices
const NavSm = () => {
    return (
        <>
            <div className="text-white flex item-center justify-between">
                <div>
                <h3 className="text-xl font-bold">
                    It all Started Here!
                </h3>
                <span className="text-grey-400 text-xs flex items-center">Bengaluru <BiChevronRight />
                </span>
                </div>
                
            <div className="w-8 h-8">
                <BiSearch className="w-full h-full" />
            </div>
            </div>

            
        </>
    );
};


// Medium Devices

const NavMd = () => {
    return (
        <div className="w-full flex item-center gap-3 bg-white px-2 py-3 rounded-md">
            <BiSearch />
            <input type="search" className="w-full bg-transparent border-none focus:outline-none" placeholder="Search for Movies, Event, place, sports and activities" />
        </div>
    );
};


// Large Devices
const NavLg = () => {
    return (
        <>
            <div className="container mx-auto px-4 flex item-center justify-between">
                <div className="flex item-center w-1/2 gap-3">
                    <div className="w-12 h-12">
                        <img src="https://pbs.twimg.com/profile_images/1084718695836987392/pT8dY4C-.jpg" alt=" logo"
                            className="w-full h-full" />
                    </div>
                    <div className="w-full flex item-center gap-3 bg-white px-2 py-3 rounded-md">
            <BiSearch />
                        <input type="search" className="w-full bg-transparent border-none focus:outline-none"
                            placeholder="Search for Movies, Event, place, sports and activities" />
        </div>
                </div>
                
                <div className="flex items-center gap-3">
                <span className="text-bms01-100 text-xs flex items-center hover: text-bms-200 cursor-pointer">Bengaluru <BiChevronDown />
                    </span>
                    <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">Sign In </button>
                    <div className="w-8 h-8 text-white">
                    <BiMenu className="w-full h-full"/>
                    </div>
                </div>
            </div>
        </>
    );
};


const Navbar = () => {
    return <>
        <nav className="bg-bms01-600 p-4">
            <div className="md:hidden">
                <NavSm />
            </div>
            <div className="hidden md:flex lg:hidden">
                <NavMd />
            </div>
            <div className="hidden lg:flex">
                <NavLg />
            </div>
        </nav>
    </>;

};

export default Navbar;