import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Categories() {
const { categoryData } = useSelector(({ product }) => product);

  return (
    <>
      <section>
        <div className="container-fluid categoriesSection">
          <div className=" categories">
            <ul className="category-body">
              {categoryData.map((categoryItem, idx) => {
                return (
                  <>
                    <Link
                      to={`Categorypage/${categoryItem}`}
                      className="categoryLink"
                    >
                      <li className="category-item" key={idx}>
                        <h6 className="cate-items text-light">
                          {categoryItem}
                        </h6>
                      </li>
                    </Link>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
export default Categories;
