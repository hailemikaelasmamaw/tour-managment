import React from 'react'
import './footer.css'
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

import { Container, Row, Col, ListGroupItem, ListGroup } from "reactstrap"

const quick__links = [
  { path: '/gallery', display: 'Gallery' },
  { path: '/login', display: 'Login' },
  { path: '/register', display: 'Register' },
];

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt=''/>
              <p> Travel Ethiopia – Journey Through History, Culture, and Natural Wonders!
              </p>
              <div className=' social__link d-flex align-item-center gap-5'>
                <span>
                  <Link to='#'><i class="ri-youtube-line"></i></Link>
                </span>
                <span>
                  <Link to='#'><i class="ri-github-fill"></i></Link>
                </span>
                <span>
                  <Link to='#'><i class="ri-facebook-circle-line"></i></Link>
                </span>
                <span>
                  <Link to='#'><i class="ri-instagram-line"></i></Link>
                </span>
              </div>
            </div>
          </Col>


          <Col lg="3">
            <h5 className='footer__link-title'>Discovery</h5>
            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>


          <Col lg="3">
            <h5 className='footer__link-title'>Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
            </ListGroup>
          </Col>

          <Col lg="3">
            <h5 className='footer__link-title'>Contact</h5>
            <ListGroup className="footer__quick-links">
              <ListGroupItem  className="ps-0 border-0 d-flex align-item-center gap-3">
                <h6 className='mb-0 d-flex align-item-center gap-2'>
                  <span><i class="ri-map-pin-line"></i></span>
                  Address:
                </h6>
                <p className='mb-0'>AddisAbaba,Ethiopia</p>
              </ListGroupItem>

              <ListGroupItem  className="ps-0 border-0 d-flex align-item-center gap-3">
                <h6 className='mb-0 d-flex align-item-center gap-2'>
                  <span><i class="ri-mail-line"></i></span>
                  Email:
                </h6>
                <p className='mb-0'>dev.muhib01@gmail.com</p>
              </ListGroupItem>

              <ListGroupItem  className="ps-0 border-0 d-flex align-item-center gap-3">
                <h6 className='mb-0 d-flex align-item-center gap-2'>
                  <span><i class="ri-phone-fill"></i></span>
                  Phone:
                </h6>
                <p className='mb-0'>+251938826782</p>
              </ListGroupItem>
            </ListGroup>
          </Col>


          <Col lg='12' className="text-center pt-5">
            <p className='copyright'>
              Copyright {year}, 
              design and developed by Hailemikael Asmamaw
              all right reserved</p>
              
          </Col>
        </Row>
      </Container>
    </footer>
    
  );
};

export default Footer;