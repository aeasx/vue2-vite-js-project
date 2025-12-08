<script>
export default {
  name: "ListRender",
  data: function () {
    return {
      sets: [[1, 2, 3, 4, 5], [17, , 29, 26, 7, 8, 9]],
      list: [
        { msg: 'hello', id: 1 },
        { msg: 'Foo', id: 2 },
        { msg: 'Bar', id: 3 },
      ],
      responseItems: ['a', 'b', 'c']
    }
  },
  computed: {
  },
  methods: {
    even: function (lists) {
      return lists.filter(f => f % 2 !== 0)
    },
    onUpdateItems: function () {
      // splice will update origin array
      this.responseItems.splice(0, 1, 'Dear')
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
    <ul>
      <li v-for="item in list" :key="item.id">{{ item.msg }}</li>
    </ul>
    <div>
      <div v-for="rv in responseItems">
        {{ rv }}
      </div>
    </div>
    <el-button @click="onUpdateItems">update responseItems[0]</el-button>
  </div>
</template>