<template>
  <div class="input__family">
    <label :for="id">{{ label }}</label>
    <div class="input__wrapper">
      <input
        :id="id"
        :type="inputType"
        :placeholder="placeholder"
        v-model="modelValue"
        :class="{'input-filled': modelValue !== ''}"
        class="input__field"
      />
      <button
        v-if="type === 'password'"
        type="button"
        class="toggle__btn"
        @click="toggleVisibility"
        :aria-label="inputType === 'password' ? 'Afficher le mot de passe' : 'Masquer le mot de passe'"
      >
        {{ inputType === 'password' ? '👁️' : '🙈' }}
      </button>
    </div>
  </div>
</template>

<script>
import { ref, watch, computed } from 'vue';

export default {
  props: {
    label: { type: String, required: true, default: 'Nom de famille' },
    type: { type: String, default: 'text' },
    name: { type: String, required: true, default: 'inputName' },
    id: { type: String, default: 'inputId' },
    placeholder: { type: String, default: 'Entrez votre nom de famille' }
  },

  emits: ['update:modelValue'],

  setup(props, { emit }) {
    const modelValue = ref('');
    const showPassword = ref(false);

    const inputType = computed(() =>
      props.type === 'password' ? (showPassword.value ? 'text' : 'password') : props.type
    );

    const toggleVisibility = () => {
      showPassword.value = !showPassword.value;
    };

    watch(modelValue, (newValue) => {
      emit('update:modelValue', newValue);
    });

    return { modelValue, inputType, toggleVisibility };
  }
};
</script>

<style scoped>
.input__family {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  gap: 0.5rem;
}

.input__wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input__field {
  width: 100%;
  padding: 0.5rem 2.5rem 0.5rem 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.toggle__btn {
  position: absolute;
  right: 0.5rem;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}
</style>
