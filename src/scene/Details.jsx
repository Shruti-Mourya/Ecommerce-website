import "../App.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Details() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    if (id) {
      fetchProductid();
    }
  }, [id]);

  const fetchProductid = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const dataId = await res.json();
    setProductDetails(dataId);
  };

  return (
    <>
  
        <div className="container-fluid background-details">
          <div className="container details-card">
            <div className="details-image">
              <img src={productDetails.image} alt="Clothing Image" />
            </div>
            <div className="details-product">
              Product Name : {productDetails.title}
              <br />
              price : {productDetails.price}
              <br />
              Details : {productDetails.description}
              <br />
              Deliver Charges : Rs. 200/- <br />
            </div>
          </div>
        </div>
     
    </>
  );
}

export default Details;
