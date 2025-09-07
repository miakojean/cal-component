<template>
  <button class="tool__btn">
    Exporter liste
    <i class="ri-download-2-line"></i>
  </button>
</template>

<script>
export default {

}
</script>

<style scoped>
.tool__btn{
    border: 1px solid #ccc;
    padding: 0.5rem;
    max-width: 200px;
    display: flex;
    gap: 0.5rem;
    font-size: 0.9rem;
    border-radius: 0.3rem;
}

.tool__btn:hover{
    cursor: pointer;
    background: #dbdbdb;
    border: 1px solid #c6c8ca;
}
</style>