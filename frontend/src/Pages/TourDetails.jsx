import React from 'react';
import '../style/tour-details.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import tourData from '../assets/data/tours';
import calculateAvgRating from './../utils/avgRating';

const TourDetails = () => {
  const { id } = useParams();
  const tour = tourData.find(tour => tour.id === id);

  if (!tour) {
    return <h4 className="text-center pt-5">Tour not found.</h4>;
  }

  // Destructure all required properties from the tour object
  const { photo, title, desc, price, reviews, city, distance, maxGroupSize, address } = tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const avatar = "https://via.placeholder.com/50"; // Placeholder for avatar image

  return (
    <>
      <section>
        <Container>
          <Col lg="8">
            <div className="tour_content">
              <img src={photo} alt="" />
              <div className="tour_info">
                <h2>{title}</h2>
                <div className="d-flex align-items-center gap-5">
                  <span className="d-flex align-items-center gap-1">
                    <i className="ri-star-s-fill"></i>
                    {avgRating === 0 ? null : avgRating}
                    {totalRating === 0 ? "Not rated" : <span>({reviews?.length})</span>}
                  </span>
                  <span>
                    <i className="ri-map-pin-fill"></i> {address}
                  </span>
                </div>
                <div className="tour_extra-details">
                  <span>
                    <i className="ri-map-pin-2-line"></i> {city}
                  </span>
                  <span>
                    <i className="ri-money-dollar-circle-line"></i> ${price} /per person
                  </span>
                  <span>
                    <i className="ri-group-line"></i> {distance} k/m
                  </span>
                  <span>
                    <i className="ri-group-line"></i> {maxGroupSize}
                  </span>
                </div>
                <h5>Description</h5>
                <p>{desc}</p>
              </div>

              <div className="tour_reviews mt-4">
                <h4>Reviews ({reviews?.length} reviews)</h4>
                <Form>
                  <div className="d-flex align-items-center gap-3 mb-4 rating_group">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <span key={num}>
                        {num}
                        <i className="ri-star-s-fill"></i>
                      </span>
                    ))}
                  </div>
                  <div className="review_input">
                    <input type="text" placeholder="Share your thoughts" />
                    <button className="btn primary_btn" type="submit">
                      Submit
                    </button>
                  </div>
                </Form>
                <ListGroup className="user_review">
                  {reviews?.map((review, index) => (
                    <div key={index} className="review_item">
                      <img src={avatar} alt="" />
                      <div className="w-100"></div>
                    </div>
                  ))}
                </ListGroup>
              </div>
            </div>
          </Col>
        </Container>
      </section>
    </>
  );
};

export default TourDetails;
