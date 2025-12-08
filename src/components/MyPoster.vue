<script>
export default {
  name: 'my-poster',
  props: ['post'],
  emits: ['enlargeSize'],
  data: function () {
    return {
      exampleList: [1, 2, 3, 4, 5]
    }
  }
}
</script>
<template>
  <div>
    <div class="header_title">{{ post.title }}</div>
    <p class="header_title">{{ post.content }}</p>
    <button @click="$emit('enlargeSize', 0.2, 0.3, 0.4, 0.5)">enlarge fontSize</button>
  </div>
</template>

<style lang="scss" scoped>
$main_color: #75e7ac;

.header_title {
  color: $main_color;
}
</style>