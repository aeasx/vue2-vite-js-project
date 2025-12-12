<script>
import { faker } from "@faker-js/faker";
import { LovingModel, TxtDocument, BoostrapDateInput, TransitionTest, ax_button } from "@/components";
export default {
  name: 'About',
  // 局部注册组件
  components: {
    'loving_model': LovingModel,
    'txt_document': TxtDocument,
    'boostrap_date_input': BoostrapDateInput,
    'transition_test': TransitionTest,
    'ax-button': ax_button
  },
  data: function () {
    return {
      lovingVue: true,
      sentence: faker.lorem.sentence(),
      attrs: {
        placeholder: '请选择日期',
        required: true
      }
    }
  },
  computed: {

  },
  methods: {
    handleUpdateDoc: function () {
      this.sentence = faker.lorem.paragraphs();
    },
    handleClick: function (v) {
      console.log(`onclick!`, v);
    }
  }
}
</script>
<template>
  <div>
    <div>About View</div>
    <ax-button @click="handleClick">hi</ax-button>
    <transition_test />
  </div>
</template>

<style lang="scss" scoped></style>