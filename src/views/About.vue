<script>
import { MyPoster } from "@/components";
export default {
  name: 'About',
  // 局部注册组件
  components: {
    'my-poster': MyPoster
  }
}
</script>
<template>
  <div>
    <div>你好</div>
    <my-poster title="my journey with vue" />
  </div>
</template>