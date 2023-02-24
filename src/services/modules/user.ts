import axios from '../axios'

export default {
  list: (query: {
    assigneeId: string
    assigneeName: string
  }): Promise<res<{
  }>> =>
    axios({
      method: 'get',
      url: `/user/xxx`,
      params: query
    }),
  edit: (query: {
    assigneeId: string
    assigneeName: string
  }): Promise<res<number>> =>
    axios({
      method: 'post',
      url: `/user/xxx`,
      data: query
    }),
}
