<script>
export default {
  name: 'button_counter',
  data() {
    return {
      count: 0,
      answer: null
    }
  },
  watch: {
    answer: function (newAnswer, oldAnswer) {
      console.log('newAnswer', newAnswer)
      console.log('oldAnswer', oldAnswer)
    }
  },
  methods: {
    increment: function () {
      this.count++
    }
  }
}
</script>
<template>
  <div>
    <button @click="increment">clicked {{ count }} times</button>
    <label>
      please enter your answer: <input v-model="answer" placeholder="please enter..."></input>
    </label>
  </div>
</template>
