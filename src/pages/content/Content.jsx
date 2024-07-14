import React from "react";
import "./content.scss";

const Content = () => {
  return (
    <div className="content">
      <div className="row">
        <div className="card">
          <img
            src="./cardthree.jpg"
            className="card-img"
            alt="Card Three"
          />
          <div className="card-body">
            <p className="card-text">
              Explore Large, Destructible Environments Where No Two Games Are
              Ever The Same.
            </p>
          </div>
        </div>

        <div className="card">
          <img src="./cardone.jpg" className="card-img" alt="Card One" />
          <div className="card-body">
            <p className="card-text">
              Team Up With Friends By Sprinting, Climbing And Smashing a Way To
              Earn Your Victory Royale.
            </p>
          </div>
        </div>

        <div className="card">
          <img src="./cardtwo.jpg" className="card-img" alt="Card Two" />
          <div className="card-body">
            <p className="card-text">
              Discover Even More Ways to Play Across Thousands of Creator-Made
              Game Genre
            </p>
          </div>
        </div>
      </div>

      <div className="contribution">
        <h4>Our Contribution</h4>
        <p>
          Our core offering extends beyond more profit generation; we emphasize
          the growth and active involvement of our user community. Collaborating
          with us represents an investment, rather than a more expenditure. Our
          dedication to providing distinctive digital interactions guarantees
          unparalleled benefits for our clientele.
        </p>
      </div>

      <div className="users">
        <div className="items">
          <h6>5M</h6>
          <p>Daily User Engagements</p>
        </div>

        <div className="items">
          <h6>$500K</h6>
          <p>Revenue Surge for an Platform</p>
        </div>

        <div className="items">
          <h6>10X</h6>
          <p>ROAS on all our marketing campaigns</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
