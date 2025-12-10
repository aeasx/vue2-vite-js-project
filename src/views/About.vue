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
<<<<<<< HEAD
    <loving_model v-model="lovingVue" />
    <div>{{ lovingVue }}</div>
    <txt_document :doc="sentence" v-on:update:doc="handleUpdateDoc" />
    <boostrap_date_input />
=======
    <my-poster title="my journey with vue" />
>>>>>>> 1a50e1913eef735f2bdfee531b9dabb3aa2bd9f3
  </div>
</template>

<style lang="scss" scoped>
.tabs {
  display: flex;
  column-gap: 20px;
}
</style>