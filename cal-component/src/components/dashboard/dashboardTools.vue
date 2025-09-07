<template>
  <div class="dashboard__tools">
    <addButton/>
    <researchBox/>
    <othersButton/>
  </div>
</template>

<script>
import addButton from '../Button/addButton.vue';
import othersButton from '../Button/othersButton.vue';
import researchBox from '../input/researchBox.vue';
export default {
    components:{
        addButton,
        researchBox,
        othersButton
    }
}
</script>

<style scoped>
.dashboard__tools{
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 2rem;
}
</style>