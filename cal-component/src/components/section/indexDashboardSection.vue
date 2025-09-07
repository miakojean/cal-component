<template>
  <div class="">
    <emptySectionComponent/>
  </div>
</template>

<script lang="ts">
import dashboardTools from '../dashboard/dashboardTools.vue';
import addButton from '../Button/addButton.vue';
import emptySectionComponent from './emptySectionComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components:{
        dashboardTools,
        addButton,
        emptySectionComponent
    }
})
</script>

<style scoped>
.student__list {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1rem;
}

</style>