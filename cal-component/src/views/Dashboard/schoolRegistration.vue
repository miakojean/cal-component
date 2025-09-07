<template>
  <main>
    <sidebar/>
    <div class="dashboard__section">
      <navbar/>
      <schoolRegistrationForm />
    </div>
  </main>
</template>

<script>
import sidebar from '../../components/dashboard/sidebar.vue';
import studentList from '../../components/section/studentList.vue';
import navbar from '@/components/nav/navbar.vue';
import indexDashboardSection from '../../components/section/indexDashboardSection.vue';
import schoolRegistrationForm from '@/components/form/schoolRegistrationForm.vue';

export default {

  components: {
    sidebar,
    studentList,
    navbar,
    indexDashboardSection,
    schoolRegistrationForm    
  }

}
</script>

<style scoped>
.dashboard__section{
  display: flex;
  flex-direction: column;
  align-items: normal;
  height: 100%;

}
</style>