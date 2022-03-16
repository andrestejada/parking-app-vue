<template>
  <div class="form-container">
    <h4 role="ingresa-vehiculo" class="text-h4 q-mb-sm">Ingresar Vehiculo</h4>
    <q-separator color="secondary" size="3px" class="q-mb-lg" />
    <q-form @submit.prevent="onSubmit" class="q-gutter-md" ref="form" @reset="onReset" >
      <q-select
        v-model="formValues.vehiculeType"
        :options="['Moto', 'Carro']"
        type="text"
        label="Tipo de Vehiculo"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Este campo es requerido']"
      />
      <q-input
        id="tipoDeVehiculo"
        v-model="formValues.plate"
        class="text-uppercase"
        maxlength="6"
        type="text"
        label="Placa"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Este campo es requerido',
          isValitePlate,
        ]"
      />

      <div v-if="msgError" inline-actions class="text-white bg-red q-pa-md text-center">
        {{msgError}}
      </div>

      <div>
        <q-btn
          type="submit"
          color="secondary"
          icon="check"
          label="Ingresar"
          class="full-width"
        />
      </div>
    </q-form>
  </div>
</template>

<script lang="ts" >
import { defineComponent, ref } from "vue";
import {  useStore } from "vuex";
import { FormValues } from "../../interfaces";
import { isValitePlate } from '../../utils/plateValidation';
import { availableCellBikes, availableCellCars } from "../../utils/FormValidations";
import { useQuasar } from "quasar";

export default defineComponent({
  setup() {
    const $q = useQuasar();
    const store = useStore();
    const msgError = ref("");
    const initialValues: FormValues = {
      plate: "",
      vehiculeType: "",
    };
    const form = ref()
    const formValues = ref<FormValues>({ ...initialValues });
    return {
      form,
      formValues,
      msgError,
      onReset:()=> formValues.value = {...initialValues},
      isValitePlate,
      onSubmit: () => {
        formValues.value.plate = formValues.value.plate.toUpperCase();

        msgError.value=''

        if(formValues.value.vehiculeType === "Moto" ){
          const isAvalibleCellsBikes = availableCellBikes(store.state.vehicles.cellsBikesInUse);        
          if (!isAvalibleCellsBikes) {
            msgError.value = "No hay celdas disponibles para motos";
            return;
          }
        }

        if(formValues.value.vehiculeType ==="Carro"){
          const isAvailableCellCars = availableCellCars(store.state.vehicles.cellsCarInUse);
          if(!isAvailableCellCars){
            msgError.value = "No hay celdas disponibles para carros";
            return;
          }
        }

        store.dispatch("vehicles/saveVehicles", formValues.value);
        msgError.value = '';
        $q.notify({
          message: 'EL Vehiculo se guardo Correctamente',
          color: 'secondary',
          timeout:3000,
        })
        form.value.resetValidation()
        form.value.reset()
      }
    };
  },
});
</script>

<style>
.form-container {
  padding: 1em;
}
</style>
