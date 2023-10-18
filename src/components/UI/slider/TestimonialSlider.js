import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../../assets/images/ava-1.jpg'
import ava02 from '../../../assets/images/ava-2.jpg'
import ava03 from '../../../assets/images/ava-3.jpg'
import ava04 from '../../../assets/images/ava-4.jpg'
import '../../../styles/slider.css'
const TestimonialSlider = () => {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 3000,
        autoplaySpeed: 3000,
        swipeToSlide: 1,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <Slider {...settings}>
            <div>
                <p className='review__text'>
                    lorem
                </p>
                <div className='slider__content d-flex align-items-center gap-3'>
                    <img src={ava01} className=' rounded' />
                    <h6>john deo</h6>
                </div>
            </div>
            <div>
                <p className='review__text'>
                    lorem
                </p>
                <div className='slider__content d-flex align-items-center gap-3'>
                    <img src={ava02} className=' rounded' />
                    <h6>john deo</h6>
                </div>
            </div>
            <div>
                <p className='review__text'>
                    lorem
                </p>
                <div className='slider__content d-flex align-items-center gap-3'>
                    <img src={ava03} className=' rounded' />
                    <h6>john deo</h6>
                </div>
            </div>
            <div>
                <p className='review__text'>
                    lorem
                </p>
                <div className=' slider__content d-flex align-items-center gap-3'>
                    <img src={ava04} className=' rounded' />
                    <h6>john deo</h6>
                </div>
            </div>
        </Slider>
    )
}

export default TestimonialSlider