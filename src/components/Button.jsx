import { useState } from "react";

function Button() {
  let [CartItem, setCartItem] = useState(0);

  return (
    <>
     
      <button
        className="btn bg-danger rounded text-light"
        onClick={() => {
          setCartItem(CartItem + 1);
        }}
      >
        Add to cart
      </button>
    </>
  );
}
export default Button;
