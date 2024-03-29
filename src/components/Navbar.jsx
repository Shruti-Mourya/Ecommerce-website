import logoimage from "../assets/logo-fashion.png";
import { HANDLE_SEARCH } from "../redux/Action";
import Lists from "./Lists";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
function Navbar() {
  const [Searchkey, setSearchkey] = useState("");
  const { cartList } = useSelector(({ product }) => product);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const payload = { Searchkey: e.target.value };
    setSearchkey(e.target.value);
    dispatch({ type: HANDLE_SEARCH, payload });
  };

  return (
    <>
      <section className="navbar-head">
        <div className="container-fluid  bg-dark ">
          <div className="container navbar-body">
            <header>
              <div className="navbar-img">
                <img src={logoimage} alt="Logo" />
              </div>
              <div className="navbar">
                <Lists />
              </div>

              <input
                type="text"
                placeholder="Search here...."
                className="searchbar"
                value={Searchkey}
                onChange={handleSearch}
              />
              <Link to="Cart">
                <i className="fa-solid fa-cart-shopping text-light trolly"></i>
              </Link>
              <div className="text-light cartcount">{cartList.length}</div>
            </header>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
