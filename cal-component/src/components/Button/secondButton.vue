<template>
    <button type="submit" class="main-button">
        {{ label }}
    </button>
</template>

<script>
export default {
    props:{
        label:{
            type:String,
            default:'suivant'
        }
    }
}
</script>

<style scoped>
button {
    background: #dddddd;
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    color: #111111;
    font-size: 0.9rem;
    font-weight: 600;
    width:100%;
    max-width:400px;
    transition: 0.3s ease-in-out;
    cursor:pointer;
}

button:hover{
    border-radius: 0.5rem;
    transition: 0.2s ease-in;
    background: rgb(107, 107, 107);
    color: white;
}
</style>