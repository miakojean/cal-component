<template>
  <section>
    <h3 class="school__section__title">Mes écoles</h3>
    <DashboardTools 
      addButtonLabel="Ajouter école"
      placeholder="Trouver une école"
    />
    <div class="main__folder__container">
    <div class="school_folder" 
      v-for="(school, index) in schools"
      :key="index"
      @click="() => goToSchool(school, school.id)"
    >
      <i class="ri-folders-line"></i>
      <h4>{{ school.name }}</h4>
    </div>
  </div>
  </section>
</template>

<script>

import cardSchool from '../cards/cardSchool.vue';
import DashboardTools from '../dashboard/dashboardTools.vue';
import { useRouter } from 'vue-router';
import { getOwnerSchool } from '@/_services/schoolservices';
import { onMounted, ref } from 'vue';

export default {

  components:{
    cardSchool,
    DashboardTools
  },

  emits:['school-empty'],

  setup(props, {emit}){
    const router = useRouter();
    
    const schooId = ref(null);
    
    const goToSchool = (school, school_id) => {
      router.push({ 
        name: 'school-name', 
        params: { 
          name: school.name, // Pour l'URL
        },
      });
      schooId.value = sessionStorage.setItem("school_id", school_id)
    };

    const schools = ref([]);

    const getSchool = async() => {
      try{
        const response = await getOwnerSchool();
        if(response && response.data && response.data.schools) {
          schools.value = response.data.schools
          if (schools.value.length === 0) {
            emit('school-empty');
          } else {
            emit('school-empty');
          }
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des écoles:", error);
        emit('school-empty');
      }
    }

    onMounted(getSchool)

    return {router, schooId, goToSchool, schools, getSchool}
  }

}
</script>

<style scoped>

.main__folder__container{
  display: flex;
  flex-flow: wrap;
  gap: 1rem;
  justify-content: center;
}
.school_folder {
  border: 1px dashed gray;
  padding: 1rem;
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  transition: ease-in-out 0.3s;
}

.school_folder:hover{
  cursor: pointer;
  background: #eeeeee;
  transition: ease-in-out 0.2s;
}

.school_folder i{
  font-size: 3.5rem;
  color: var(--primary-color)
}

.school__section__title{
  font-size: 1.2rem;
  color: var(--primary-color);
}
</style>