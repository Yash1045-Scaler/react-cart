import { createSelector } from "reselect"

export const categoriesSelector = state => state.categoriesReducer

export const categoriesDataSelector = createSelector(
    state => categoriesSelector(state),
    ({loading, categories, error}) => ({loading, categories, error})
    )