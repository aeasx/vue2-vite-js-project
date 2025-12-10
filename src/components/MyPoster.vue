<script>
export default {
  name: 'my-poster',
<<<<<<< HEAD
  props: ['post'],
  emits: ['enlargeSize'],
=======
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
>>>>>>> 1a50e1913eef735f2bdfee531b9dabb3aa2bd9f3
  data: function () {
    return {
      exampleList: [1, 2, 3, 4, 5]
    }
  }
}
</script>
<template>
  <div>
<<<<<<< HEAD
    <button @click="$emit('enlargeSize', 0.2, 0.3, 0.4, 0.5)">enlarge fontSize</button>
=======
    <div>title: {{ title }}</div>
    <div>likes: {{ likes }}</div>
    <div>isPublished: {{ isPublished }}</div>
    <div>commentIds: {{ commentIds }}</div>
>>>>>>> 1a50e1913eef735f2bdfee531b9dabb3aa2bd9f3
  </div>
</template>

<style lang="scss" scoped>
$main_color: #75e7ac;

.header_title {
  color: $main_color;
}
</style>