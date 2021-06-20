import { combineReducers } from 'redux'
import { tweetsReducer } from './ducks/tweets/reducer'
import { TweetsState } from './ducks/tweets/tweetsTypes'

export const rootReducer = combineReducers({
  tweets: tweetsReducer
})

export interface RootState {
  tweets: TweetsState
}
