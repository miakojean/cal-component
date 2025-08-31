<template> 
  <main>
    <div class="main__container">
      <h3>Notre petite bibliothèque de composants</h3>
      <inputFamily/>
      <inputFamily
        v-model="myName" 
        label="Prénom" 
        placeholder="Entrez votre prénom" 
        id="inputFirstName" 
        name="inputFirstName" 
        type="text"
      />
    </div>
  </main>
</template>

<script>
import mainButton from './components/mainButton.vue';
import inputFamily from './components/inputFamily.vue';
export default {

  name: 'App',

  components:{
    mainButton,
    inputFamily
  },

  setup() {

    const myName = "Ali";

    return {myName};
  }

}
</script>

<style scoped>

</style>
