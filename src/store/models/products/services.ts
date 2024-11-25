import { BaseApi } from "../../../API/baseApi";
import { Base_Url } from "../../../constants/api-routes";
import { ObjectType } from "../../../model/types";
import { getAllProductsGQL } from "../../../queries/products";

export const fetchGetAllProducts = (body: ObjectType) => {
  const http = new BaseApi("");
  const gqlPayload = {
    query: getAllProductsGQL,
    variables: body,
  };
  return http.post(Base_Url, gqlPayload);
};
