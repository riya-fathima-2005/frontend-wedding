import React, { useState, useEffect } from "react";
import "../../assets/Style/Num.css";
import ringimage from "../../assets/Images/ringimg.png"


const useCountUp = (end, duration = 3000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = Math.ceil(end / (duration / 16));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

const Num = () => {
  const clients = useCountUp(50);
  const events = useCountUp(120);
  const awards = useCountUp(10);

  return (
  <div className="num-section">

    <div
  className="container counter-bg"
  style={{
    backgroundImage: `url(${ringimage})`
  }}
>

      <div className="row g-4 justify-content-center text-center">

        {/* CLIENTS */}

        <div className="col-lg-3 col-md-4 col-12">

          <div className="stat-card">

            <h1 className="stat-number">
              {clients}+
            </h1>

            <p className="stat-label">
              Happy Clients
            </p>

          </div>

        </div>

        {/* EVENTS */}

        <div className="col-lg-3 col-md-4 col-12">

          <div className="stat-card">

            <h1 className="stat-number">
              {events}+
            </h1>

            <p className="stat-label">
              Grand Events
            </p>

          </div>

        </div>

        {/* AWARDS */}

        <div className="col-lg-3 col-md-4 col-12">

          <div className="stat-card">

            <h1 className="stat-number">
              {awards}+
            </h1>

            <p className="stat-label">
              Awards Won
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>
);
};

export default Num;
