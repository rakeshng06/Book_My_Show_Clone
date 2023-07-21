import React from 'react'
import Slider from 'react-slick';
import Poster from '../Poster/poster.component';

// imported from poster carousel
import PosterCaroselSettings from '../../config/PosterCarousel.config';
import PremierImages from '../../config/TempPosters.config';



export const Premier = () => {
    
   

    
    
    return (
        <>
            <div>
            <div className="flex flex-col item-start">
                <h3 className="text-2xl text-white font-bold">Premiers</h3>
                <p className="text-sm text-white ">Brand new releases every Friday</p>
            </div>
            <Slider {...PosterCaroselSettings} >
                {PremierImages.map((image) => <Poster {...image} isDark />)}
            </Slider>
        </div>
        </>
    );
};

export default Premier;