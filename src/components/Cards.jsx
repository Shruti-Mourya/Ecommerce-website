import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GET_CART_PRODUCT, HANDLE_SEARCH } from "../redux/Action";
import "react-toastify/dist/ReactToastify.css";
import { REMOVE_FROM_CART } from "../redux/Action";

function Cards() {
  const dispatch = useDispatch();
  const Color1 = "danger";
  const Color2 = "success";

  const { productData } = useSelector(({ product }) => product);
  const { cartList } = useSelector(({ product }) => product);

  const handleAddToCart = (id) => {
    const payload = id;
    dispatch({ type: GET_CART_PRODUCT, payload });
  };

  const handleRemoveFromCart = (id) => {
    const payload = id;
    dispatch({ type: REMOVE_FROM_CART, payload });
  };

  return (
    <>
      <section>
        <div className="container-fluid bg-dark">
          <div className="container">
            <div className="latest-products" id="womens">
              <div className="latest-text text-light">
                OUR LATEST ITEMS AND NEW ARRIVALS
              </div>

              <div className=" product-cards pt-4">
                {productData.map((product) => {
                  return (
                    <>
                      <div className=" item-card p-3">
                        <div className="item-card-content">
                          <div className="card-img">
                            <Link to={`Details/${product.id}`}>
                              <img src={product.image} alt="" />
                            </Link>
                          </div>
                          <div className="card-text p-3">
                            <h6 className="card-h6 text-light">
                              {product.title}
                            </h6>
                            <h6 className="card-price text-secondary">
                              {product.price}
                            </h6>

                            {cartList.includes(product.id) ? (
                              <button
                                className={`btn bg-${Color2} rounded text-light`}
                                onClick={() => {
                                  handleRemoveFromCart(product.id);
                                }}
                              >
                                Remove from cart
                              </button>
                            ) : (
                              <button
                                className={`btn bg-${Color1} rounded text-light`}
                                onClick={() => {
                                  handleAddToCart(product.id);
                                }}
                              >
                                Add to cart
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cards;
