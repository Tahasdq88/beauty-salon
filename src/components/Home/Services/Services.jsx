import React from "react";
import "./Services.css";
import Heading from "../../Heading/Heading.jsx";
import { Link } from "react-router-dom";

const Services = () => {
  const customStyle = {
    height: "100px",
  };
  const data = [
    { id: 1, heading: "Facial", imageurl: "/assets/images/clay_mask.jpg" ,url: "treatments/facial"},
    {
      id: 2,
      heading: "Body Treatment",
      imageurl: "assets/images/facial_massage.jpg",
      url: "treatments/body-treatment"
    },
  ];

  return (
    <div>
      <main id="content">
        <Heading heading="Services" style={customStyle} />
        <div className="services-intro">
          <div className="services-intro-wrapper">
            <p>
              Step inside our gates to find true holistic care in a sanctuary
              that provides a unique tranquil escape from the burdens of
              everyday life. Be guided as much or little as you’d like along
              your path towards relaxation, healing and rejuvenation. Our
              services and products nurture the connection between the body,
              mind and earth to balance your well-being.
            </p>
            <p>Your journey awaits . .</p>
          </div>
        </div>
        <div className="content-wrapper">
          {data.map((data) => (
            <div className="container ">
              <Link to={data.url}>
                <span
                  style={{ backgroundImage: `url(${data.imageurl})` }}
                ></span>
              </Link>
              <div className="container-2">
                <h3>{data.heading}</h3>
                <div></div>
                <p>View more</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Services;
