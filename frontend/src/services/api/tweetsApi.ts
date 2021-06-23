import axios from 'axios'
import { TweetsState } from '../../store/ducks/tweets/tweetsTypes'

export const tweetsApi = {
  async fetchTweets(): Promise<TweetsState['items']> {
    const { data } = await axios.get('/tweets')
    return data
  },
}
