<template>
    <button 
        type="submit" 
        class="main-button"
        :style="{ maxWidth: maxWidth }"
    >
        {{ label }}
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'MainButton',
    
    props: {
        label: {
            type: String,
            default: 'inscription'
        },
        maxWidth: {
            type: String,
            default: '400px'
        }
    }
})
</script>

<style scoped>
.main-button {
    background: #2f80ed;
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 1rem;
    font-weight: 500;
    width: 100%;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}

.main-button:hover {
    border-radius: 0.2rem;
    background: rgb(29, 81, 148);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(47, 128, 237, 0.3);
}

.main-button:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(47, 128, 237, 0.2);
}

.main-button:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
}
</style>