<template>
<div class="vehicules-container">
  <h4 class="text-h4 q-mb-sm">Vehiculos Parqueados</h4>
  <q-separator  color="secondary" size="3px" class="q-mb-lg" />
  <ul>
    <VehicleItem v-for="vehicle in allVehicles" :key="vehicle.id" :vehicle="vehicle" />
  </ul>
</div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import VehicleItem from '../VehicleItem/VehicleItem.vue'
export default defineComponent({
  name:'VehiculeList',
  components:{
    VehicleItem,
  },
  setup() {
    const store = useStore()
    store.dispatch('vehicles/getAllVehicles')
    console.log(store)
    return{
      allVehicles:computed(()=>store.getters['vehicles/getAllVehicles'])
    }
  },
})
</script>


<style scoped lang="scss">
  .vehicules-container{
    padding: 1em;
  }


</style>