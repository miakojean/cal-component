<template>
  <div class="">
    <school-folder-section/>
  </div>
</template>

<script lang="ts">

// ce composant est lié à la gestion d'école on va juste afficher

import dashboardTools from '../dashboard/dashboardTools.vue';
import addButton from '../Button/addButton.vue';
import emptySectionComponent from './emptySectionComponent.vue';
import schoolFolderSection from './schoolFolderSection.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components:{
    dashboardTools,
    addButton,
    emptySectionComponent,
    schoolFolderSection
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