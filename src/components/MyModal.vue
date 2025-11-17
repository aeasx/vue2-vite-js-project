<script>
const successRes = {
  total: 4,
  list: [
    { id: 1, title: 'Cordeiro De Nanã', desc: '这是Polo and Pan一首叫《Nana》的歌里的歌词。他们基本上是把Os Tincoas的一首歌《Cordeiro de Nana》混进去了。' },
    { id: 2, title: 'Midnight City', desc: '经典的电子音乐作品，以其独特的旋律和节奏感著称，让人仿佛置身于不夜城的霓虹灯下。' },
    { id: 3, title: 'Blinding Lights', desc: '充满活力的流行歌曲，复古的合成器音效与现代节拍完美融合，带来强烈的听觉冲击。' },
    { id: 4, title: 'Shape of You', desc: '朗朗上口的流行舞曲，融合了热带浩室音乐元素，是全球范围内的热门单曲。' }
  ]
}
const failRes = { total: 0, list: [] }
export default {
  name: 'MyModal',
  data: function () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    openDialog() {
      this.dialogVisible = true
    },
    fetchMockData() {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (Math.random() > 0.5) {
            resolve(successRes)
          } else {
            resolve(failRes)
          }
        }, 100);
      })
    }
  },
  mounted() {
    // 检查是否已经显示过欢迎弹窗
    const hasShownWelcome = sessionStorage.getItem('hasShownWelcomeModal')
    if (!hasShownWelcome) {
      this.fetchMockData().then(res => {
        console.log("🚀 ~ res:", res)
        if (res.total > 0 || res.list.length > 0) {
          this.dialogVisible = true
          // 标记为已显示过的
          sessionStorage.setItem('hasShownWelcomeModal', 'true')
        }
      })
    }
  }
}
</script>
<template>
  <div>
    <h1>MyModal</h1>
    <!-- <el-button type="primary" @click="openDialog">open dialog</el-button> -->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" top="10vh">
      <span>默认插槽：这是一段信息</span>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped></style>