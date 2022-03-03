<template>
  <Navbar/>
  <MainContainer/>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '../components/Navbar/Navbar.vue'
import MainContainer from '../container/MainContainer.vue'

export default defineComponent({
  components: {
    Navbar,
    MainContainer
  }
})
</script>
