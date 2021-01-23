import { createSelector } from "reselect";

const selectDirectory = state => state.directoryReducer;

export const selectDirectorySelections = createSelector(
    [selectDirectory],
    directory => directory.sections
)