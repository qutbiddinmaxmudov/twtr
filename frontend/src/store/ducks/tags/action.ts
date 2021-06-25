import { LoadingState } from '../../storeTypes'
import {
  FetchTagsActionInterface,
  SetTagsActionInterface,
  SetTagsLoadingStatusInterface,
  TagsActionsType,
  TagsState,
} from './tagsTypes'

export const setTags = (payload: TagsState['items']): SetTagsActionInterface => ({
  type: TagsActionsType.SET_ITEMS,
  payload,
})

export const setTagsLoadingStatus = (payload: LoadingState): SetTagsLoadingStatusInterface => ({
  type: TagsActionsType.SET_ITEMS_LOADING_STATUS,
  payload,
})

export const fetchTags = (): FetchTagsActionInterface => ({
  type: TagsActionsType.FETCH_ITEMS,
})
