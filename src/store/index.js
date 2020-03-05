import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV === 'development',
  state: () => ({
    dropdown: {
      content: [
        {
          id: '1a',
          title: 'Customers',
          isSelected: true
        },
        {
          id: '2b',
          title: 'VIP',
          isSelected: false
        },
        {
          id: '3c',
          title: 'Oldtimer',
          isSelected: false
        },
        {
          id: '4d',
          title: 'Remove',
          isSelected: false
        }
      ],
      filterBy: [],
      title: 'Tag',
      selectedCount: 0
      // isActive: false
    }
  }),
  getters: {
    getSelectedCount: state => {
      return state.dropdown.selectedCount
    }
  },
  mutations: {
    updateFilterBy (state, payload) {
      state.dropdown.filterBy = payload
    },
    updateFilterValues (state, value) {
      state.dropdown.filterBy = value
    },
    updateselectedCount (state) {
      state.dropdown.selectedCount = state.dropdown.filterBy.length
    },
    updateDropdownData (state, payload) {
      // console.log('hahahahahahaha', payload)
      state.dropdown.content.forEach(el => {
        if (el.id === payload.id) {
          el.isSelected = payload.value
          console.log('data edited')
        }
      })
      console.log(state.dropdown.content)
    }

    // toggleDropdownStatus (state) {
    //   state.dropdown.isActive = !state.dropdown.isActive
    // }
  },
  actions: {
    calcSelectedFields ({ commit, state }) {
      console.log(state.dropdown.length)
      commit('updateselectedCount', state.dropdown.length)
    }

  },
  modules: {
  }
})
