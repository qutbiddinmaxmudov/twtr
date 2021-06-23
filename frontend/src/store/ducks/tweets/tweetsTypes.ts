import { Action } from 'redux'
import { LoadingState } from '../../storeTypes'



// StateTypes
export interface Tweet {
  id: string
  text: string
  user: {
    fullname: string
    username: string
    avatarUrl: string
  }
}

export interface TweetsState {
  items: Tweet[]
  loadingState: LoadingState
}

// ActionTypes
export enum TweetsActionsType {
  SET_TWEETS = 'tweets/SET_TWEETS',
  FETCH_TWEETS = 'tweets/FETCH_TWEETS',
  SET_TWEETS_LOADING_STATUS = 'tweets/SET_TWEETS_LOADING_STATUS',
}

export interface SetTweetsActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_TWEETS
  payload: TweetsState['items']
}

export interface SetTweetsLoadingStatusInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_TWEETS_LOADING_STATUS
  payload: LoadingState
}

export interface FetchTweetsActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.FETCH_TWEETS
}

export type TweetsActions = SetTweetsActionInterface | SetTweetsLoadingStatusInterface

