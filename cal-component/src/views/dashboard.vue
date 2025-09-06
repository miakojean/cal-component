<template>
  <main>
    <sidebar/>
    <schoolRegistrationForm/>
  </main>
</template>

<script>
import sidebar from '../components/dashboard/sidebar.vue';
import schoolRegistrationForm from '../components/form/schoolRegistrationForm.vue';
export default {

  components: {
    sidebar,
    schoolRegistrationForm
  }

}
</script>

<style>

</style>