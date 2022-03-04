<template>
  <div class="row" >
    <div class="col-12 col-sm-6">
      <FormParking/>
    </div>
    <div class="col-12 col-sm-6">
      <VehiclesList/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FormParking from '../components/FormParking/FormParking.vue'
import VehiclesList from '../components/VehiclesList/VehiclesList.vue'

export default defineComponent({
  components:{
    FormParking,
    VehiclesList: VehiclesList
  },  
  setup() {
    
  },
})
</script>

