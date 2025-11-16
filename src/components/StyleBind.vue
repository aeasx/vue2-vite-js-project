<script>
export default {
  name: 'StyleBind',
  data: function () {
    return {
      isActive: false
    }
  },
  methods: {
    handleToggle() {
      return this.isActive = !this.isActive
    }
  }
}
</script>
<template>
  <div>
    <el-button type="primary" @click="handleToggle">Toggle</el-button>
    <div class="box" :style="{ backgroundColor: isActive ? 'green' : 'red' }">
      我是Box
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  width: 100px;
  height: 100px;
}

.active {
  background-color: rebeccapurple;
}

.danger {
  background-color: red;
}
</style>