import { Action } from 'redux'

export enum LoadingState {
  LOADED = 'LOADED',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

// StateTypes
export interface Tweet {
  text: string
  user: {
    fullname: string
    username: string
    avatarUrl: string
  }
}

export interface TweetsState {
  items: Tweet[]
  loadingState: string
}

// ActionTypes
export enum TweetsActionsType {
  SET_TWEETS = 'tweets/SET_TWEETS',
}

export interface SetTweetsActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_TWEETS
  payload: TweetsState['items']
}

export type TweetsActions = SetTweetsActionInterface
