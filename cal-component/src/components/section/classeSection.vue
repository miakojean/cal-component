<template>
  <section class="main__container">
    <empty-section-component 
      whatIsEmpty="Aucune classe enregistrée"
      emptyDescription="Votre école ne contient aucune classe, ajouter vos classes en cliquant sur le boutton ci-dessous"
      add-thing="Ajouter une classe"
      path-direction="/dashboard/class-registration"
    />
    
  </section>
</template>

<script>
import classRegistrationForm from '../form/classRegistrationForm.vue';
import emptySectionComponent from './emptySectionComponent.vue';
export default {
    components:{
        emptySectionComponent, classRegistrationForm
    }
}
</script>

<style>

</style>