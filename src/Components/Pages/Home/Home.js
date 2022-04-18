import React from "react";
import { Card, Carousel } from "react-bootstrap";
import banner_1 from "../../../images/Banner/banner-1.png";
import banner_2 from "../../../images/Banner/banner-2.png";
import banner_3 from "../../../images/Banner/banner-3.png";
import { Button, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import service_1 from "../../../images/services/service-1.png";
import service_2 from "../../../images/services/service-2.png";
import service_3 from "../../../images/services/service-3.png";
import service_4 from "../../../images/services/service-4.png";
import service_5 from "../../../images/services/service-5.png";
import service_6 from "../../../images/services/service-6.png";
import "./Home.css";
import Person from "./Person";
import Certification from "./Certification";
import Location from "./Location";

const Home = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            height="500px"
            className="d-block w-100"
            src={banner_1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="500px"
            className="d-block w-100"
            src={banner_2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="500px"
            className="d-block w-100"
            src={banner_3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* ====================================== */}
      <div className="container mx-auto row mt-5">
        <div className="col-md-3 bg-warning">
          <h1>Consultancy</h1>
          <h5> Care solution</h5>
          <ul>
            <li>Get The Quality Deserve</li>
            <li>Management Personal Assistance</li>
            <li>Housekeeping Nutritional</li>
            <li>Management Medication</li>
            <li>Assistance Care That You</li>
          </ul>
        </div>
        <div className="col-md-3 bg-info">
          <h1>Consultancy</h1>
          <h5> Care solution</h5>
          <ul>
            <li>Get The Quality Deserve</li>
            <li>Management Personal Assistance</li>
            <li>Housekeeping Nutritional</li>
            <li>Management Medication</li>
            <li>Assistance Care That You</li>
          </ul>
        </div>
        <div className="col-md-3 bg-warning">
          <h1>Day long service</h1>
          <h5> Defined by you</h5>
          <ul>
            <li>Get The Quality Deserve</li>
            <li>Management Personal Assistance</li>
            <li>Housekeeping Nutritional</li>
            <li>Management Medication</li>
            <li>Assistance Care That You</li>
          </ul>
        </div>
        <div className="col-md-3 bg-info">
          <h1>Consultancy</h1>
          <h5> Care solution</h5>
          <ul>
            <li>Get The Quality Deserve</li>
            <li>Management Personal Assistance</li>
            <li>Housekeeping Nutritional</li>
            <li>Management Medication</li>
            <li>Assistance Care That You</li>
          </ul>
        </div>
      </div>
      {/* ====================================== */}
      <div className="bg-shape">
      <h1 className="w-25 text-center text-white mx-auto mt-5 pt-5">
        Service <hr />
      </h1>
      <span className="d-block text-center text-white fw-bold">
        I always try to provide the best services to my client. <br /> I
        belive in giving quality service.
      </span>
      <CardGroup className="mt-5 mb-lg-5 m-lg-5">
        <Card className="mb-4 m-2 border border-2 rounded">
          <Card.Img className="rounded h-50" variant="top" src={service_1} />
          <Card.Body>
            <Card.Title>Implants - placement and restoration</Card.Title>
            <Card.Text className="fs-4">Fee: $300</Card.Text>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Button variant="success" as={Link} to="/checkout">
            Book appointment
          </Button>
        </Card>
        <Card className="mb-4 m-2 border border-2 rounded">
          <Card.Img className="rounded h-50" variant="top" src={service_2} />
          <Card.Body>
            <Card.Title>
              Complete exams, x-rays, and dental cleanings
            </Card.Title>
            <Card.Text className="fs-4">Fee: $800</Card.Text>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Button variant="success" as={Link} to="/checkout">
            Book appointment
          </Button>
        </Card>
        <Card className="mb-4 m-2 border border-2 rounded">
          <Card.Img className="rounded h-50" variant="top" src={service_3} />
          <Card.Body>
            <Card.Title>Orthodontics</Card.Title>
            <Card.Text className="fs-4">Fee: $200</Card.Text>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Button variant="success" as={Link} to="/checkout">
            Book appointment
          </Button>
        </Card>
      </CardGroup>
      <CardGroup className="mt-lg-5 mb-5 m-lg-5">
        <Card className="mb-4 m-2 border border-2 rounded">
          <Card.Img className="rounded h-50" variant="top" src={service_4} />
          <Card.Body>
            <Card.Title>Fillings, root canals, and extractions</Card.Title>
            <Card.Text className="fs-4">Fee: $500</Card.Text>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Button variant="success" as={Link} to="/checkout">
            Book appointment
          </Button>
        </Card>
        <Card className="mb-4 m-2 border border-2 rounded">
          <Card.Img className="rounded h-50" variant="top" src={service_5} />
          <Card.Body>
            <Card.Title>
              Crowns, bridges, full and partial dentures
            </Card.Title>
            <Card.Text className="fs-4">Fee: $150</Card.Text>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Button variant="success" as={Link} to="/checkout">
            Book appointment
          </Button>
        </Card>
        <Card className="mb-4 m-2 border border-2 rounded">
          <Card.Img className="rounded h-50" variant="top" src={service_6} />
          <Card.Body>
            <Card.Title>
              Cosmetic dentistry, whitening and composite veneers
            </Card.Title>
            <Card.Text className="fs-4">Fee: $1200</Card.Text>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Button variant="success" as={Link} to="/checkout">
            Book appointment
          </Button>
        </Card>
      </CardGroup>
    </div>
      <Person></Person>
      <Certification></Certification>
      <Location></Location>
    </div>
  );
};

export default Home;
