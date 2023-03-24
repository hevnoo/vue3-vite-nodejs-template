//* store/modules/user.ts
// 其他模块下的文件同理

import { defineStore } from "pinia"

const user = defineStore("/user", {
  state: () => ({
    userList: []
  }),
  getters: {},
  actions: {},
})

export default user