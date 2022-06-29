<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{userLocation}}</p>
    <p>{{userGeolocation}}</p>
    <el-button @click="handleprimary" type="primary">Primary</el-button>
    <el-button @click="handlesuccess" type="success">Success</el-button>
    <el-button @click="handleinfo" type="info">Info</el-button>
    <el-button @click="handlewarning" type="warning">Warning</el-button>
    <el-button @click="handledanger" type="danger">Danger</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  inject: ['location', 'geolocation'],
  props: {
    msg: String
  },
  // setup
  setup (props, contxt) {
    console.log(props.msg, '组件')
    console.log(contxt, '组件')
    const userLocation = inject('location', 'The Universe')
    const userGeolocation = inject('geolocation')
    return {
      userLocation,
      userGeolocation
    }
  },
  methods: {
    handleprimary () {
      console.log('Primary')
    },

    handlesuccess () {
      console.log('success')
    },
    handleinfo () {
      console.log('info')
    },
    handlewarning () {
      console.log('warning')
    },
    handledanger () {
      console.log('danger')
    }

  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
