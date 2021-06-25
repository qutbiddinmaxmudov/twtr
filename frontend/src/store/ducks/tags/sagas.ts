import { call, put, takeEvery } from 'redux-saga/effects'
import { tagsApi } from '../../../services/api/tagsApi'
import { LoadingState } from '../../storeTypes'
import { setTags, setTagsLoadingStatus } from './action'
import { TagsActionsType, TagsState } from './tagsTypes'

export function* fetchTagsRequest() {
  try {
    yield put(setTagsLoadingStatus(LoadingState.LOADING))
    const data: TagsState['items'] = yield call(tagsApi.fetchTags)
    yield put(setTags(data))
  } catch (error) {
    yield put(setTagsLoadingStatus(LoadingState.ERROR))
  }
}

export function* watchFetchTags() {
  yield takeEvery(TagsActionsType.FETCH_ITEMS, fetchTagsRequest)
}
