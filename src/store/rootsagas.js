import { all, takeLatest } from "redux-saga/effects";
import {
  GET_CART_PRODUCT,
  GET_CATEGORY_LIST,
  GET_CATEGORY_PRODUCT,
  GET_PRODUCTS,
  HANDLE_SEARCH,
  REMOVE_FROM_CART,
} from "../redux/Action";
import {
  getCartProduct,
  getCategoryList,
  getCategoryProduct,
  getHandleSearch,
  getProductSaga,
  removeFromCart,
} from "../redux/Saga";

export default function* sagas() {
  yield all([
    takeLatest(GET_PRODUCTS, getProductSaga),
    takeLatest(HANDLE_SEARCH, getHandleSearch),
    takeLatest(GET_CATEGORY_PRODUCT, getCategoryProduct),
    takeLatest(GET_CATEGORY_LIST, getCategoryList),
    takeLatest(GET_CART_PRODUCT, getCartProduct),
    takeLatest(REMOVE_FROM_CART, removeFromCart),
  ]);
}
