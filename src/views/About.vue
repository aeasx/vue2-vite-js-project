<script>
import { faker } from "@faker-js/faker";
import { LovingModel, TxtDocument, BoostrapDateInput } from "@/components";
export default {
  name: 'About',
  // 局部注册组件
  components: {
    'loving_model': LovingModel,
    'txt_document': TxtDocument,
    'boostrap_date_input': BoostrapDateInput
  },
  data: function () {
    return {
      lovingVue: true,
      sentence: faker.lorem.sentence(),
    }
  },
  computed: {

  },
  methods: {
    handleUpdateDoc: function () {
      this.sentence = faker.lorem.paragraphs();
    }
  }
}
</script>
<template>
  <div>
    <div>你好</div>
    <loving_model v-model="lovingVue" />
    <div>{{ lovingVue }}</div>
    <txt_document :doc="sentence" v-on:update:doc="handleUpdateDoc" />
    <boostrap_date_input />
  </div>
</template>

<style lang="scss" scoped>
.tabs {
  display: flex;
  column-gap: 20px;
}
</style>