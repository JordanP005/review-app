import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

function Home() {
  const mystyle = {
    width: "13%",
    height: "100%",
    backgroundColor: "hsl(217, 12%, 63%)",
    borderRadius: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  };

  const [rating, setRating] = useState(0);
  const [style, setStyle] = useState([false, false, false, false, false]);

  function updateRating(event) {
    setRating(event.target.id);
    console.log(event.target.id);

    setStyle((prev) => {
      return {
        [event.target.id - 1]: true,
      };
    });
  }

  return (
    <div className="main-box">
      <div className="inner-box">
        <div className="image-box">
          <img src="images/icon-star.svg" alt="starimg" />
        </div>
        <div className="text-box">
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <div className="rating-box">
          <div
            className="image-box"
            style={style[0] ? mystyle : null}
            id="1"
            onClick={updateRating}
          >
            1
          </div>
          <div
            className="image-box"
            style={style[1] ? mystyle : null}
            id="2"
            onClick={updateRating}
          >
            2
          </div>
          <div
            className="image-box"
            style={style[2] ? mystyle : null}
            id="3"
            onClick={updateRating}
          >
            3
          </div>
          <div
            className="image-box"
            style={style[3] ? mystyle : null}
            id="4"
            onClick={updateRating}
          >
            4
          </div>
          <div
            className="image-box"
            style={style[4] ? mystyle : null}
            id="5"
            onClick={updateRating}
          >
            5
          </div>
        </div>
        <Link
          to={rating === 0 ? "/" : "/submitted"}
          state={{ rateNum: rating }}
        >
          <button>SUBMIT</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
