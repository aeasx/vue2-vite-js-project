<script>
export default {
  name: 'props_pass',
  props: ['initCount'],
  data() {
    return {
      count: this.initCount
    }
  },
  computed: {
    doubleCount: function () {
      return this.count * 2
    }
  },
}
</script>
<template>
  <div>
    <div style="color: aquamarine;">{{ count }}</div>
    <div style="color: blueviolet;">{{ doubleCount }}</div>
    <el-button @click="count++">+</el-button>
  </div>
</template>