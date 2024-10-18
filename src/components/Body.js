import ResturantCard from "./ResturantCard";
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
export default Body;
