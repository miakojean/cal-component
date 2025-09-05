<template>
  <div class="form__container">
    <h4>Formulaire d'enregistrement d'école</h4>
    <div class="fields">
        <inputFamily 
            input-id="Nom d'école"
            placeholder="Entrer le nom de votre école"
        />
        <selectFamily
            input-id="Type d'établissement"
            placeholder="Entrer le type d'établissement"
        />
    </div>

    <div class="fields">
        <inputFamily 
            input-id="Adresse"
            placeholder="Entrer l'adresse de votre école"
        />
        <inputFamily 
            input-id="Numero de téléphone"
            placeholder="Entrer le type d'établissement"
        />
    </div>
  </div>
</template>

<script>
import inputFamily from '../input/inputFamily.vue';
import selectFamily from '../input/selectFamily.vue';
export default {

    components:{
        inputFamily,
        selectFamily
    }

}
</script>

<style>
.form__container{
    padding: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.fields{
    width: 100%;
    display: flex;
    justify-content: start;
    gap: 1rem;
}
</style>