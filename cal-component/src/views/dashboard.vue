<template>
  <main>
    <sidebar/>
    <div class="dashboard__section">
      <navbar/>
      <dashboardTools/>
      <studentList/>
    </div>
  </main>
</template>

<script>
import sidebar from '../components/dashboard/sidebar.vue';
import studentList from '../components/section/studentList.vue';
import navbar from '@/components/nav/navbar.vue';
import dashboardTools from '@/components/dashboard/dashboardTools.vue';

export default {

  components: {
    sidebar,
    studentList,
    navbar,
    dashboardTools
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