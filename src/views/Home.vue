<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <el-input v-model="location" placeholder="Please input" />
    <p>{{txt}}</p>
    <el-button @click="btn" type="primary">Primary</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, provide, reactive } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  setup (props, contxt) {
    console.log(this)
    console.log(props, 'props')
    console.log(contxt, 'contxt')
    const txt = ref('hello vue')
    const btn = () => {
      txt.value = '我爱 vue'
    }

    // provide('location', 'North Pole')
    // provide('geolocation', {
    //   longitude: 90,
    //   latitude: 135
    // })
    // const input = ref('')
    const location = ref('North super')
    const geolocation = reactive({
      location: 90,
      latitude: 290
    })
    provide('location', location)
    provide('geolocation', geolocation)

    return {
      txt,
      btn,
      location
    }
  }
  // provide 平常写法
  // provide: {
  //   location: 'North Pole',
  //   geolocation: {
  //     longitude: 90,
  //     latitude: 135
  //   }
  // }
})
</script>
