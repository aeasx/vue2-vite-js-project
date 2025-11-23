<script>
import { EventHandle, StyleBind } from '@/components';
export default {
  name: 'Home',
  components: { EventHandle, StyleBind, },
  data: function () {
    return {
    }
  },
  computed: {
    storeItems() {
      return this.$store.state.items
    },
    doneTodos() {
      return this.$store.getters.doneTodos
    },
  },
  methods: {
    todoById(id) {
      return this.$store.getters.getTodoById(id)
    }
  }
}
</script>
<template>
  <div>
    <h1>Home View</h1>
    <div>{{ storeItems }}</div>
    <p>doneTodosCount: {{ JSON.stringify(doneTodos, null, 2) }}</p>
    <el-divider />
    <p>{{ todoById(2) }}</p>
    <my-poster posterTitle="global register poster components" />
  </div>
</template>