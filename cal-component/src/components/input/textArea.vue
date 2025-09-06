<template>
  <div class="input__family">
    <label :for="label">{{ label }}</label>
    <textarea :id="label" 
    v-model="inputValue" 
    :placeholder="placeholder"
    rows="4"
    @change="updateValue"></textarea>
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
    placeholder: {
      type: String,
      default: "Entrer la description"
    }
  }

}
</script>

<style>

</style>