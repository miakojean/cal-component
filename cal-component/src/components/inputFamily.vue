<template>
  <div class="input__family">
    <label :for="id">{{ label }}</label>
    <input
        :id="id" 
        :type="type" 
        :placeholder="placeholder"
        v-model="modelValue"
        :class="{'input-filled': modelValue !== ''}"

    />
</div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
    props: {
        label: {
            type: String,
            required: true,
            default: 'Nom de famille'
        },
        type: {
            type: String,
            default: 'text'
        },
        name: {
            type: String,
            required: true,
            default: 'inputName'
        },
        id:{
            type: String,
            default: 'inputId'
        },
        placeholder: {
            type: String,
            default: 'Entrez votre nom de famille'
        },

    },

    emits: ['update:modelValue'],

    setup(props, { emit }) {

        const modelValue = ref('');

        watch(modelValue, (newValue) => {
            emit('update:modelValue', newValue);
        });

        return { modelValue  };

    }
}
</script>

<style scoped>
.input__family {
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  max-width: 400px;
  gap: 1rem;
}

.input__field {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.input__field:focus {
  outline: none;
  border-color: steelblue;
}
</style>