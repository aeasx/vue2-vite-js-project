<script>
export default {
  name: 'Home',
  data: function () {
    return {

    }
  },
  computed: {

  },
  methods: {
  }
}
</script>
<template>
  <div>
    <h1>Home View</h1>
    <div class="flex_fu">
      <div class="flex_child">1</div>
      <div class="flex_child exc_shrink">2</div>
      <div class="flex_child">3</div>
      <div class="flex_child">4</div>
      <div class="flex_child">5</div>
      <div class="flex_child">6</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$baseHeight: 30;

.flex_fu {
  display: flex;
  align-items: end;
  min-width: 700px;
  max-width: 1200px;
  height: 300px;
  background-color: rgb(230, 230, 43);

  .flex_child {
    flex-basis: 300px;
    height: 60px;
    flex-shrink: 1;
    background-color: indianred;

    @for $i from 1 through 6 {
      &:nth-child(#{$i}) {
        height: $baseHeight * $i * 1px;
      }
    }
  }

  .exc_shrink {
    // 以0.5倍率的搜索比率进行收缩，造成的结果就是flex-item元素都收缩时，该元素收缩的速率
    // 是其他元素的 0.5 被，这个元素看起来比其他元素更宽。
    // 若flex-shrink属性设置为0，表示此元素不会进行收缩
    flex-shrink: 0.5 !important;
    background-color: pink;
  }
}
</style>