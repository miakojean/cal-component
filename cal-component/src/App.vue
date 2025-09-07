<template> 
  <main>
    <router-view/>
  </main>
</template>

<script>
import mainButton from './components/Button/mainButton.vue';
import loginForm from './views/login.vue';
import schoolRegistrationForm from './components/form/schoolRegistrationForm.vue';
import sidebar from './components/dashboard/sidebar.vue';

export default {

  name: 'App',

  components:{
    mainButton, 
    loginForm,
    schoolRegistrationForm,
    sidebar
  },

  setup() {

    const myName = "Ali";

    return {myName};
  }

}
</script>

<style scoped>

</style>
