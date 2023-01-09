import { useContext } from "react";
import { UserNameContext } from "../../App";

const Menu = () => {
    const userName = useContext(UserNameContext)
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a href="/" className="nav-link active" aria-current="page">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="/" className="nav-link">
          Pricing
        </a>
      </li>
      <li className="nav-item">
        <a href="/" className="nav-link">
          FAQs
        </a>
      </li>
      <li className="nav-item">
        <a href="/" className="nav-link">
          {userName}'s Profile
        </a>
      </li>
    </ul>
  );
};

export default Menu;
