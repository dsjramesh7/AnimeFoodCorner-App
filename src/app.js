import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// component to build:
// Header
// MainBody
// Footer

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
