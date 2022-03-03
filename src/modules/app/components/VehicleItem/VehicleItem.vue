<template>
  <q-card class="q-mt-sm q-mb-sm">
    <q-card-section>
      <div class="row items-center">
        <h6 class="text-h6">Tipo de vehiculo:</h6>
        <p class="text-body1 q-ml-sm">{{ vehicle.vehiculeType }}</p>
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
        // console.log('>>>> OK')
      }).onOk(() => {
        // console.log('>>>> second OK catcher')
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
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

<style scoped>
.card-title {
  margin: 0;
}
</style>
