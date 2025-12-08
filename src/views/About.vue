<script>
import { MyPoster, ButtonCounter, ListRender, CustomerInput } from "@/components";
import { faker } from "@faker-js/faker";
export default {
  name: 'About',
  // 局部注册组件
  components: {
    'my-poster': MyPoster,
    'button-counter': ButtonCounter,
    'list-render': ListRender,
    'customer-input': CustomerInput,
  },
  data: function () {
    return {
      posts: [
        { id: 1, title: 'My journey with Vue', content: faker.lorem.sentence() },
        { id: 2, title: 'Blogging with Vue', content: faker.lorem.sentence() },
        { id: 3, title: 'Why Vue is so fun', content: faker.lorem.sentence() }
      ],
      postFontSize: 1.2,
      answer: '',
      tabs: ["button-counter", "list-render", "customer-input"],
      currentTab: 'button-counter'
    }
  },
  computed: {
  },
  methods: {
    onHandleEnlarge: function (size, ...args) {
      this.postFontSize += size;
      console.log(args);
    },
  }
}
</script>
<template>
  <div>
    <div>你好</div>
    <div class="tabs">
      <button v-for="tab in tabs" @click="currentTab = tab">{{ tab }}</button>
    </div>
    <component :is="currentTab" />
  </div>
</template>

<style lang="scss" scoped>
.tabs {
  display: flex;
  column-gap: 20px;
}
</style>