<script>
export default {
  name: 'my-poster',
  props: {
    posterTitle: {
      type: String,
      required: true
    }
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
    <h1>my-poster</h1>
    <div>{{ posterTitle }}</div>
  </div>
</template>