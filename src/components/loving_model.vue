<script>
export default {
  name: 'loving_model',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
}

</script>
<template>
  <div>
    <h1>loving_model</h1>
    <label>
      <input type="checkbox" :checked="checked" @change="$emit('change', $event.target.checked)"></input>
      <span>customer_model_input</span>
    </label>
  </div>
</template>