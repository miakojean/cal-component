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
            default:'inscription'
        }
    }

}
</script>

<style scoped>
button {
    background: #2f80edff;
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 1rem;
    font-weight: 500;
    width:100%;
    max-width:300px;
    transition: 0.7s ease-in-out;
    cursor:pointer;
}

button:hover{
    border-radius: 1rem;
    transition: 0.5s ease-in;
    background: rgb(29, 81, 148);
}
</style>