<template>
  <div class=" checkBox">
    <input
      type="checkbox"
      :id="idProp"
      :value="idProp"
      v-model="checkedInput"
      class=" checkBox__input">
    <label
      :for="idProp"
      class=" checkBox__label"
    >
      {{titleProp}}
    </label>
  </div>
</template>

<script>
export default {
  name: 'BaseCheckInput',
  props: {
    titleProp: {
      type: String,
      default: 'no val'
    },
    idProp: {
      type: String,
      default: 'no-id'
    }
  },
  data () {
    return {
      // id: null
    }
  },
  computed: {
    checkedInput: {
      get () {
        return this.$store.state.dropdown.filterBy
      },
      set (value) {
        this.$store.commit('updateFilterValues', value)
        this.$store.commit('updateselectedCount')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  .checkBox {
    position: relative;

    &__input {
      opacity: 0;
      margin: 16px 12px 15px 20px;

      & + .checkBox__label::after {
        content: none;
      }

      &:checked {

        & + .checkBox__label::after {
          content: "";
        }

        & + .checkBox__label::before {
          background: #FF8B28;
          border-color: #FF8B28;
        }
      }
    }

    &__label {
      font-size: 12px;
      margin-right: 10px;

      &::before {
        content: "";
        display: inline-block;
        height: 18px;
        width: 18px;

        border: 1px solid #DCDCDC;
        border-radius: 5px;
        position: absolute;
        left: 15px;
        top: 12px;
      }

      &::after {
        content: "";
        display: inline-block;
        height: 3px;
        width: 7px;
        border-left: 2px solid #ffffff;
        border-bottom: 2px solid #ffffff;
        transform: rotate(-45deg);
        position: absolute;
        left: 21px;
        top: 18px;

      }
    }
  }

</style>
