import { AddFormState, LoadingState } from '../../storeTypes'
import {
  FetchTweetsActionInterface,
  SetTweetsActionInterface,
  SetTweetsLoadingStatusInterface,
  TweetsActionsType,
  TweetsState,
  AddTweetActionInterface,
  Tweet,
  AddFetchedTweetActionInterface,
  AddTweetsLoadingStatusInterface,
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

export const addFetchedTweet = (payload: Tweet): AddFetchedTweetActionInterface => ({
  type: TweetsActionsType.ADD_FETCHED_TWEET,
  payload,
})

export const addTweet = (payload: string): AddTweetActionInterface => ({
  type: TweetsActionsType.ADD_TWEET,
  payload,
})

export const AddTweetLoadingStatus = (payload: AddFormState): AddTweetsLoadingStatusInterface => ({
  type: TweetsActionsType.ADD_TWEET_LOADING_STATUS,
  payload,
})
 