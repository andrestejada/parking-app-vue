<template>
    <div>
    <q-toolbar class="bg-secondary text-white">
      <q-avatar>
        <q-icon name="local_parking" />
      </q-avatar>

      <q-toolbar-title data-testid="title" >Parking App</q-toolbar-title>

      <q-btn flat round dense icon="logout" label="Cerrar Sesión" />
    </q-toolbar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'vuex'

export default defineComponent({
  name: 'Navbar',
})
</script>
