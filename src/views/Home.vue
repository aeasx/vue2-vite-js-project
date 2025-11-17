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
    }
  },
  methods: {
  }
}
</script>
<template>
  <div>
    <h1>Home View</h1>
    <div>{{ storeItems }}</div>
  </div>
</template>