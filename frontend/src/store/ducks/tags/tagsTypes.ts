import { Action } from "redux";
import { LoadingState } from "../../storeTypes";

// Tags
export interface Tag {
  id: string
  text: string
  count: number
}

export interface TagsState {
  items: Tag[]
  loadingState: LoadingState
}

// ActionTypes

export enum TagsActionsType {
  SET_ITEMS = 'tags/SET_ITEMS',
  FETCH_ITEMS = 'tags/FETCH_ITEMS',
  SET_ITEMS_LOADING_STATUS = 'tags/SET_ITEMS_LOADING_STATUS',
}

export interface SetTagsActionInterface extends Action<TagsActionsType> {
  type: TagsActionsType.SET_ITEMS
  payload: TagsState['items']
}

export interface SetTagsLoadingStatusInterface extends Action<TagsActionsType> {
  type: TagsActionsType.SET_ITEMS_LOADING_STATUS
  payload: LoadingState
}

export interface FetchTagsActionInterface extends Action<TagsActionsType> {
  type: TagsActionsType.FETCH_ITEMS
}

export type TagsActions = SetTagsActionInterface | SetTagsLoadingStatusInterface

