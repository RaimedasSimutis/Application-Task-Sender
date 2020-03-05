<template>
  <div class="dropdown__container">
    <button class="dropdown__button" @click="togleDropdown">
      <div class="dropdown__button-title">{{title}}</div>
      <div class="dropdown__button-active-selections" :class="activeSelectionsStyle">
        {{calcSelectedTags}}
      </div>
      <img class="dropdown__button-icon" src="../assets/arrow-down.png" alt="dropdown-icon">
    </button>
     <transition name="fade">
      <div  class="dropdown__menu" v-show="this.isActive">
        <BaseCheckInput
          v-for="(item) in content"
          :key="item.id"
          :titleProp="item.title"
          :idProp="item.id"
          :valueProp="item.isSelected"
          :parentId="dropdownId"
          class="dropdown__menu-item"
          @[inputEventHandler]="inputChecked"

        />
      </div>
    </transition>
  </div>
</template>

<script>

import BaseCheckInput from './BaseCheckInput'

export default {
  name: 'Dropdown',
  components: {
    BaseCheckInput
  },
  data () {
    return {
      isActive: false,
      selectedTagCount: 0
    }
  },
  props: {
    content: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: 'unnamed'
    },
    dropdownId: {
      type: String,
      default: 'no-id'
    }
  },
  computed: {
    inputEventHandler () {
      return `checkBoxInput-${this.dropdownId}`
    },
    calcSelectedTags () {
      let cnt = 0
      this.content.forEach(el => {
        if (el.isSelected) {
          cnt += 1
        }
      })
      this.updateSelectedTagCount(cnt)
      return cnt
    },
    activeSelectionsStyle () {
      return this.selectedTagCount > 0 ? 'dropdown__button-active-selections--neutral' : 'dropdown__button-active-selections--warning'
    }
  },
  methods: {
    inputChecked (val) {
      console.log('pagavau inputa', val, this.dropdownId)
      this.$emit(`dropdownCheckUpdate-${this.dropdownId}`, val)
    },
    updateSelectedTagCount (counterValue) {
      this.selectedTagCount = counterValue
    },
    togleDropdown () {
      this.isActive = !this.isActive
      if (this.isActive) {
        document.addEventListener('click', this.closeDropdown)
      } else {
        document.removeEventListener('click', this.closeDropdown)
      }
    },
    closeDropdown (e) {
      if (!this.$el.contains(e.target)) {
        this.isActive = false
        document.removeEventListener('click', this.closeDropdown)
      }
    }
  }
}

</script>

<style lang="scss" scoped>

  .dropdown {
    &__container {
      position: relative;
    }

    &__button {
      padding: 0 10px;
      background: #EDEDED;
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
      padding: 2px 5px;
      color: #ffffff;
      border-radius: 2px;
      display: inline-block;

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
      left: 50%;
      transform: translate(-50%, 0);
      box-shadow: 0px 0px 3px 0px #DCDCDC;
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

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>
