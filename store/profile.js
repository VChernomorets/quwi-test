import { getField, updateField } from 'vuex-map-fields'

const state = () => ({
})

const mutations = {

}

const actions = {
  async login({commit}, payload) {
    const {data} = await this.$auth.loginWith('cookie', {data: payload})
  },
  async logout({commit}, payload) {
    await this.$auth.logout();
  }
}
const getters = () => ({
})

export default {
  namespaced: true,
  state,
  getters: { ...getters, getField },
  mutations: { ...mutations, updateField },
  actions
}


