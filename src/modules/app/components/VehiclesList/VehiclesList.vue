<template>
<div class="vehicules-container">
  <h4 class="text-h4 q-mb-sm">Vehiculos Parqueados</h4>
  <q-separator  color="secondary" size="3px" class="q-mb-lg" />
  <ul class="container-vehicles-list" >
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

  .container-vehicles-list{
    overflow-y: scroll;
    height: 420px;
    padding: 5px;

    &::-webkit-scrollbar{
      background-color: transparent;
      width: 10px;

    }

    &::-webkit-scrollbar-thumb{
      border-radius: 10px;
      background-color:#26A69A;
    }
  }


</style>