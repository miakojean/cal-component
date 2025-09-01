<template> 
  <main>
    <div class="main__container">
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
