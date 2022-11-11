import React from "react";
import { Link, useLocation } from "react-router-dom";

function Submitted() {
  const location = useLocation();

  return (
    <div className="main-box">
      <div className="thank-inner-box">
        <img
          className="thank"
          src="images\illustration-thank-you.svg"
          alt="thank_you"
        />
        <div className="rate-box">
          You selected {location.state.rateNum} out of 5
        </div>
        <div className="thank-text">
          <h1>Thank you!</h1>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch
          </p>
        </div>
      </div>
    </div>
  );
}

export default Submitted;
