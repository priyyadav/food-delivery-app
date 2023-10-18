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
                    Every dish is prepared with precision and care. The freshness and quality of ingredients shine through in every bite
                </p>
                <div className='slider__content d-flex align-items-center gap-3'>
                    <img src={ava01} className=' rounded' />
                    <h6>john deo</h6>
                </div>
            </div>
            <div>
                <p className='review__text'>
                    The staff at Delicious Bites are welcoming and attentive. Our server, Sarah, made our dining experience truly memorable.
                </p>
                <div className='slider__content d-flex align-items-center gap-3'>
                    <img src={ava02} className=' rounded' />
                    <h6>john deo</h6>
                </div>
            </div>
            <div>
                <p className='review__text'>
                    The service was quick, and the staff was knowledgeable about the menu. They even accommodated my dietary restrictions with a smile.
                </p>
                <div className='slider__content d-flex align-items-center gap-3'>
                    <img src={ava03} className=' rounded' />
                    <h6>john deo</h6>
                </div>
            </div>
            <div>
                <p className='review__text'>
                    The restaurant's ambiance is cozy and romantic, making it perfect for a special date night.                </p>
                <div className=' slider__content d-flex align-items-center gap-3'>
                    <img src={ava04} className=' rounded' />
                    <h6>john deo</h6>
                </div>
            </div>
        </Slider>
    )
}

export default TestimonialSlider