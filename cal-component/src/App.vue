<template> 
  <main>
    <div class="main__container">
      <registrationForm/>
    </div>
  </main>
</template>

<script>
import mainButton from './components/mainButton.vue';
import loginForm from './components/loginForm.vue';
import registrationForm from './components/form/registrationForm.vue';
import timeLines from './components/form/timeLines.vue';
export default {

  name: 'App',

  components:{
    mainButton, 
    loginForm,
    registrationForm,
    timeLines
  },

  setup() {

    const myName = "Ali";

    return {myName};
  }

}
</script>

<style scoped>

</style>
