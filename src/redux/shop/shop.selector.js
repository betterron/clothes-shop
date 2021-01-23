import { createSelector } from "reselect";

const shopSelector = state => state.shopReducer

export const selectCollections = createSelector(
    [shopSelector],
    shop => shop.collections
)


export const selectCollectionsForOverview = createSelector(
    [selectCollections],
    select => Object.keys(select).map(key => {
        // console.log(key);
        return select[key]
    })
)


export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    )