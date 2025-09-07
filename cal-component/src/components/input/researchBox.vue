<template>
  <div class="input__family">
    <div class="input__password"
      :class="{
        'input-error': showError
      }"
    >
      <input
        :type="type"
        :id="inputId"
        :placeholder="placeholder"
        v-model="fieldInfo"
        @blur="handleBlur"
      />
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
      default: "Chercher un élève"
    },
    inputId: {
      type: String,
      default: 'username'
    },
    errorMessage: {
      type: String,
      default: 'Champs réquis*'
    },
    showValidation: {
      type: Boolean,
      default: false
    },
    type:{
      type:String,
      default: 'text'
    }
  },
  emits: ['update:modelValue', 'blur'],
  
  setup(props, { emit }) {
    const fieldInfo = ref(props.modelValue);
    const touched = ref(false);

    const showError = computed(() => {
      return props.showValidation && fieldInfo.value.trim() === '';
    });

    watch(() => props.modelValue, (newVal) => {
      fieldInfo.value = newVal;
    });

    watch(fieldInfo, (newVal) => {
      emit('update:modelValue', newVal);
    });

    const handleBlur = () => {
      touched.value = true;
      emit('blur');
    };

    return {
      fieldInfo,
      showError,
      handleBlur
    };
  }
};
</script>

<style scoped>
.input__family {
  display: flex;
  flex-direction: column;
  justify-content: start;
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