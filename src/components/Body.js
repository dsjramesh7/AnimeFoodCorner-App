import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import SkeletonLoaderBody from "./SkeletonLoaderBody";
const Body = () => {
  const [productsData, setProductsData] = useState([]);
  // console.log(productsData[0]);

  useEffect(() => {
    console.log("i am getting called useEffect");
    fetchDataAPI();
  }, []);

  const fetchDataAPI = async () => {
    // const response = await fetch("https://fakestoreapi.com/products");
    const response = await fetch(
      "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // console.log(response);
    const jsonData = await response.json();
    //optional chaining
    const resturants =
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    // console.log(resturants);
    setProductsData(resturants);
  };

  //filter function for rating
  const HandleFilter = () => {
    const filteredData = productsData.filter((item) => item.rating.rate > 4);
    setProductsData(filteredData);
  };

  console.log(
    "body component rendered first okay then useEffect so mein first"
  );
  // console.log(productsData);

  //conditional rendering
  if (productsData.length === 0) {
    return <SkeletonLoaderBody />;
  }
  return (
    <div className="body-comp">
      <div className="search">Search</div>

      <button className="filter-btn" onClick={HandleFilter}>
        Top Rated Things
      </button>
      <div className="res-comp">
        {productsData && productsData.length > 0 ? (
          productsData.map((EPD) => {
            // console.log(EPD);
            return <ResturantCard key={EPD.info.id} prodData={EPD} />;
          })
        ) : (
          <p>"No data fetched"</p>
        )}
      </div>
    </div>
  );
};
export default Body;
