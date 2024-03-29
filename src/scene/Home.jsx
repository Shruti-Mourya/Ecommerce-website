import Categories from "../components/Categories";
import Front from "../components/Front";
import Cards from "../components/Cards";
import Deals from "../components/Deals";
import Brands from "../components/Brands";
import Solds from "../components/Solds";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { GET_CATEGORY_PRODUCT, GET_PRODUCTS } from "../redux/Action";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_PRODUCTS });
    dispatch({ type: GET_CATEGORY_PRODUCT });
  }, []);

  return (
    <>
      <Categories />
      <Front />
      <Cards />
      <Deals />
      <Brands />
      <Solds />
    </>
  );
}
