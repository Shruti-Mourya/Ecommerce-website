import { call, put } from "redux-saga/effects";
import apiClient from "../service/httpServices";
import { CATEGORIES, CATEGORY_LIST, PRODUCTS } from "../service/webConstant";
import {
  fetchCategoryFail,
  fetchCategoryStarted,
  fetchCategorySuccess,
  fetchProductFail,
  fetchProductStarted,
  fetchProductSuccess,
  fetchCategoryListFail,
  fetchCategoryListStarted,
  fetchCategoryListSuccess,
  addToCartList,
  removeFromCartList,
  handleSearchItem,
} from "./Reducer";

export function* getProductSaga(action) {
  try {
    yield put(fetchProductStarted());

    const response = yield call(apiClient.get, PRODUCTS);
    const { data } = response;

    yield put(fetchProductSuccess(data));
  } catch (err) {
    yield put(fetchProductFail());
    console.error("Failed to fetch products:", err);
  }
}

export function* getHandleSearch(action) {
  const { payload } = action;
  console.log("yyyyyyyyyyyyyyyyyyyyyyyyyy",payload);
  try {
    yield put(handleSearchItem(payload));
  } catch (err) {
    console.log("Failed to fetch cart:", err);
  }
}

export function* getCategoryProduct(action) {
  try {
    yield put(fetchCategoryStarted());
    const response = yield call(apiClient.get, CATEGORIES);
    const { data } = response;
    yield put(fetchCategorySuccess(data));
  } catch (err) {
    yield put(fetchCategoryFail());
    console.log("Failed to get category", err);
  }
}

export function* getCategoryList(action) {
  const payload = action.payload;
  try {
    yield put(fetchCategoryListStarted());
    const response = yield call(
      apiClient.get,
      `${CATEGORY_LIST}/${payload.cateoryName}`
    );
    const { data } = response;
    yield put(fetchCategoryListSuccess(data));
  } catch (err) {
    yield put(fetchCategoryListFail());
    console.error("Failed to fetch category list:", err);
  }
}

export function* getCartProduct(action) {
  const { payload } = action;
  try {
    yield put(addToCartList(payload));
  } catch (err) {
    console.log("Failed to fetch cart:", err);
  }
}
export function* removeFromCart(action) {
  const { payload } = action;
  try {
    yield put(removeFromCartList(payload));
  } catch (err) {
    console.log("Failed to fetch cart:", err);
  }
}
