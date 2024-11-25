import { createEvent, createStore } from "effector";
import { ObjectType } from "../../../model/types";
import { fetchGetAllProductsFx } from "./effects";
import { TProduct } from "../../../model/products/Products.type";

interface ProductsState {
  products: TProduct[];
  count: number;
  error: string;
}

export const $productsState = createStore<ProductsState>({
  products: [],
  count: 0,
  error: "",
});

export const changeProductSatate = createEvent<ObjectType>();

$productsState.on(fetchGetAllProductsFx.done, (state, { result }) => ({
  ...state,
  products: result,
}));
//   .on(fetchGetAllProductsFx.failData, (state, error) => ({
//     ...state,
//     error: error,
//   }));

$productsState.on(changeProductSatate, (state, { name, value }) => ({
  ...state,
  [name]: value,
}));
