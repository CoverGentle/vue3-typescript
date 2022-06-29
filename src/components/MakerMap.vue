<template>
  <el-button type="primary" @click="handleClick">Primary</el-button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup (props, { emit }) {
    const labelId = false
    console.log('子组件向父组件传值')
    const handleClick = () => {
      emit('getLabelId', labelId)
    }
    return {
      handleClick
    }
  }
})
</script>
<style lang="less">

</style>
