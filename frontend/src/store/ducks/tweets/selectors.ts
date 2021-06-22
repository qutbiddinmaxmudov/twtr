import { createSelector } from 'reselect'
import { RootState } from '../../rootReducer'
import { LoadingState } from './tweetsTypes'

export const selectTweets = (state: RootState) => state.tweets

// export const selectTweetsItems = (state: RootState) => selectTweets(state).items
export const selectTweetsItems = createSelector(selectTweets, (tweets) => tweets.items)

// export const selectTweetsLoadingState = (state: RootState) => selectTweets(state).loadingState
export const selectTweetsLoadingState = createSelector(selectTweets, (tweets) => tweets.loadingState)

export const selectISTweetsLoaded = (state: RootState) => selectTweetsLoadingState(state) === LoadingState.LOADED
export const selectISTweetsLoading = (state: RootState) => selectTweetsLoadingState(state) === LoadingState.LOADING
