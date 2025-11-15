<script>
export default {
  name: "EventHandle",
  data: function () {
    return {
      str: 'hello,world!'
    }
  },
  methods: {
    greet: function (event) {
      alert(this.str)
      if (event) {
        console.dir(event.target);
      }
    },
    say: function (msg) {
      alert(msg)
    }
  }
}
</script>
<template>
  <div>
    <h2>EventHandle {{ str }}</h2>
    <button @click="greet">Click me!</button>
    <ul class="box">
      <button @click="say('hi')">say hi!</button>
      <button @click="say('what?')">say what?</button>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.box {
  display: flex;
  column-gap: 30px;
}
</style>