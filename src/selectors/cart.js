import { createSelector } from "reselect";

export const cartSelector = state => state.cartReducer

export const cartDataSelector = createSelector(
    state => cartSelector(state),
    (cart) => (cart),
)