import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      modal: false,
      opening: true,
      toggleMenu: false
    },
    mutations: {
      closeMenu(state) {
        state.modal = false
        if (state.toggleMenu) state.toggleMenu = false
      },
      openMenu(state) {
        state.modal = true
        state.toggleMenu = true
      }
    },
    actions: {
      closeMenu({ commit }) {
        commit('closeMenu')
      },
      openMenu({ commit }) {
        commit('openMenu')
      }
    }
  })
}

export default createStore
