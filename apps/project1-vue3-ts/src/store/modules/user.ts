import { store } from '../index'
import { defineStore } from 'pinia'

interface UserVO {
  id: number
  avatar: string
  nickname: string
}
interface UserInfoVO {
  permissions: string[]
  roles: string[]
  isSetUser: boolean
  user: UserVO
}

export const useUserStore = defineStore('admin-user', {
  state: (): UserInfoVO => ({
    permissions: [],
    roles: [],
    isSetUser: false,
    user: {
      id: 0,
      avatar: '',
      nickname: ''
    }
  }),
  getters: {
    getPermissions(): string[] {
      return this.permissions
    },
    getRoles(): string[] {
      return this.roles
    },
    getIsSetUser(): boolean {
      return this.isSetUser
    },
    getUser(): UserVO {
      return this.user
    }
  },
  actions: {
    async setUserInfoAction() {},
    async loginOut() {},
    resetState() {
      this.permissions = []
      this.roles = []
      this.isSetUser = false
      this.user = {
        id: 0,
        avatar: '',
        nickname: ''
      }
    }
  }
})

export const useUserStoreWithOut = () => {
  return useUserStore(store)
}
