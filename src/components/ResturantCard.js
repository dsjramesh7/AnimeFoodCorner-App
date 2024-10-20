const ResturantCard = ({ prodData }) => {
  // console.log(prodData);
  let { title, image, price, category, rating, id, description } = prodData;
  let destructuredRating = rating.rate;
  return (
    <div className="oneres-card">
      <img src={image} style={{ height: "30px" }} />
      <h1>{title}</h1>
      <p style={{ width: "100%" }}>{description}</p>
      <p>{destructuredRating} stars</p>
      <p>{category}</p>
      <p>${price}</p>
    </div>
  );
};
export default ResturantCard;
