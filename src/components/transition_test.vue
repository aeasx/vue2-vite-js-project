<script>
export default {
  name: 'transition_test',
  data() {
    return {
      show: false
    }
  }
}
</script>

<template>
  <div>
    <button @click="show = !show">Toggle</button>
    <Transition name="fade">
      <p class="box-item" v-if="show">hello,world!</p>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
@import '~/styles/index.scss';

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.box-item {
  background-color: $--danger-theme-color;
  width: 300px;
  height: 100px;
}
</style>