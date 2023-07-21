import React, { useContext, useState } from 'react'
import { MovieContext } from '../../context/movie.context'
import PaymentModal from '../PaymentModel/payment.component';


const MovieInfo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);

    const { movie } = useContext(MovieContext);

    // optional chaining method 
    const genres = movie.genres?.map(({ name }) => name).join(", ")
  
    const rentMovies = () => {
        setIsOpen(true);
        setPrice(149);
    };

    const buyMovies = () => {
        setIsOpen(true);
        setPrice(599);
    };
    
    return (
        <>
            <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
            <div className="flex flex-col gap-3 lg:gap-8">
                <div className="flex item-center md:px-4 gap-3 ">
                    <div className="w-40 h-8">
                        <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png" alt="Premier"
                        className="w-full h-full"
                        />
                    </div>
                    <span className="bg-bms01-700 p-1 text-xs text-white rounded-md">Streaming Now</span>
                </div>
                
                
                <h1 className=" lg:text-5xl text-white font-bold hidden lg:block">{movie.original_title}</h1>
                
                <div className ="flex flex-col-reverse gap-5 lg:flex-col">
                    
                <div className="text-white font-light md:px-4 flex flex-col gap-2">
                    <h4>4k &bull; {movie.original_language} </h4>
                    <h4>{(movie.runtime / 60 ).toFixed(2)} hr &bull; {genres}; 13+ </h4>
                    </div>
                
                
                <div className="flex items-center gap-3 md:px-4 md:w-screen lg:w-full">
                        <button onClick={rentMovies}
                            className="bg-red-500 w-full py-3 text-white rounded-lg font-semibold">
                    Rent ₹ 149
                    </button>

                        <button onClick={buyMovies}
                            className="bg-red-500 w-full py-3 text-white rounded-lg font-semibold">
                    Buy ₹ 599
                    </button>

                </div>

               </div>
            
            
            </div>
        </>
    )
}

export default MovieInfo
