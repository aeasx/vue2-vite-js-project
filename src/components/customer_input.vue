<script>
export default {
  name: 'customer_input',
  props: ['value']
}
</script>
<template>
  <div>
    <input type="text" placeholder="please enter ..." :value="value" @input="$emit('input', $event.target.value)">
  </div>
</template>