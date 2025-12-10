<script>
import { faker } from '@faker-js/faker';
export default {
  name: 'txt_document',
  emits: ['update:doc'],
  props: ['doc'],
  data: function () {
    return {
      // doc: faker.lorem.paragraphs(),
    }
  }
}
</script>
<template>
  <div>
    <div>{{ doc }}</div>
    <el-button type="primary" @click="$emit('update:doc', $event)">change doc</el-button>
  </div>
</template>