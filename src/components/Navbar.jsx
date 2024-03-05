import logoimage from "../assets/logo-fashion.png";
import Lists from "./Lists";
import { useState } from "react";

function Navbar({ type }) {
  let numVarOrg = useState(5);
  let [numVar, setNumVar] = useState(5);

  return (
    <>
      <section>
        <div className="container-fluid bg-dark">
          <div className="container">
            <header>
              <div className="navbar-img">
                <img src={logoimage} alt="Logo" />
              </div>
              <div className="navbar">
                <Lists />

                {/* <ul class="headlist">
                  <li class="headlist-item">
                    <a href="">HOME</a>
                  </li>
                  <li class="headlist-item">
                    <a href="">ABOUT</a>
                  </li>
                  <li class="headlist-item">
                    <a href="">MENS</a>
                  </li>
                  <li class="headlist-item">
                    <a href="">WOMENS</a>
                  </li>
                  <li class="headlist-item">
                    <a href="">REVIEWS</a>
                  </li>
                  <li class="headlist-item">
                    <a href="">CONTACT</a>
                  </li>
                </ul> */}
              </div>
              <div className="fas fa-search text-light search"></div>
            </header>
          </div>
        </div>
        <div>
          <p>{numVar}</p>
        </div>
        <button
          class="btn bg-danger rounded text-light"
          onClick={() => {
            setNumVar(numVar + 1);
          }}
        >
          Increase number
        </button>
      </section>
    </>
  );
}

export default Navbar;
