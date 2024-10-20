import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
const Body = () => {
  const [productsData, setProductsData] = useState({});
  useEffect(() => {
    // console.log("i am getting called useEffect");
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProductsData(data));
  }, []);
  // console.log(productsData[0]);

  //filter function for rating
  const HandleFilter = () => {
    const filteredData = productsData.filter((item) => item.rating.rate > 4);
    setProductsData(filteredData);
  };
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
            return <ResturantCard key={EPD.id} prodData={EPD} />;
          })
        ) : (
          <p>"No data fetched"</p>
        )}
      </div>
    </div>
  );
};
export default Body;
