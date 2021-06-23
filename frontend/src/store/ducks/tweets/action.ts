import { LoadingState } from '../../storeTypes'
import {
  FetchTweetsActionInterface,
  SetTweetsActionInterface,
  SetTweetsLoadingStatusInterface,
  TweetsActionsType,
  TweetsState,
} from './tweetsTypes'

export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
})

export const setTweetsLoadingStatus = (payload: LoadingState): SetTweetsLoadingStatusInterface => ({
  type: TweetsActionsType.SET_TWEETS_LOADING_STATUS,
  payload,
})

export const fetchTweets = (): FetchTweetsActionInterface => ({
  type: TweetsActionsType.FETCH_TWEETS,
})
