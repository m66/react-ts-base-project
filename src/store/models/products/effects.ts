import { createEffect } from "effector";
import { ObjectType } from "../../../model/types";
import { fetchGetAllProducts } from "./services";

export const fetchGetAllProductsFx = createEffect(async (body: ObjectType) => {
  try {
    const response = await fetchGetAllProducts(body);

    if (response.error) {
      throw new Error(response.error.message);
    }

    return response?.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
});
