import React from "react";

const Heros = ({ hero }) => {

  return (
    <div>
      <div className="container">
        {hero?.map((card, index) => (
          <div key={index} className="card">
            <img src={card?.images.sm} alt="" />
            <div className="container">
              <p>
                <b>{card?.name}</b>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Heros;
