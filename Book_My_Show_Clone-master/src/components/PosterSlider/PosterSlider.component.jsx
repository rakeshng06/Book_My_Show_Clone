import React from 'react'
import Poster from '../Poster/poster.component';
// imported from poster carousel
import PosterCaroselSettings from '../../config/PosterCarousel.config';
import Slider from 'react-slick';

export const PosterSlider = (props) => {

    const sliderConfig = props.config ? props.config : PosterCaroselSettings

    return (
        <>
        <div>
        <div className="flex flex-col item-start">
            <h3 className={`text-2xl font-bold ${props.isDark ? "text-white" : "text-gray-800" }`} >{props.title}</h3>
            <p className={`text-sm ${props.isDark ? "text-white" : "text-gray-800" }`}>{props.subtitle}</p>
        </div>
                <Slider {...sliderConfig} >
            {props.images.map((image) => <Poster {...image} isDark={props.isDark} />)}
        </Slider>
    </div>
    </>
    );
};

export default PosterSlider
