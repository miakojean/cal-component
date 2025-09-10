<template>
  <div class="sous-url">
    <h2>Détails de la classe</h2>
    <p>École ID : {{ ecoleId }}</p>
    <p>Classe ID : {{ classeId }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const ecoleId = route.params.id
const classeId = route.params.classeId
</script>

<style scoped>
.sous-url {
  padding: 1rem;
  background-color: #eef;
  border-radius: 8px;
}
</style>
