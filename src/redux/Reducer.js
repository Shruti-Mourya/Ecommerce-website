import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  handleSearch: "Mens",
  isProductFetching: false,
  isCategorytFetching: false,
  isCategoryListFeatching: false,
  error: "",
  categoryData: [],
  categoryListData: [],
  cartList: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProductStarted(state) {
      state.isProductFetching = true;
    },
    fetchProductSuccess(state, { payload }) {
      console.log("payload===>", payload);
      state.isProductFetching = false;
      state.productData = payload;
    },
    fetchProductFail(state) {
      state.isProductFetching = false;
      state.error = "Something went wrong!";
    },
    //######################################################################################

    fetchCategoryStarted(state) {
      state.isCategorytFetching = true;
    },
    fetchCategorySuccess(state, { payload }) {
      state.isCategorytFetching = false;
      console.log("categoryDatassssssssssssssss===>", payload);
      state.categoryData = payload;
    },
    fetchCategoryFail(state) {
      state.isCategorytFetching = false;
      state.error = "Something went wrong!";
    },

    //######################################################################################

    fetchCategoryListStarted(state) {
      state.isCategoryListFeatching = true;
    },
    fetchCategoryListSuccess(state, { payload }) {
      console.log("its meeeeeeeeeeeeeeee", payload);
      state.isCategoryListFeatching = false;
      state.categoryListData = payload;
    },
    fetchCategoryListFail(state) {
      state.isCategoryListFeatching = false;
      state.error = "Something went wrong !";
    },
    //######################################################################################

    addToCartList(state, { payload }) {
      console.log("its meeeeeeeeeeeeeeee", payload);
      state.cartList.push(payload);
    },

    removeFromCartList(state, { payload }) {
      state.cartList = state.cartList.filter((item) => item !== payload);
    },
    //##########################################################################################
    handleSearchItem(state, { payload }) {
      state.handleSearch = payload;
      console.log("==========>>>>>>",state.handleSearch);
    },
  },
});

const { actions, reducer } = productSlice;

export const {
  fetchProductStarted,
  fetchProductSuccess,
  fetchProductFail,
  fetchCategoryStarted,
  fetchCategorySuccess,
  fetchCategoryFail,
  fetchCategoryListStarted,
  fetchCategoryListSuccess,
  fetchCategoryListFail,
  addToCartList,
  removeFromCartList,
  handleSearchItem,
} = actions;
export default reducer;
