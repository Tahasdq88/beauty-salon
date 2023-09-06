import React, { useEffect, useState } from "react";
import "./Treatment.css";
import Heading from "../../components/Heading/Heading";
import { useParams } from "react-router-dom";
import data from "../../Helper/treatmentdata";
import { motion } from "framer-motion";

const Treatment = () => {
  const [animationKey, setAnimationKey] = useState(0); // Add animationKey state
  const [treatName, setTreatName] = useState("facial");
  const newdata = data?.filter((item) => item.name == treatName);


  const { id } = useParams();
  const customStyle = {
    height: "150px",
  };

  useEffect(() => {
    setTreatName(id);
  }, [id]);

  const handleTabClick = (treatmentName) => {
    setTreatName(treatmentName);
    setAnimationKey((prevKey) => prevKey + 1); // Trigger animation by changing the key
  };
  return (
    <section>
      <div className="upper">
        <div >
          {newdata.map((item) => (
            <div
              className="upper-image"
              style={{ backgroundImage: `url(${item?.image})` }}
            >
              <div className="upper-text">
                <h2>{item.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="middle">
        <div className="middle-links-wrapper">
          <div className="middle-links">
            <div>
              <div
                
                onClick={() => handleTabClick("facial")}
                className={treatName === "facial" ? "active-tab" : "tab"}
              >
                {" "}
                Organic Facial{" "}
              </div>
            </div>
            <div>
              <div
                  onClick={() => handleTabClick("body-treatment")}
                className={
                  treatName === "body-treatment" ? "active-tab" : "tab"
                }
              >
                {" "}
                Body Treatment
              </div>
            </div>
          </div>

          <main className="middle-section">
          <motion.div
          key={animationKey} // Change the key to trigger animation
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
            {newdata?.map((item) => (
              <div key={item.id}>
                <Heading heading={item?.heading} style={customStyle} />
                <p>{item.desc}</p>
                <p>
                  <strong>
                    {item.time}min - ${item.price}
                  </strong>
                </p>
              </div>
            ))}
            </motion.div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default Treatment;
