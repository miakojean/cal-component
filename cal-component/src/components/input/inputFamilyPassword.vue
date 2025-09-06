<template>
  <div class="input__family">
    <label :for="inputId">Mot de passe</label>
    <div class="input__password"
        :class="{
          'input-filled': password !=='',
          'input-error': showError
        }"
    >
      <input
        :type="isVisible ? 'text' : 'password'"
        :id="inputId"
        :placeholder="placeholder"
        v-model="password"
        @blur="handleBlur" 
      />
      <button
        type="button"
        class="toggle__btn"
        @click="toggleVisibility"
        :aria-label="isVisible ? 'Masquer le mot de passe' : 'Afficher le mot de passe'"
      >
        <i :class="isVisible ? 'ri-eye-off-line' : 'ri-eye-line'"></i>
      </button>
    </div>
    <p class="error__message" v-if="showError">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { ref, watch, computed } from 'vue';

export default {
  props: {
    modelValue: {
      type: String,
      default:""
    },
    placeholder: {
      type: String,
      default: "Entrer votre mot de passe"
    },
    inputId: {
      type: String,
      default: "password"
    },
    errorMessage: {
      type: String,
      default: 'Champs réquis*'
    },
    showValidation: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'blur'],
  setup(props, { emit }) {
    const isVisible = ref(false);
    const password = ref(props.modelValue);
    const touched = ref(false);

    const showError = computed(() => {
      return props.showValidation && password.value.trim() === '';
    });

    const toggleVisibility = () => {
      isVisible.value = !isVisible.value;
    };

    watch(() => props.modelValue, (newVal) => {
      password.value = newVal;
    });

    watch(password, (newVal) => {
      emit('update:modelValue', newVal);
    });

    const handleBlur = () => {
      touched.value = true;
      emit('blur');
    };

    return {
      isVisible,
      password,
      showError,
      toggleVisibility,
      handleBlur
    };
  }
};
</script>

<style scoped>
.input__family {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  max-width: 400px;
}

.input__password {
  position: relative;
  display: flex;
  align-items: center;
}

.input__password input {
  flex: 1;
  padding: 0.5rem 2.5rem 0.5rem 0.5rem;
  font-size: 0.9rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: ease-in 0.4s;
}

.input__password input:focus {
  border: 1px solid #007BFF;
  transition: ease-in 0.3s;
}

.toggle__btn {
  position: absolute;
  right: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-size: 1.2rem;
  color: #555;
}

.error__message {
  color: crimson;
  font-size: 0.85rem;
  width: 100%;
  text-align: left;
  margin: 0;
}

.input-error input {
  border-color: crimson;
  background-color: #ffe6e6;
}
</style>