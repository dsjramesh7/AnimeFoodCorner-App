import React from "react";
import ReactDOM from "react-dom/client";
import minato from "./public/minato.png";
// component to build:
// Header
// MainBody
// Footer
const Header = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={minato} className="logo" />
        <span className="logo-name">AnimeFoodCorner</span>
      </div>
      <ul className="menus">
        <li className="menu-item">Home</li>
        <li className="menu-item">About Us</li>
        <li className="menu-item">Contact Us</li>
        <li className="menu-item">Cart</li>
      </ul>
    </div>
  );
};

const ResturantCard = ({ name, ingred, ratings, min }) => {
  // console.log(props);
  return (
    <div className="oneres-card">
      <img />
      <h1>{name}</h1>
      <h2>{ingred}</h2>
      <h4>{ratings} stars</h4>
      <p>{min} minutes</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-comp">
      <div className="search">Search</div>
      <div className="res-comp">
        <ResturantCard
          name="Ramen Noodle"
          ingred="somethioshdfn"
          ratings="4.4"
          min={"34"}
        />
        <ResturantCard
          name="tofu rice"
          ingred="rice macha"
          ratings="4.9"
          min={"160"}
        />
      </div>
    </div>
  );
};

// this is my root component
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
