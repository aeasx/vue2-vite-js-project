<script>
export default {
  name: "ListRender",
  data: function () {
    return {
      sets: [[1, 2, 3, 4, 5], [17, , 29, 26, 7, 8, 9]]
    }
  },
  methods: {
    even: function (lists) {
      return lists.filter(f => f % 2 !== 0)
    }
  }
}
</script>
<template>
  <div>
    <ul>
      <li v-for="set in sets">
        <span v-for="(v, i) in even(set)">{{ i + 1 }}----{{ v }} <br></span>
      </li>
    </ul>
  </div>
</template>