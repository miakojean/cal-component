<template>
  <div class="input__family">
    <label :for="label">{{ label }}</label>
    <select 
      :id="label"
      v-model="inputValue"
      @change="updateValue"
    >
      <option 
        v-for="(item, index) in options" 
        :key="index" 
        :value="item.matching"
      >
        {{ item.value }}
      </option>
    </select>
  </div>
</template>
  
<script>
  import { ref, watch } from 'vue';
  
  export default {
    props: {
      label: {
        type: String,
        default: "Je suis"
      },
      options: {
        type: Array,
        default: () => [
          {value:'Fondateur', matching:'FD'}, 
          {value:'Directeur', matching:'DR'}, 
          {value: 'Comptable', matching:"CT"},
          {value: 'Autre', matching: 'AUT'}
        ]
      },
      modelValue: {
        type: String,
        default: ''
      }
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
      const inputValue = ref(props.modelValue);
  
      // Met à jour la valeur parente quand inputValue change
      const updateValue = () => {
        emit('update:modelValue', inputValue.value);
      };
  
      // Synchronise inputValue si modelValue change depuis le parent
      watch(() => props.modelValue, (newVal) => {
        inputValue.value = newVal;
      });
  
      return {
        inputValue,
        updateValue
      };
    }
  }
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
</style>