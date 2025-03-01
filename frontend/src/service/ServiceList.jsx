import React from 'react'
import ServiceCard from './ServiceCard';
import { Col } from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'


const servicesData = [
    {   imgUrl : weatherImg,
        title : "Every Weather Condition",
        desc : "Experience the beauty of nature no matter the season! Whether it's a sunny day, a refreshing rain, or a magical snowfall, we ensure a safe, comfortable, and exciting adventure with the right gear and expert planning.",
    },
    {   imgUrl : guideImg,
        title : " With Best Tour Guide",
        desc : "Our professional and passionate tour guides bring each destination to life with their deep knowledge, engaging storytelling, and personalized attention. From historical insights to hidden gems, they make every journey truly special.",
    },
    {   imgUrl : customizationImg,
        title : "And Unforgottable Adventure",
        desc : "Get ready for an adventure that stays with you forever! We craft unique, thrilling, and immersive experiences that go beyond the ordinary—whether it’s breathtaking landscapes, cultural encounters, or adrenaline-filled activities.",
    }
]

const ServiceList = () => {
    return ( <>
    {
        servicesData.map((item, index ) => 
            (<Col lg='3' md='6' sm='12' className='mb-4' key={index}>
                <ServiceCard item={item} />
            </Col>

        ))}
    </>
    );
}

export default ServiceList