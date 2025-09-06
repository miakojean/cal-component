<template>
  <main>
    <sidebar/>
    <studentList/>
  </main>
</template>

<script>
import sidebar from '../components/dashboard/sidebar.vue';
import schoolRegistrationForm from '../components/form/schoolRegistrationForm.vue';
import studentList from '../components/section/studentList.vue';

export default {

  components: {
    sidebar,
    schoolRegistrationForm,
    studentList
  }

}
</script>

<style>

</style>