<script>
export default {
  name: 'bootstrap_date_input',
  // 不希望组件的根元素继承父组件传递的属性
  inheritAttrs: false
}
</script>
<!-- 父组件传递的 data-date-picker 属性会自动添加到这个子组件的根元素上 -->
<!-- v-bind="$attrs" 此时子组件的根组件会继承父组件传递的属性 -->
<template>
  <label>
    请选择日期：
    <input type="date" class="form-control" v-bind="$attrs">
  </label>
</template>
<style lang="scss" scoped>
$main-color: #444;

.main {
  color: $main-color;
}
</style>