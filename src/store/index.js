import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV === 'development',
  state: () => ({
    dropdown: {
      id: '1',
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
      title: 'Tag'
    },
    dropdownTwo: {
      id: '2',
      content: [
        {
          id: '1aa',
          title: 'Pirmas',
          isSelected: true
        },
        {
          id: '2bb',
          title: 'Antras',
          isSelected: false
        },
        {
          id: '3cc',
          title: 'Trecias',
          isSelected: false
        },
        {
          id: '4dd',
          title: 'Ketvirtas',
          isSelected: false
        }
      ],
      title: 'Tag2'
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
      console.log('pirmas Updated')
      state.dropdown.content.forEach(el => {
        if (el.id === payload.id) {
          el.isSelected = payload.value
        }
      })
    },
    updateDropdownTwoData (state, payload) {
      console.log('antras Updated')
      state.dropdownTwo.content.forEach(el => {
        if (el.id === payload.id) {
          el.isSelected = payload.value
        }
      })
    }
  },
  actions: {
    // calcSelectedFields ({ commit, state }) {
    //   console.log(state.dropdown.length)
    //   commit('updateselectedCount', state.dropdown.length)
    // }

  },
  modules: {
  }
})
