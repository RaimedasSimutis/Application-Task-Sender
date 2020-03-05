import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // throw erro if Vuex state is mutated outside of mutation handlers
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
  },
  mutations: {
    // if dropdown change is catched, update data in vuex store
    updateDropdownData (state, payload) {
      state.dropdown.content.forEach(el => {
        if (el.id === payload.id) {
          el.isSelected = payload.value
        }
      })
    },
    // if dropdown no 2 change is catched, update data in vuex store
    updateDropdownTwoData (state, payload) {
      state.dropdownTwo.content.forEach(el => {
        if (el.id === payload.id) {
          el.isSelected = payload.value
        }
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
