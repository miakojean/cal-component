<template>
    <ul class="academic__list">
      <li v-for="(item, index) in list"
      :key="index">{{ item }}</li>
    </ul>
</template>

<script>
export default {

  props:{
    list:{
      type:Array,
      default: () => [
        "2020-2021",
        "2021-2022",
        "2023-2024",
        "2024-2025"
      ]
    }
  }

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