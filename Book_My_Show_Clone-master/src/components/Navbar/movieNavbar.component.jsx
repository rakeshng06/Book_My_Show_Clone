import React, {useContext}  from "react";
import { BiChevronRight, BiSearch, BiMenu, BiChevronDown, BiShareAlt } from "react-icons/bi"
import { MovieContext } from "../../context/movie.context";


// Small Devices
const NavSm = () => {
    const {movie} = useContext(MovieContext)
    return (
        <>
            <div className="text-white flex item-center justify-between">
                <div>
                <h3 className="text-xl font-bold">
                   {movie.original_title}
                </h3>
                </div>
                
            <div className="w-8 h-8">
                <BiShareAlt className="w-full h-full" />
            </div>
            </div>

            
        </>
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


const MovieNavbar = () => {
    return <>
        <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg 
        lg:relative lg:bg-bms01-600 p-4">
            <div className="md:hidden">
                <NavSm />
            </div>
            <div className="hidden md:block lg:hidden">
            <NavSm />
            </div>
            <div className="hidden lg:flex">
                <NavLg />
            </div>
        </nav>
    </>;

};

export default MovieNavbar;