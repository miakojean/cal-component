<template>
  <div class="checkbox-container">
    <label class="checkbox-label">
      <input
        type="checkbox"
        :checked="modelValue"
        @change="handleChange"
        class="checkbox-input"
        :disabled="disabled"
      />
      <span class="checkmark" :class="{ checked: modelValue, disabled: disabled }"></span>
      <span v-if="label" class="checkbox-text">{{ label }}</span>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppCheckbox',
  
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  emits: ['update:modelValue', 'change', 'checked'],

  setup(props, { emit }) {
    const handleChange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      const isChecked = target.checked;
      
      emit('update:modelValue', isChecked);
      emit('change', isChecked);
      emit('checked', isChecked);
    };

    return {
      handleChange
    };
  }
});
</script>

<style scoped>
.checkbox-container {
  display: inline-block;
}

.checkbox-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 8px;
}

.checkbox-label:has(.checkbox-input:disabled) {
  cursor: not-allowed;
  opacity: 0.6;
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: relative;
  height: 20px;
  width: 20px;
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 4px;
  transition: all 0.2s ease;
  display: inline-block;
}

.checkmark.checked {
  background-color: #2196F3;
  border-color: #2196F3;
}

.checkmark.checked::after {
  content: "";
  position: absolute;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkmark.disabled {
  background-color: #f5f5f5;
  border-color: #ddd;
  cursor: not-allowed;
}

.checkbox-text {
  font-size: 14px;
  color: #333;
}

.checkbox-label:hover .checkmark:not(.disabled) {
  border-color: #2196F3;
}
</style>