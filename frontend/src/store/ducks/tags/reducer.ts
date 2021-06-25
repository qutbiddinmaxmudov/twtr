import produce, { Draft } from 'immer'
import { LoadingState } from '../../storeTypes'
import { TagsActions, TagsState, TagsActionsType } from './tagsTypes'

const initialTagsState: TagsState = {
  items: [],
  loadingState: LoadingState.NEVER,
}

export const tagsReducer = produce((draft: Draft<TagsState>, action: TagsActions) => {
  switch (action.type) {
    case TagsActionsType.SET_ITEMS:
      draft.items = action.payload
      draft.loadingState = LoadingState.LOADED
      break
    case TagsActionsType.SET_ITEMS_LOADING_STATUS:
      draft.loadingState = action.payload
      break

    default:
      break
  }
}, initialTagsState)
