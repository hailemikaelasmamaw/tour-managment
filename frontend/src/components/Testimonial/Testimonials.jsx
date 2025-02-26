

import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'


const Testimonials = () => {

    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slideToShow:3,

        responsive:[
            
            {
                breakpoint : 992,
                settings : {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots:true,
                },
            },

            {
                breakpoint:576,
                settings: {
                    slideToShow: 1,
                    slidesToScroll: 1,
                },
            },       
        ]
    }

    return  (
    <Slider {...settings}>

        <div className='testimonial py-4 px-3'>
            <p> "Ethiopia was an unforgettable experience! The coffee ceremonies, 
                the breathtaking landscapes of Lalibela, 
                and the warmth of the people made me feel so welcome. 
                I can't wait to return!"
            </p>

            <div className=' d-flex align-item-center gap-4 mt-3 '>
                <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>John Doe</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>


        <div className='testimonial py-4 px-3'>
            <p>"From the rich history in Axum to the stunning Simien Mountains, 
                Ethiopia exceeded all my expectations. The food, 
                especially injera with doro wat, was absolutely delicious!"
            </p>
            <div className=' d-flex align-item-center gap-4 mt-3 '>
                <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'> Lia Franklin</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>


        <div className='testimonial py-4 px-3'>
            <p>"Ethiopia’s culture is so vibrant and unique! Walking through Addis Ababa’s markets and 
                exploring the ancient rock-hewn churches felt like stepping into a different world."
            </p>
            <div className=' d-flex align-item-center gap-4 mt-3 '>
                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>John Doe</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>


    </Slider>
    )
    
    
};

export default Testimonials;