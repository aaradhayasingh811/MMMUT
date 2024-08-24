// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import a from '../Images/1.jpg'
import b from '../Images/2.jpg'
import c from '../Images/3.jpg'
import d from '../Images/4.jpg'
import e from '../Images/5.jpg'
import f from '../Images/6.jpg'
import g from '../Images/7.jpg'
import h from '../Images/8.jpg'
import i from '../Images/9.jpg'


const Carousel = () => {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-slide">
          <img src={a} alt="Slide 1" />
        </div>
        <div className="carousel-slide">
          <img src={b} alt="Slide 2" />

        </div>
        <div className="carousel-slide">
          <img src={c} alt="Slide 3" />
        </div>
        <div className="carousel-slide">
          <img src={d} alt="Slide 4" />
        </div>
        <div className="carousel-slide">
          <img src={e} alt="Slide 5" />
        </div>
        <div className="carousel-slide">
          <img src={f} alt="Slide 6" />
        </div>
        <div className="carousel-slide">
          <img src={g} alt="Slide 7" />
        </div>
        <div className="carousel-slide">
          <img src={h} alt="Slide 8" />
        </div>
        <div className="carousel-slide">
          <img src={i} alt="Slide 9" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
