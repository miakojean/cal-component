<template>
    <ul class="academic__list">
        <li>2020-2021</li>
        <li>2021-2022</li>
        <li>2023-2024</li>
        <li>2024-2025</li>
    </ul>
</template>

<script>
export default {

}
</script>

<style scoped>
.academic__list li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}

.academic__list li:hover{
  transform: scaleX(1.05);
  transition: 0.3s ease-in;
}

.academic__list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #007bff; /* Couleur de la barre verticale */
  border-radius: 2px;
}
</style>