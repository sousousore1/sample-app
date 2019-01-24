const axios = require('axios')

export const state = () => ({
  google: null,
  bing: null
})

export const mutations = {
  setTranslations(state, translations) {
    state.google = translations.find(x => x.provider === 'google')
    state.bing = translations.find(x => x.provider === 'bing')
  }
}

export const actions = {
  async translate({ commit }, e) {
    const { data } = await axios.get(`${process.env.apiUrl}/translation.json`, {
      params: {
        query: e.target.value
      }
    })
    commit('setTranslations', data)
  }
}
