import { getField, updateField } from 'vuex-map-fields'

const state = () => ({
  projects: [],
})

const mutations = {
  SET_PROJECTS: (state, payload) => {
    state.projects = payload
  }
}

const actions = {
  async getProjects({commit}, payload) {
    const {data} = await this.$axios.get('projects-manage/index', {params: payload});
    commit('SET_PROJECTS', data.projects)
  },

  async editProject({commit}, payload) {
    await this.$axios.post(`projects-manage/update?id=${payload.id}`, payload);
  }
}
const getters = () => ({
  projects: state => state.projects,
})

export default {
  namespaced: true,
  state,
  getters: { ...getters, getField },
  mutations: { ...mutations, updateField },
  actions
}


