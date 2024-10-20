import { BASE_IMAGE_URL } from "../utils/constants";

const ResturantCard = ({ prodData }) => {
  // console.log(prodData);
  let { name, avgRatingString, cloudinaryImageId, costForTwo } = prodData.info;
  // let destructuredRating = rating.rate;
  // console.log(BASE_IMAGE_URL);
  // console.log(cloudinaryImageId);
  return (
    <div className="oneres-card">
      <img
        src={`${BASE_IMAGE_URL}/${cloudinaryImageId}`}
        style={{ height: "200px" }}
      />
      <h1>{name}</h1>
      <p>{avgRatingString} stars</p>
      <p>${costForTwo}</p>
    </div>
  );
};
export default ResturantCard;
