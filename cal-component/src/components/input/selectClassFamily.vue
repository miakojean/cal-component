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
                // Préscolaire
                { value: "Crèche", matching: "CRE" },
                { value: "Garderie", matching: "GAR" },
                { value: "Maternelle Petite Section", matching: "MP" },
                { value: "Maternelle Moyenne Section", matching: "MM" },
                { value: "Maternelle Grande Section", matching: "MG" },

                // Primaire
                { value: "CP1", matching: "CP1" },
                { value: "CP2", matching: "CP2" },
                { value: "CE1", matching: "CE1" },
                { value: "CE2", matching: "CE2" },
                { value: "CM1", matching: "CM1" },
                { value: "CM2", matching: "CM2" },

                // Collège
                { value: "6ème", matching: "6E" },
                { value: "5ème", matching: "5E" },
                { value: "4ème", matching: "4E" },
                { value: "3ème", matching: "3E" },

                // Lycée
                { value: "Seconde", matching: "2ND" },
                { value: "Première", matching: "1ERE" },
                { value: "Terminale", matching: "TERM" },
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