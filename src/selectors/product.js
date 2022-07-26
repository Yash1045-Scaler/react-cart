import { createSelector } from "reselect";

export const productSelector = state => state.productReducer

export const productDataSelector = createSelector(
    state => productSelector(state),
    (product) => (product),
)