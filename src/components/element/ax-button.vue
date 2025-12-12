<script>
export default {
  name: 'ax-button',
  emits: ['click'],
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    rounded: Boolean,
    circle: Boolean
  },
  computed: {
    buttonClass() {
      const classes = ['ax-button']
      if (this.type) {
        classes.push(`ax-button--${this.type}`)
      }
      return classes
    }
  },
  methods: {
    handleClick(evt) {
      // 子组件触发自定义事件
      this.$emit('click', evt)
    }
  },
}
</script>

<template>
  <button :class="buttonClass" @click="handleClick">
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<style lang="scss" scoped>
@import '~/styles/index.scss';

.ax-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 1.6rem;
  border-radius: 0.2rem;
  border: 1px solid #999;
  background-color: white;
  cursor: pointer;

  &:hover {
    border: 1px solid $main-color;
    color: $main-color;
    transition: all 0.3s ease;
  }
}
</style>