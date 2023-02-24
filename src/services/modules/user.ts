import axios from '../axios'

export default {
  // 查询领域下的专家信息
  userListByUserId: (query: {
    id: string
  }): Promise<res<{
    userId: string //用户id
    userName: string //用户名
    email: string //邮箱
    phonenumber: string //手机
    dept: {
      deptId: string //部门id
      deptName: string //部门名称
    },
  }[]>> =>
    axios({
      method: 'get',
      url: `/user/userListByUserId/${query.id}`,
    }),
  // 查询用户信息
  list: (): Promise<res<{
  }>> =>
    axios({
      method: 'get',
      url: `/user/list`,
    }),
  // 定稿意见
  finalize: (query: {
    pointId: string //意见id
    reviewTaskType: '0' | '1' | '2' //任务类型 0-技术分析，1-技术分析总结报告，2-促进性信息分享
    assigneeId: string //当前登录id
    assigneeName: string //用户名
  }): Promise<res<number>> =>
    axios({
      method: 'post',
      url: `/task/finalize`,
      data: query
    }),
}
