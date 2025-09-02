<template>
  <div class="timeline-container">
    <ul>
      <li v-for="item in steps" :key="item.id" :class="getStepClass(item.id)">
        <div class="step-circle">{{ item.id }}</div>
        <div class="step-title">
          <h4>{{ item.title }}</h4>
          <p>{{ item.subtitle }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

interface Step {
  id: number;
  title: string;
  subtitle: string;
}

export default defineComponent({
  name: 'RegistrationTimeline',
  props: {
    currentStep: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const steps: Step[] = [
      { id: 1, title: 'Étape 1', subtitle: 'Infos Personnelles' },
      { id: 2, title: 'Étape 2', subtitle: 'Coordonnées' },
      { id: 3, title: 'Étape 3', subtitle: 'Sécurité du compte' }
    ];

    const getStepClass = (stepId: number): string => {
      if (stepId < props.currentStep) {
        return 'timeline-step active completed';
      }
      if (stepId === props.currentStep) {
        return 'timeline-step active';
      }
      return 'timeline-step'; // Upcoming step
    };

    return {
      steps,
      getStepClass
    };
  }
});
</script>

<style scoped>
.timeline-container {
  width: 300px;
  padding: 2rem;
  border-right: 1px solid #e0e0e0;
}

.timeline-container ul {
  list-style-type: none;
  padding: 0;
  position: relative;
}

/* Vertical connecting line */
.timeline-container ul::before {
  content: '';
  position: absolute;
  top: 15px;
  left: 15px;
  width: 2px;
  height: calc(100% - 30px);
  background-color: #e0e0e0;
  z-index: 1;
}

.timeline-step {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
}

.step-circle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #f0f0f0;
  color: #888;
  border: 2px solid #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin-right: 1rem;
  transition: background-color 0.3s, border-color 0.3s;
}

.step-title h4, .step-title p {
  margin: 0;
  color: #888;
  transition: color 0.3s;
  text-align: start;
}

.step-title h4 {
  font-size: 1rem;
  font-weight: 600;
}

.step-title p {
  font-size: 0.9rem;
}

/* Active State */
.timeline-step.active .step-circle {
  background-color: #007bff;
  border-color: #007bff;
  color: #fff;
}

.timeline-step.active .step-title h4,
.timeline-step.active .step-title p {
  color: #000;
  font-weight: bold;
}

/* Completed State */

.timeline-step.completed .step-title h4,
.timeline-step.completed .step-title p {
  color: #333;
}

/* Checkmark for completed steps */
.timeline-step.completed .step-circle::after {
  content: '✔';
  font-size: 1.2rem;
  color: #fff;
}

.timeline-step.completed .step-circle {
  font-size: 0; /* Hide number when checkmark is shown */
}
</style>