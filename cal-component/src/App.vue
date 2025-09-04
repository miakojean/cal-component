<template> 
  <main>
    <sidebar/>
  </main>
</template>

<script>
import mainButton from './components/mainButton.vue';
import loginForm from './components/loginForm.vue';
import registrationForm from './components/form/registrationForm.vue';
import sidebar from './components/dashboard/sidebar.vue';

export default {

  name: 'App',

  components:{
    mainButton, 
    loginForm,
    registrationForm,
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
