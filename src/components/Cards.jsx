import card1 from "../assets/cloth1.jpg";
import card2 from "../assets/cloth2.jpg";
import card3 from "../assets/cloth3.jpg";
import card4 from "../assets/cloth4.jpg";
import Button from "./Button";
import { useState } from "react";

function Cards() {
  let [CartItem, setCartItem] = useState(0);
  let [AddItem, setAddItem] = useState(false);
  let [Color, setColor] = useState("danger");

  return (
    <>
      <section>
        <div class="container-fluid bg-dark">
          <div className="container">
            <div class="latest-products" id="womens">
              <div class="latest-text text-light">
                OUR LATEST PRODUCTS AND NEW ARRIVALS
                <p className="text-light">Items in cart:{CartItem}</p>
              </div>

              <div class=" product-cards pt-4">
                <div class=" item-card p-3">
                  <div class="item-card-content">
                    <div class="card-img">
                      <img src={card1} alt="" />
                    </div>
                    <div class="card-text p-3">
                      <h6 class="card-h6 text-light">Lorem, ipsum dolor.</h6>
                      <h6 class="card-price text-secondary">$150.00</h6>
                      <button
                        className={`btn bg-${Color} rounded text-light`}
                        onClick={() => {
                          setAddItem(true);
                          if (AddItem) {
                            setCartItem(CartItem + 1);
                            setColor("success");
                          }else{
                            setAddItem(false);
                            setCartItem(CartItem - 1);
                            setColor("danger");
                          }
                        }}

                       
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <div class=" item-card p-3">
                  <div class="item-card-content">
                    <div class="card-img">
                      <img src={card2} alt="" />
                    </div>
                    <div class="card-text p-3">
                      <h6 class="card-h6 text-light">Lorem, ipsum dolor.</h6>
                      <h6 class="card-price text-secondary">$150.00</h6>
                      <button
                        class="btn bg-danger rounded text-light"
                        onClick={() => {
                          setCartItem(CartItem + 1);
                        }}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <div class=" item-card p-3">
                  <div class="item-card-content">
                    <div class="card-img">
                      <img src={card3} alt="" />
                    </div>
                    <div class="card-text p-3">
                      <h6 class="card-h6 text-light">Lorem, ipsum dolor.</h6>
                      <h6 class="card-price text-secondary">$150.00</h6>
                      <button
                        class="btn bg-danger rounded text-light"
                        onClick={() => {
                          setCartItem(CartItem + 1);
                        }}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <div class=" item-card p-3">
                  <div class="item-card-content">
                    <div class="card-img">
                      <img src={card4} alt="" />
                    </div>
                    <div class="card-text p-3">
                      <h6 class="card-h6 text-light">Lorem, ipsum dolor.</h6>
                      <h6 class="card-price text-secondary">$150.00</h6>
                      <button
                        class="btn bg-danger rounded text-light"
                        onClick={() => {
                          setCartItem(CartItem + 1);
                        }}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container-fluid bg-dark">
          <div className="container">
            <div class=" product-cards pt-4">
              <div class=" item-card p-3">
                <div class="item-card-content">
                  <div class="card-img">
                    <img src={card1} alt="" />
                  </div>
                  <div class="card-text p-3">
                    <h6 class="card-h6 text-light">Lorem, ipsum dolor.</h6>
                    <h6 class="card-price text-secondary">$150.00</h6>
                    <Button />
                  </div>
                </div>
              </div>

              <div class=" item-card p-3">
                <div class="item-card-content">
                  <div class="card-img">
                    <img src={card2} alt="" />
                  </div>
                  <div class="card-text p-3">
                    <h6 class="card-h6 text-light">Lorem, ipsum dolor.</h6>
                    <h6 class="card-price text-secondary">$150.00</h6>
                    <Button />
                  </div>
                </div>
              </div>

              <div class=" item-card p-3">
                <div class="item-card-content">
                  <div class="card-img">
                    <img src={card3} alt="" />
                  </div>
                  <div class="card-text p-3">
                    <h6 class="card-h6 text-light">Lorem, ipsum dolor.</h6>
                    <h6 class="card-price text-secondary">$150.00</h6>
                    <Button />
                  </div>
                </div>
              </div>

              <div class=" item-card p-3">
                <div class="item-card-content">
                  <div class="card-img">
                    <img src={card4} alt="" />
                  </div>
                  <div class="card-text p-3">
                    <h6 class="card-h6 text-light">Lorem, ipsum dolor.</h6>
                    <h6 class="card-price text-secondary">$150.00</h6>
                    <Button />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Cards;
