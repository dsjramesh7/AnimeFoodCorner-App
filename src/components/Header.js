import minato from "../../public/minato.png";
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
export default Header;
