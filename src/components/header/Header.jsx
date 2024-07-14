import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <img src="./crossIcon.png" className="cross-icon" alt="Cross Icon" />
      <p className="title">
        Epic Games: An American Video Game And Software Developer And Publisher
        Based In Cary, North Carolina.
      </p>
      <img src="./headerImage.jpg" alt="Header" className="titleImg" />
      <p className="paragraph">
        Create, play, and battle with friends for free in Fortnite. Be the last
        player standing in Battle Royale and zero Build, experience a concert or
        live event, or discover over a million creator-made games, including
        racing, parkour, zombie survival, and more. Each Fortnite island has an
        individual age rating so you can find the one that's right for you and
        your friends. Find it all in Fortnite ... Drop In.
      </p>
      <button className="headerButton">Visit Website</button>
    </div>
  );
};

export default Header;
