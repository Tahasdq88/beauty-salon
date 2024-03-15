import React from "react";
import "./Pricepage.css"; // Import your CSS file
import Heading from "../../components/Heading/Heading.jsx";
import { Link } from "react-router-dom";

function PricePage() {
  return (
    <div className="pricing-container">
      <Heading heading={"Pricing"} />
      <p>
        Each of our technicians and therapists have set their own pricing, so
        please call us for more details on specific pricing information.
      </p>
      <p>
        <strong>24-hour Cancellation Policy:</strong> In the event that you need
        to cancel your appointment without 24 hours notice, we will charge the
        card on file for the full service amount. Our 24-hour Cancellation
        Policy applies to all of our nail services and add-ons such as Shellac,
        removals, or nail art.
      </p>
      <p>
        <strong>Late Policy:</strong> All appointments are created to allow the
        appropriate amount of time to enjoy your service at Moshi. If you are
        more than 10 minutes late, we will not be able to perform the service,
        which will still result in the full amount of the originally booked
        service being charged. If a modified version of the service can still be
        performed, the full amount of the originally booked service will still
        be charged.
      </p>
      <p>See our policy for more details.</p>

      <div className="manicure-details">
        <h3>Facial Treatment - $43 and up</h3>
        <p>
          Himalayan soak - nail shaping - cuticle care - organic lotion massage
          application - hot towel - polish
        </p>
        <Link to="/treatments/facial">Book Now</Link>
        <h3>Body Treatment (for guests 5-10 years old) - $28 and up</h3>
        <p>
          Himalayan soak - nail shaping - buff - polish
          <br />
          Your little Moshi can use up to 3 colors (more than 3 colors +$5)
        </p>
        <Link to="/treatments/body-treatment">Book Now</Link>
      </div>
    </div>
  );
}

export default PricePage;
