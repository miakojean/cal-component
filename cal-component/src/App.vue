<template> 
  <main>
    <div class="main__container">
      <h3>Notre petite bibliothèque de composants</h3>
      <loginForm/>
    </div>
  </main>
</template>

<script>
import mainButton from './components/mainButton.vue';
import loginForm from './components/loginForm.vue';
export default {

  name: 'App',

  components:{
    mainButton, 
    loginForm
  },

  setup() {

    const myName = "Ali";

    return {myName};
  }

}
</script>

<style scoped>

</style>
