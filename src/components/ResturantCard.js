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
export default ResturantCard;
