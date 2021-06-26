import { Action } from "redux";
import { LoadingState } from "../../storeTypes";
import { Tweet } from "../tweets/tweetsTypes";

// Tweet

export interface TweetState {
  data?: Tweet
  loadingState: LoadingState
}

// ActionTypes

export enum TweetActionsType {
  SET_DATA = 'tweet/SET_DATA',
  FETCH_DATA = 'tweet/FETCH_DATA',
  SET_DATA_LOADING_STATUS = 'tweet/SET_DATA_LOADING_STATUS',
}

export interface SetTweetActionInterface extends Action<TweetActionsType> {
  type: TweetActionsType.SET_DATA
  payload: Tweet
}

export interface SetTweetLoadingStatusInterface extends Action<TweetActionsType> {
  type: TweetActionsType.SET_DATA_LOADING_STATUS
  payload: LoadingState
}

export interface FetchTweetActionInterface extends Action<TweetActionsType> {
  type: TweetActionsType.FETCH_DATA
}

export type TweetActions = SetTweetActionInterface | SetTweetLoadingStatusInterface

