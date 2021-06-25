import axios from 'axios'
import { TagsState } from '../../store/ducks/tags/tagsTypes'

export const tagsApi = {
  async fetchTags(): Promise<TagsState['items']> {
    const { data } = await axios.get('/tags')
    return data
  },
}
