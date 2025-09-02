<template>
  <div class="timeline-container">
    <h2>🕒 Timeline d'enregistrement</h2>
    <ul class="timeline">
      <li v-for="(step, index) in registrationSteps" :key="index" :class="{ completed: step.completed }">
        <div class="step-indicator">{{ index + 1 }}</div>
        <div class="step-content">
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
          <span v-if="step.timestamp" class="timestamp">📅 {{ formatDate(step.timestamp) }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const registrationSteps = ref([
  {
    title: 'Création du compte',
    description: 'L\'utilisateur a soumis le formulaire d’inscription.',
    completed: true,
    timestamp: '2025-09-01T20:45:00Z',
  },
  {
    title: 'Validation email',
    description: 'L’utilisateur a confirmé son adresse email.',
    completed: true,
    timestamp: '2025-09-01T20:50:00Z',
  },
  {
    title: 'Profil complété',
    description: 'Les informations personnelles ont été ajoutées.',
    completed: false,
    timestamp: null,
  },
  {
    title: 'Affectation à une école',
    description: 'L’utilisateur est lié à un tenant spécifique.',
    completed: false,
    timestamp: null,
  },
])

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleString('fr-FR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}
</script>

<style scoped>
.timeline-container {
  max-width: 600px;
  margin: auto;
  font-family: 'Segoe UI', sans-serif;
}

.timeline {
  list-style: none;
  padding: 0;
  margin: 0;
}

.timeline li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  position: relative;
  padding-left: 40px;
}

.step-indicator {
  position: absolute;
  left: 0;
  top: 0;
  background-color: #ccc;
  color: white;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  text-align: center;
  line-height: 28px;
  font-weight: bold;
}

.completed .step-indicator {
  background-color: #4caf50;
}

.step-content h3 {
  margin: 0;
  font-size: 1.1em;
}

.timestamp {
  font-size: 0.85em;
  color: #666;
}
</style>
