<script>
import { MyModal } from '@/components';
export default {
  name: 'About',
  components: {
    'my-modal': MyModal
  }
}
</script>
<template>
  <div>
    <div>你好</div>
    <my-modal />
  </div>
</template>