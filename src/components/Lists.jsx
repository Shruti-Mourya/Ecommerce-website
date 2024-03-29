import { Link } from "react-router-dom";

function Lists() {
  return (
    <>
      <ul className="headlist">
        <li className="headlist-item">
          <Link to="/">HOME</Link>
        </li>
        <li className="headlist-item">
          <Link to="/About">ABOUT</Link>
        </li>
        <li className="headlist-item">
          <a href="">REVIEWS</a>
        </li>
        <li className="headlist-item">
          <a href="">CONTACT</a>
        </li>
      </ul>
    </>
  );
}
export default Lists;
