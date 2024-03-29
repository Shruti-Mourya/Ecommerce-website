import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { REMOVE_FROM_CART } from "../redux/Action";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartList } = useSelector(({ product }) => product);
  const { productData } = useSelector(({ product }) => product);
  const Color2 = "success";

  const handleRemoveFromCart = (id) => {
    const payload = id;
    dispatch({ type: REMOVE_FROM_CART, payload });
  };

  return (
    <>
      <div className="container-fluid categoryPageBg">
        <div className="container categoryCard p-3 ">
          <div className=" product-cards pt-4">
            {productData.map((cartItem) => {
              if (cartList.includes(cartItem.id)) {
                return (
                  <>
                    <div className=" item-card p-3">
                      <div className="item-card-content">
                        <div className="card-img">
                          <img src={cartItem.image} alt="" />
                        </div>
                        <div className="card-text p-3">
                          <h6 className="card-h6 text-light">
                            {cartItem.title}
                          </h6>
                          <h6 className="card-price text-secondary">
                            {cartItem.price}
                          </h6>

                          <button
                            className={`btn bg-${Color2} rounded text-light`}
                            onClick={() => {
                              handleRemoveFromCart(cartItem.id);
                            }}
                          >
                            Remove from cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
