const settings = {
    Infinity: false,
    autoplay: false,
    slidesToShow: 5,
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
            slidesToShow: 1,
            InitialSlide: 1,
        },
        breakpoint: 480,
        settings: {
            slidesToScroll: 2,
            slidesToShow: 2,
        },
    },
    ],
};

export default settings