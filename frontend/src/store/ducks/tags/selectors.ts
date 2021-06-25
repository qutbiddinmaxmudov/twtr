import { createSelector } from 'reselect'
import { RootState, LoadingState } from '../../storeTypes'

export const selectTags = (state: RootState) => state.tags

export const selectTagsItems = createSelector(selectTags, (tags) => tags.items)

export const selectTagsLoadingState = createSelector(selectTags, (tags) => tags.loadingState)

export const selectISTagsLoaded = (state: RootState) => selectTagsLoadingState(state) === LoadingState.LOADED
export const selectISTagsLoading = (state: RootState) => selectTagsLoadingState(state) === LoadingState.LOADING
