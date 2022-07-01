import {createSelector} from 'reselect'
const selectDirectory=state=>state.directory;
export const selectsDirectorySections=createSelector(
    [selectDirectory],
    directory=>directory.sections
)