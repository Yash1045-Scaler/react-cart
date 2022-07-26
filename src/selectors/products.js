import { createSelector } from "reselect";
import { categoriesSelector } from "./categories";

export const productsSelector = state => state.productsReducer;

export const productsDataSelector = createSelector(
  state => productsSelector(state).products,
  state => categoriesSelector(state).categories,
  (
    products,
    categories
  ) => ({
    products,
    categories
  })
)