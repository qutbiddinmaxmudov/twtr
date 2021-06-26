import { createSelector } from 'reselect'
import { RootState, LoadingState } from '../../storeTypes'

export const selectTweet = (state: RootState) => state.tweet

export const selectTweetData = createSelector(selectTweet, (Tweet) => Tweet.data)

export const selectTweetLoadingState = createSelector(selectTweet, (Tweet) => Tweet.loadingState)

export const selectIsTweetLoaded = (state: RootState) => selectTweetLoadingState(state) === LoadingState.LOADED
export const selectIsTweetLoading = (state: RootState) => selectTweetLoadingState(state) === LoadingState.LOADING
