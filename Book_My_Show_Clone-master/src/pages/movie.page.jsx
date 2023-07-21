import React, {useContext, useState, useEffect } from 'react';
import MovieHero from '../components/MovieHero/MovieHero.component';
import {FaCcVisa, FaApplePay } from "react-icons/fa"
import Cast from '../components/Cast/Cast.component';
import PosterSlider from "../components/PosterSlider/PosterSlider.component";


import TempPosters from "../config/TempPosters.config";
import { MovieContext } from '../context/movie.context';
import axios from 'axios';
import { useParams } from 'react-router';
import Slider from 'react-slick';

const Movie = () => {
    const { id } = useParams();
    const { movie } = useContext(MovieContext);
    const [cast, setCast] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [recommended, setRecommended] = useState([]);
    
    useEffect(() => {
        const requestCast = async () => {
            const getCast = await axios.get(`/movie/${id}/credits`);
            setCast(getCast.data.cast);
        };
        requestCast();
    }, [id]);


    // use effect from home page
    useEffect(() => {
        const requestSimilarMovies = async () => {
            const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
            setSimilarMovies(getSimilarMovies.data.results);
        };
        requestSimilarMovies();
    }, [id]);

    useEffect(() => {
        const requestRecommendedMovies = async () => {
            const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations`);
            setRecommended(getRecommendedMovies.data.results);
        };
        requestRecommendedMovies();
    }, [id]);
    
    // home page end

    const settings = {
        Infinity: false,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        InitialSlide: 0,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToScroll: 2,
                slidesToShow: 3,
                Infinite: true,
            },
            breakpoint: 600,
            settings: {
                slidesToScroll: 2,
                slidesToShow: 2,
                InitialSlide: 2,
            },
            breakpoint: 480,
            settings: {
                slidesToScroll: 2,
                slidesToShow: 3,
            },
        }],
    };
    
    const settingsCast = {
        Infinity: false,
        autoplay: false,
        slidesToShow: 6,
        slidesToScroll: 4,
        InitialSlide: 0,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToScroll: 3,
                slidesToShow: 4,
                Infinite: true,
            },
            breakpoint: 600,
            settings: {
                slidesToScroll: 2,
                slidesToShow: 3,
                InitialSlide: 2,
            },
            breakpoint: 480,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 2,
            },
        }],
    };

    return (
        <>
            <MovieHero />
            <div className="my-12 container  px-4 lg:ml-20 lg:w-2/3">
                <div className="flex flex-col item-start gap-3">
                <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
                    <p>
                       {movie.overview}
                    </p>
                </div>
                
                <div className="my-8" >
                <hr  />
                </div>

                <div className="my-8" >
                <h2 className="text-gray-800 font-bold text-2xl mb-3">Applicable Offers </h2>
                
                
                <div className="flex flex-col gap-3 lg:flex-row">
                <div className="flex items-start gap-2 bg-yellow-100 px-3 py-3 border-yellow-400 border-dashed border-2" >
                    <div className="w-8 h-8"><FaCcVisa className="w-full h-full" /></div>
                    <div className="flex flex-col item-start  ">
                        <h3 className="Text-gray-700 text-xl font-bold">Visa Stream Offer</h3>
                        <p className="Text-gray-600 text-sm ">GEt 50% off up to INR 150 on all VISA Cards on Book My Show</p>
                    </div>
                </div>

                <div className="flex items-start gap-2 bg-yellow-100 px-3 py-3 border-yellow-400 border-dashed border-2" >
                    <div className="w-8 h-8"><FaApplePay className="w-full h-full" /></div>
                    <div className="flex flex-col item-start  ">
                        <h3 className="Text-gray-700 text-xl font-bold">Filmy Pay </h3>
                        <p className="Text-gray-600 text-sm ">GEt 75% off up to INR 150 on all apple pay on Book My Show</p>
                    </div>
                    </div>
                    
                    </div>
                    </div>

                
                    <div className="my-8" >
                <hr  />
                </div>


                <div className="my-8">
                
                <h2 className="text-gray-800 font-bold text-2xl mb-4">Cast and Crew</h2>

                    
                        <Slider {...settingsCast}>
                        {cast.map((castdata) => (
                            <Cast
                            image={`https://image.tmdb.org/t/p/original${castdata.profile_path}`}
                            castName={castdata.original_name}
                            role={castdata.character}
                        />
                        ))}
                        </Slider>
                   
                    
                    
                </div>

                <div className="my-8" >
                <hr  />
                </div>

                <div className="my-8">
                <PosterSlider config={settings} images={similarMovies} title="You Might also Like" isDark={false} />
                </div>

                <div className="my-8" >
                <hr  />
                </div>

                <div className="my-8">
                <PosterSlider config={settings} images={recommended} title="BMS XCLUSIVE" isDark={false} />
                </div>

            </div>
           
        </>
    );
};

export default Movie;