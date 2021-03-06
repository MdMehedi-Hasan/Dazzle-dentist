import React from "react";
import banner_1 from "../../../images/Banner/banner-1.png";
import banner_2 from "../../../images/Banner/banner-2.png";
import banner_3 from "../../../images/Banner/banner-3.png";
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
import { Button, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Card, Carousel } from "react-bootstrap";

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
            <h3>Tooth Extractions</h3>
            <p>Don't worry about the extraction. Our tooth extraction tool is safe &amp; less painful.</p>
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
            <h3>Cosmetic dentistry</h3>
            <p >You can easily transplant teeth in your gum. Our cosmetic surgery is less costly and better than others.</p>
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
            <h3>Root Canal Therapy</h3>
            <p>
              Get Root Canal Therapy in a very affordable price. And we also provide 30 days of observation.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* ====================================== */}
      <div className="container mx-auto row mt-5">
        <div className="col-md-3 bg-warning p-4">
        <span className="fs-3 fw-bold">Consultancy</span>
          <h5> (Care solution)</h5>
          <ul>
            <li>Get The Quality Deserve</li>
            <li>Management Personal Assistance</li>
            <li>Housekeeping Nutritional</li>
            <li>Management Medication</li>
            <li>Assistance Care That You</li>
          </ul>
        </div>
        <div className="col-md-3 bg-info p-4">
        <span className="fs-3 fw-bold">Day long service</span>
          <h5>(Service hours)</h5>
          <ul>
            <li>24 hour consultancy</li>
            <p><hr /></p>
            <li>Over phone support</li>
            <p><hr /></p>
            <li>9 am - 5pm @chamber</li>
          </ul>
        </div>
        <div className="col-md-3 bg-warning p-3">
          <span className="fs-3 fw-bold">Cosmetic-surgery</span>
          <h5> (All types of surgery)</h5>
          <ul>
            <li>All types of surgeries</li>
            <li>Affordable price</li>
            <li>2 months observation</li>
            <li>Tele Medication</li>
            <li>Assistance Care That You need</li>
          </ul>
        </div>
        <div className="col-md-3 bg-info p-4">
        <span className="fs-3 fw-bold">Dental Implants</span>
          <h5>(Teeth Whitening)</h5>
          <ul>
            <li>Basic treatments available</li>
            <p><hr /></p>
            <li>Proper guidance on diet</li>
            <p><hr /></p>
            <li>Regular observation</li>
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
            After you heal from your implant placement, you can revisit my chamber for an implant restoration. I will put you under anesthesia and connect the abutment to the implant. It can take about two weeks for your gums to heal before having your dental prosthetic attached.
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
            Examination of diagnostic X-rays (radiographs): Essential for detection of decay, tumors, cysts, and bone loss. X-rays also help determine tooth and root positions. Oral cancer screening: Check the face, neck, lips, tongue, throat, tissues, and gums for any signs of oral cancer..
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
            Orthodontics is a branch of dentistry that treats malocclusion, a condition in which the teeth are not correctly positioned when the mouth is closed. This results in an improper bite. An orthodontist specializes in making the teeth straight..
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
            Root fillings fill the tube from the part of the tooth you can see to the end of your root underneath your gum. Extraction is the complete removal of a tooth from your mouth. This means loss of the tooth, but also the source of the infection which is causing any pain..
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
            Partial dentures are used when one or more natural teeth remain in the upper or lower jaw. A fixed (permanent) bridge replaces one or more teeth by placing crowns on the teeth on either side of the space and attaching artificial teeth to them. This ???bridge??? is then cemented into place.
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
            Cosmetic dentistry is generally used to refer to any dental work that improves the appearance (though not necessarily the functionality) of teeth, gums and/or bite. It primarily focuses on improvement in dental aesthetics in color, position, shape, size, alignment and overall smile appearance.
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
