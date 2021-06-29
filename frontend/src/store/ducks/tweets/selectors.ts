import { createSelector } from 'reselect'
import { RootState, LoadingState, AddFormState } from '../../storeTypes'

export const selectTweets = (state: RootState) => state.tweets

// export const selectTweetsItems = (state: RootState) => selectTweets(state).items
export const selectTweetsItems = createSelector(selectTweets, (tweets) => tweets.items)

// export const selectTweetsLoadingState = (state: RootState) => selectTweets(state).loadingState
export const selectTweetsLoadingState = createSelector(selectTweets, (tweets) => tweets.loadingState)
export const selectAddTweetLoadingState = createSelector(selectTweets, (tweets) => tweets.addFormState)

export const selectIsTweetsLoaded = (state: RootState) => selectTweetsLoadingState(state) === LoadingState.LOADED
export const selectIsTweetsLoading = (state: RootState) => selectTweetsLoadingState(state) === LoadingState.LOADING

export const selectIsAddTweetLoading = (state:RootState)=> selectAddTweetLoadingState(state) === AddFormState.LOADING
export const selectIsAddTweetFailed = (state:RootState)=> selectAddTweetLoadingState(state) === AddFormState.ERROR