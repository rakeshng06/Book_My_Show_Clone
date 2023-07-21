import React from "react";
import Slider from "react-slick";


const EntertainmentCard = (props) => {
    return (
        <>
            <div className="w-full h-30 px-2">
                <img src={props.src} alt="Entertainment Image" className="w-full h-full rounded-xl" />
            </div>
        </>
    );
};

const EntertainmentCardSlider = () => {
    const EntertainmentImages = [
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTMwKyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/fitness-collection-2020081150.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/kids-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/comedy-shows-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/music-shows-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/theatre-shows-collection-202012041128.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MSBFdmVudA%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/food-n-drinks-collection-202010061250.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/esports-collection-202011150107.png",
    ];


    const settings = {
        Infinity: false,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        InitialSlide: 0,
        responsive: [{
            breakpoints: 1024,
            settings: {
                slidesToScroll: 2,
                slidesToShow: 3,
                Infinite: true,
            },
            breakpoints: 600,
            settings: {
                slidesToScroll: 2,
                slidesToShow: 1,
                InitialSlide: 1,
            },
            breakpoints: 480,
            settings: {
                slidesToScroll: 2,
                slidesToShow: 1,
            },
        }],
    }


    return (
        <>
            
            <Slider {...settings} >
                {
                    EntertainmentImages.map((image) => (<EntertainmentCard src={image} />))
                }
                </Slider>

        </>
    );
};

export default EntertainmentCardSlider;