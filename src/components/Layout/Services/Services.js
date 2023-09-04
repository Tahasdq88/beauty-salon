import React from "react";
import "./Services.css";
import image1 from "../../../assets/images/clay_mask.jpg";
import image2 from "../../../assets/images/facial_massage.jpg";
const Services = () => {
  const data = [
    { id: 1, heading: "Facial", imageurl: image1 },
    { id: 2, heading: "Body Treatment", imageurl: image2 },
  ];

  return (
    <div>
      <main id="content">
        <div className="content-wrapper">
          {data.map((data) => (
            <div className="container ">
              <a href="#">
                <span
                  style={{ backgroundImage: `url(${data.imageurl})` }}
                ></span>
              </a>
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
