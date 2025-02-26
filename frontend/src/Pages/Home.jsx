import React from 'react'
import '../style/home.css'
import {  Container, Row, Col  } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroImg03 from '../assets/images/hero-img03.jpg'
import worldImage from '../assets/images/world.png';
import Subtitle from '../shared/Subtitle';
import ServiceList from '../service/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import experienceImg from '../assets/images/experience.png';
import Testimonials from '../components/Testimonial/Testimonials';
import MasonryImagesGallery from '../components/image-gallery/MasonryImageGallery';
import Newsletter from '../shared/Newsletter';

import SearchBar from '../shared/SearchBar';

const Home = () => {

  return (
    <>
    {/* ============= hero section starts */}

    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'Know Before You Go'} />
                <img src={worldImage} alt='' />
              </div>
              <h1>
              <span className='highlight'>  Ethiopia </span>
                The Heart of Human History and Natural Wonders.

                
              </h1>
              <p>From the majestic rock-hewn churches of Lalibela to the breathtaking Simien Mountains, 
                Ethiopia is a land of unparalleled beauty and cultural depth. 
                Its diverse landscapes range from the otherworldly Danakil Depression to the lush highlands, 
                each telling a story of resilience and wonder. Experience the vibrant traditions of over 80 ethnic groups, 
                the warmth of Ethiopian hospitality, and the rich aroma of the world’s finest coffee. Whether you seek adventure, history, or spiritual discovery, 
                Ethiopia invites you to explore its treasures and create memories that will last a lifetime.
              </p>
            </div>
          </Col>


          <Col lg='2'>
            <div className='hero__image-box'>
              <img src={heroImg} alt=""/>
            </div>
          </Col>
          <Col lg='2'>

            <div className='hero__image-box  mt-4'>

              <img src={heroImg03} alt="" />
            </div>
          </Col>
          

          <Col lg='2'>
            <div className='hero__image-box mt-5'>
              <img src={heroImg02} alt=""/>
            </div>
          </Col> 

          <SearchBar/>
        </Row>
      </Container>
    </section>


    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className='services__subtitle'>What we serve</h5>
            <h2 className='service__title'>we offer our best services</h2>
          </Col>
          <ServiceList />
        </Row>
      </Container>
    </section>


    <section>
      <Container>
        <Row>
          <Col lg='12' className="mb-5">
          <Subtitle subtitle={'Explore'} />
          <h2 className='featured__tour-title'> Our featured tour</h2>
          </Col>
          <FeaturedTourList/>
        </Row>
      </Container>
    </section>


    <section>
      <Container>
        <Row>
          <Col lg='6' >
          <div className="experience__content">
            <Subtitle subtitle={"Experience"} />
            <h2>With our all experience <br /> we will serve you</h2>
            <p>
            Let us guide you through the heart of Ethiopia, 
            where adventure meets tradition. With personalized service and attention to detail, we promise an exceptional experience that exceeds your expectations. 
              <br />
            </p>
          </div>

          <div className='counter__wrapper d-flex align-item-center gap-5'>
            <div className="counter__box">
              <span>12k+</span>
              <h6>Successful Trips</h6>
            </div>

            <div className="counter__box">
              <span>2k+</span>
              <h6>Regular clients</h6>
            </div>

            <div className="counter__box">
              <span>15</span>
              <h6>Years of experiance</h6>
            </div>
          </div>
          </Col>

          <Col lg='6' >
          <div className='experience__img'>
            <img src={experienceImg} alt=""/>
          </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Gallery'} />
            <h2 className="gallery__title">
              Visit our customers tour gallery
            </h2>
          </Col>
          <Col lg='12'>
          <MasonryImagesGallery /> 
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Fans Love'} />
            <h2 className="testimonial__title">
              What our fans say about us 
            </h2>
          </Col>
          <Col lg='12'>
            <Testimonials  />
          </Col>
        </Row>
      </Container>
    </section>
    <Newsletter />
  </>
  );
};
export default Home;