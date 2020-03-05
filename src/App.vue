<template>
  <div id="app">
    <Dropdown
      :content="this.$store.state.dropdown.content"
      :title="this.$store.state.dropdown.title"
      :dropdownId="this.$store.state.dropdown.id"
      class="dropdown"
      @[dropdownEventHandler]="updateDropdownData"
    />
    <Dropdown
      :content="this.$store.state.dropdownTwo.content"
      :title="this.$store.state.dropdownTwo.title"
      :dropdownId="this.$store.state.dropdownTwo.id"
      class="dropdown"
      @[dropdownEventHandler2]="updateDropdownTwoData"
    />
  </div>
</template>

<script>

import Dropdown from './components/Dropdown'
import { mapMutations } from 'vuex'

export default {
  name: 'App',
  components: {
    Dropdown
  },
  computed: {
    dropdownEventHandler () {
      return `dropdownCheckUpdate-${this.$store.state.dropdown.id}`
    },
    dropdownEventHandler2 () {
      return `dropdownCheckUpdate-${this.$store.state.dropdownTwo.id}`
    }
  },
  methods: {
    ...mapMutations({
      updateDropdownData: 'updateDropdownData',
      updateDropdownTwoData: 'updateDropdownTwoData'
    })
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  .dropdown {
    margin: 0 70px
  }

}

body {
  background: #ffffff;
}

</style>
