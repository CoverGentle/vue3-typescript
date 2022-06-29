<template>
  <div class="about">
    <h1>This is an about page</h1>

  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUpdated, onUnmounted } from 'vue'

export default defineComponent({
  name: 'helloword',

  setup () {
    // 生命周期
    onMounted(() => {
      console.log('Component is mounted!')
    })
    onUpdated(() => {
      console.log('Component is onUpdated!')
    })
    onUnmounted(() => {
      console.log('Component is mounted!')
    })

    // 响应性
    // 子传父
  }
})
</script>
