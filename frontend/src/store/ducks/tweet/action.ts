import { LoadingState } from '../../storeTypes'
import { Tweet } from '../tweets/tweetsTypes'
import {
  FetchTweetActionInterface,
  SetTweetActionInterface,
  SetTweetLoadingStatusInterface,
  TweetActionsType,
} from './tweetTypes'

export const setTweetData = (payload: Tweet): SetTweetActionInterface => ({
  type: TweetActionsType.SET_DATA,
  payload,
})

export const setTweetLoadingStatus = (payload: LoadingState): SetTweetLoadingStatusInterface => ({
  type: TweetActionsType.SET_DATA_LOADING_STATUS,
  payload,
})

export const fetchTweetData = (payload: string): FetchTweetActionInterface => ({
  type: TweetActionsType.FETCH_DATA,
  payload,
})
