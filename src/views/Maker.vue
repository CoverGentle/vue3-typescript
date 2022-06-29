<template>
  <p v-show="isMaker">maker</p>
  <MakerMap @getLabelId="getLabelId"></MakerMap>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MakerMap from '@/components/MakerMap.vue'
export default defineComponent({
  name: 'Maker',
  components: {
    MakerMap
  },
  setup (props) {
    console.log(props)
    let isMaker = true
    const getLabelId = (val:any) => {
      console.log(val)
      isMaker = val
    }
    return {
      getLabelId,
      isMaker
    }
  }
})

</script>
