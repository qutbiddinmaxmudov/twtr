import { RootState } from '../../rootReducer'
import { TweetsState } from './tweetsTypes'

export const selectTweets = (state: RootState) => state.tweets

export const selectTweetsItems = (state: RootState) => selectTweets(state).items

export const selectTweetsLoadingState = (state: RootState) => selectTweets(state).loadingState
