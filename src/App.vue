<template>
  <div id="app">
    <Dropdown
      :content="this.$store.state.dropdown.content"
      :title="this.$store.state.dropdown.title"
      @dropdownCheckUpdate="this.updateDropdownData"
    />
    <!-- {{this.$store.state.dropdown.filterBy}}
    {{ this.$store.state.dropdown.selectedCount }} -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Dropdown from './components/Dropdown'
import { mapMutations } from 'vuex'

export default {
  name: 'App',
  components: {
    Dropdown
  },
  methods: {
    ...mapMutations({
      updateDropdownData: 'updateDropdownData'
    })
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: black;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

body {
  background: #ffffff;

}
</style>
