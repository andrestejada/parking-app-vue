<template>
  <div class="form-container">
    <h4 class="text-h4 q-mb-sm">Ingresar Vehiculo</h4>
    <q-separator color="secondary" size="3px" class="q-mb-lg" />
    <q-form @submit.prevent="onSubmit" class="q-gutter-md">
      <q-select
        v-model="formValues.vehiculeType"
        :options="['Moto', 'Carro']"
        type="text"
        label="Tipo de Vehiculo"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Este campo es requerido']"
      />
      <q-input        
        v-model="formValues.plate"
        maxlength="6"
        type="text"
        label="Placa"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Este campo es requerido',
          isValitePlate,
        ]"
      />
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

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { FormValues } from "../interfaces";
import { isValitePlate } from "../utils/plateValidation";



export default defineComponent({
  setup() {
    const store = useStore();
    const initialValues: FormValues = {
      plate: "",
      vehiculeType: "",
    };

    const formValues = ref<FormValues>({ ...initialValues });
    return {
      isValitePlate,
      formValues,
      onSubmit:() => {
        store.dispatch('vehicles/saveVehicles',formValues.value)
      },
    };
  },
});
</script>

<style>
.form-container {
  padding: 1em;
}
</style>
