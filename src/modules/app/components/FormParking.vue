<template>
 <div class="form-container" >
   <h4 class="text-h4 q-mb-sm" >Ingresar Vehiculo</h4>
   <q-separator  color="secondary" size="3px" class="q-mb-lg" />
   <q-form
    @submit.prevent="onSubmit"
    class="q-gutter-md"
  >
  <q-select v-model="formValues.vehiculeType" :options="['Moto','Carro']" type="text" label="Tipo de Vehiculo" />
  <q-input v-model="formValues.plate"  type="text" label="Placa" />
  <q-btn color="secondary" icon="check" label="Ingresar" />
  </q-form>
 </div>
  
</template>

<script lang="ts">
interface FormValues {
  plate:string,
  vehiculeType:string
}
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    
    const initialValues:FormValues={
      plate:'',
      vehiculeType:''
    }
    const formValues = ref<FormValues>({...initialValues})
    return{
      formValues,
      onSubmit:()=>{

      }
    }
  },
})
</script>

<style>
  .form-container{
    padding: 1em;
  }
</style>