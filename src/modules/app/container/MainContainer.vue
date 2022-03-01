<template>
  <div class="row" >
    <div class="col-12 col-sm-6">
      <FormParking/>
    </div>
    <div class="col-12 col-sm-6" style="background-color: blueviolet;height: 500px;" >
      col 2
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FormParking from '../components/FormParking.vue'
export default defineComponent({
  components:{
    FormParking
  },  
  setup() {
    
  },
})
</script>

