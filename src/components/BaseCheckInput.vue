<template>
  <div class="checkBox">
    <input
      type="checkbox"
      :id="idProp"
      :checked="valueProp"
      @change="valueCheck"
      class="checkBox__input">
    <label
      :for="idProp"
      class="checkBox__label"
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
    },
    valueProp: {
      type: Boolean,
      default: false
    },
    parentId: {
      type: String,
      default: 'no-id'
    }
  },
  methods: {
    // emit event with parent element id if chechbox is selected
    valueCheck (e) {
      this.$emit(`checkBoxInput-${this.parentId}`, {
        id: this.idProp,
        value: e.target.checked
      })
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
