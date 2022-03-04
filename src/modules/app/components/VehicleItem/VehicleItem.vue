<template>
  <q-card class="q-mt-sm q-mb-sm">
    <q-card-section>
      <div class="row items-center">
        <h6 class="text-h6">Tipo de vehiculo:</h6>
        <p class="text-body1 q-ml-sm">{{ vehicle.vehiculeType }}</p>
        <q-icon size="1.5rem" :name="vehicle.vehiculeType==='Moto' ?'two_wheeler':'directions_car' " />
      </div>
      <div class="row items-center">
        <h6 class="text-h6">Placa:</h6>
        <p class="text-body1 q-ml-sm">{{ vehicle.plate }}</p>
      </div>
      <div class="row items-center">
        <h6 class="text-h6">Fecha de Ingreso:</h6>
        <p class="text-body1 q-ml-sm">{{ entryDate }}</p>
      </div>
      <q-btn
        @click="confirm"
        color="secondary"
        class="full-width"
        icon-right="paid"
        label="Cobrar"
      />
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { useQuasar } from "quasar";
import { computed, defineComponent, PropType } from "vue";
import { useStore } from "vuex";
import { Vehicle } from "../../interfaces/index";
import { calculateRate } from "../../utils/calculateRate";

export default defineComponent({
  props: {
    vehicle: {
      type: Object as PropType<Vehicle>,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const $q = useQuasar();

    function confirm () {
      $q.dialog({
        title: `El valor a pagar el vehiculo con placas ${props.vehicle.plate} es $ ${calculateRate(props.vehicle.entryDate,props.vehicle.vehiculeType)}`,
        message: 'Esta seguro que deseas confirmar que el cliente realizo el pago?',
        cancel: {
          push:true,
          color:'negative'
        },
        ok: {
          push: true
        },
        persistent: true,
      }).onOk(() => {
        store.dispatch('vehicles/removeVehicle',props.vehicle)
      })      
    }
    return {
      entryDate: computed(() =>
        new Date(props.vehicle.entryDate).toLocaleDateString("es-CO", {
          hour: "2-digit",
          minute: "2-digit",
        })
      ),
      confirm,
    };
  },
});
</script>
