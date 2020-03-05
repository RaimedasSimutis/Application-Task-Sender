<template>
  <div class="dropdown__container">
    <button class="dropdown__button" @click="togleDropdown">
      <div class="dropdown__button-title">{{title}}</div>
      <div class="dropdown__button-active-selections" :class="activeSelectionsStyle">
        {{getSelectedCount}}
      </div>
      <img class="dropdown__button-icon" src="../assets/arrow-down.png" alt="dropdown-icon">
    </button>
     <transition name="fade">
      <div  class="dropdown__menu" v-show="this.$store.state.dropdown.isActive">
        <BaseCheckInput
          v-for="(item) in content"
          :key="item.id"
          :titleProp="item.title"
          :idProp="item.id"
          class="dropdown__menu-item"/>
        <!-- <div :id="id" v-for="(item, index) in content" :key="item" class="dropdown__menu-item">
          <input type="checkbox"  :id="index" :value="item" v-model="checkedInput" class="dropdown__menu-item-input">
          <label :for="index" class="dropdown__menu-item-label">{{item}}</label>
        </div> -->
      </div>
    </transition>
  </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex'
import BaseCheckInput from './BaseCheckInput'

export default {
  name: 'Dropdown',
  components: {
    BaseCheckInput
  },
  data () {
    return {
      // id: null
    }
  },
  props: {
    content: {
      type: Array,
      default: () => ['asd', 'qwe', 'zxc']
    },
    title: {
      type: String,
      default: 'unnamed'
    }
  },
  computed: {
    ...mapGetters({
      getSelectedCount: 'getSelectedCount'
    }),
    // id () {
    //   // return `text-field-${this._uid}`
    //   return `check-input-${Math.floor(Math.random() * 1000)}`
    // },
    checkedInput: {
      get () {
        return this.$store.state.dropdown.filterBy
      },
      set (value) {
        this.$store.commit('updateFilterValues', value)
        this.$store.commit('updateselectedCount')
      }
    },
    activeSelectionsStyle () {
      return this.getSelectedCount > 0 ? 'dropdown__button-active-selections--neutral' : 'dropdown__button-active-selections--warning'
    },
    menuActive () {
      return this.$store.state.dropdown.isActive
    }
  },
  methods: {
    ...mapMutations({
      updateFilterBy: 'updateFilterBy'
    }),
    togleDropdown () {
      this.$store.commit('toggleDropdownStatus')
      if (this.$store.state.dropdown.isActive) {
        document.addEventListener('click', this.closeDropdown)
      } else {
        document.removeEventListener('click', this.closeDropdown)
      }
    },
    closeDropdown (e) {
      // close dropdown menu if clicked outside
      if (!this.$el.contains(e.target)) {
        this.$store.commit('toggleDropdownStatus')
        document.removeEventListener('click', this.closeDropdown)
      }
    }
  }
  // mounted () {
  //   document.addEventListener('click', this.close)
  // },
  // beforeDestroy () {
  //   document.removeEventListener('click', this.close)
  // }
}

</script>

<style lang="scss" scoped>

  .dropdown {
    &__container {
      position: relative;
    }

    &__button {
      padding: 0 10px;
      // text-align: center;
      background: #EDEDED;
      // width: 91px;
      height: 30px;
      border: none;
      border-radius: 5px;
      font-weight: 700;
      display: flex;
      align-items: center;
      outline-color: #FE9723;

      }

    &__button-title {
      color: #565656;
      display: inline;
      margin-right: 10px;
    }

    &__button-active-selections {
      // width: 17px;
      // height: 18px;
      padding: 2px 5px;

      color: #ffffff;
      // border: 1px solid #565656;
      border-radius: 2px;
      display: inline-block;
      // margin:auto

      &--neutral {
        background: #565656;
      }

      &--warning {
        background: #F00015;
      }
    }

    &__button-icon {
      width: 10px;
      margin-left: 10px;
      filter: invert(31%) sepia(0%) saturate(2499%) hue-rotate(316deg) brightness(100%) contrast(89%);

    }

    &__menu {
      min-width: 200px;
      position: absolute;
      top: 35px;
      left: 0px;
      background: #ffffff;
      border: 1px solid #DCDCDC;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      // transform-origin: center center;
      left: 50%;
      transform: translate(-50%, 0);

    }

    &__menu-item {
      border-bottom: 1px solid #DCDCDC;
      white-space: nowrap;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      &:last-child {
        border-bottom: none;
      }
    }

    &__menu-item-input {
      margin: 12px 9px 11px 16px;
    }

    &__menu-item-label {
      font-size: 12px;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>
