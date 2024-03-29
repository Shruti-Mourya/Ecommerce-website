import "../App.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GET_CATEGORY_LIST } from "../redux/Action";

function Categorypage() {
  const dispatch = useDispatch();
  const { categoryItem } = useParams();
  const [defCategory, setDefCategory] = useState([]);
  const Color1 = "danger";
  const Color2 = "success";

  useEffect(() => {
    const payload = {
      cateoryName: categoryItem,
    };
    dispatch({ type: GET_CATEGORY_LIST, payload });
  }, []);

  const { categoryListData } = useSelector(({ product }) => product);

  return (
    <>
      <div className="container-fluid categoryPageBg">
        <div className="container categoryCard p-3 ">
          <div className=" product-cards pt-4">
            {categoryListData.map((defCategoryitem) => {
              return (
                <>
                  <div className=" item-card p-3">
                    <div className="item-card-content">
                      <div className="card-img">
                        <img src={defCategoryitem.image} alt="" />
                      </div>
                      <div className="card-text p-3">
                        <h6 className="card-h6 text-light">
                          {defCategoryitem.title}
                        </h6>
                        <h6 className="card-price text-secondary">
                          {defCategoryitem.price}
                        </h6>

                        <Link to="Cart">
                          <button
                            className={`btn bg-${Color1} rounded text-light`}
                            onClick={() => {
                              
                            }}
                          >
                            Add to cart
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Categorypage;
