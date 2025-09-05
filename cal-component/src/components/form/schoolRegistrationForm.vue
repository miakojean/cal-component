<template>
  <div class="form__container">
    <h4>Formulaire d'enregistrement d'école</h4>
    <div class="fields">
        <inputFamily 
            input-id="Nom d'école"
            placeholder="Entrer le nom de votre école"
            v-model="payload.schoolName"
        />
        <selectFamily
            label="Type d'établissement"
            input-id="Type d'établissement"
            placeholder="Entrer le type d'établissement"
            :options ="schoolCategory"
        />
    </div>

    <div class="fields">
        <inputFamily 
            input-id="Adresse"
            placeholder="Entrer l'adresse de votre école"
            v-model="payload.schoolAdress"
        />
        <inputFamily 
            input-id="Numero de téléphone"
            placeholder="Entrer le type d'établissement"
            v-model="payload.schoolPhoneNumber"
        />
    </div>

    <div class="fields">
        <inputFamily 
            input-id="Email"
            placeholder="Entrer l'adresse email de votre école"
            v-model="payload.schoolEmail"
        />
        <inputFamily 
            input-id="Site web"
            placeholder="Entrer le site internet de l'école"
            v-model="payload.schoolWebsite"
        />
    </div>
    <mainButton @click="submit"/>
  </div>
</template>

<script lang="ts">
import inputFamily from '../input/inputFamily.vue';
import selectFamily from '../input/selectFamily.vue';
import mainButton from '../mainButton.vue';
import { ref } from 'vue';
import { validateStep } from './validation';

interface FormField{
    inputId: string;
    placeholder: string;
    value: string;
    type?: string
}

interface Message {
    errorMessages: string;
    successMessages: string;
}

export default {

    components:{
        inputFamily,
        selectFamily,
        mainButton
    },

    setup(){

        const schoolCategory = [
            "Crêche","Maternelle", "Primaire", 
            "Secondaire", "Collège", "Lycée général", 
            "Lycée technique", "Lycée professionnel",
            "École spécialisée", "Centre d'alphabétisation"
        ]

        const payload = ref({
            schoolName:"",
            schoolType:"",
            schoolAdress:"",
            schoolPhoneNumber:"",
            schoolEmail:"",
            schoolWebsite:""
        })

        

        const submit = () => {
            console.log(payload.value)
        }

        return{schoolCategory, payload, submit}
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