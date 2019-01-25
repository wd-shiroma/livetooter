export const state = () => ({
  domain: 'mstdn.jp',
})

export const mutations = {
  updateDomain (state, domain) {
    state.domain = domain
  },
}