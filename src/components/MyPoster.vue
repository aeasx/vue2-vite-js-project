<script>
export default {
  name: 'my-poster',
  // define property names and types 
  props: {
    title: {
      type: String,
      required: true
    },
    likes: Number,
    isPublished: Boolean,
    comments: Array,
    commentIds: Array,
    author: Object,
    callback: Function,
    contactPromise: Promise
  },
  data: function () {
    return {
      exampleList: [1, 2, 3, 4, 5]
    }
  }
}
</script>
<template>
  <div>
    <div>title: {{ title }}</div>
    <div>likes: {{ likes }}</div>
    <div>isPublished: {{ isPublished }}</div>
    <div>commentIds: {{ commentIds }}</div>
  </div>
</template>

<style lang="scss" scoped>
$main_color: #75e7ac;

.header_title {
  color: $main_color;
}
</style>