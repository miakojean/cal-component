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
        <inputFamily 
            input-id="Adresse"
            placeholder="Entrer l'adresse de votre école"
            v-model="payload.schoolAdress"
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
        <inputFamily 
            input-id="Email"
            placeholder="Entrer l'adresse email de votre école"
            v-model="payload.schoolEmail"
        />
    </div>

    <div class="fields">
        <inputFamily 
            input-id="Site web"
            placeholder="Entrer l'adresse email de votre école"
            v-model="payload.schoolEmail"
        />
        <inputFamily 
            input-id="Site web"
            placeholder="Entrer le site internet de l'école"
            v-model="payload.schoolWebsite"
        />
        <textArea
            label="Description"
            input-id="Description"
            placeholder="Entrer la description de votre école"
            v-model="payload.schoolDescription"
        />
    </div>
    <div class="btn__frame">
        <secondButton @click="goBack"
            label="Retour"
        />
        <mainButton @click="submit"
            label="Ajouter"
        />
    </div>
  </div>
</template>

<script lang="ts">
import inputFamily from '../input/inputFamily.vue';
import selectFamily from '../input/selectFamily.vue';
import mainButton from '../mainButton.vue';
import secondButton from '../Button/secondButton.vue';
import textArea from '../input/textArea.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
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
        mainButton,
        textArea,
        secondButton
    },

    setup(){

        const router = useRouter();

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
            schoolWebsite:"",
            schoolDescription:""
        })

        

        const submit = () => {
            console.log(payload.value)
        }

        const goBack = () => {
            router.push('/dashboard');
        }

        return{schoolCategory, payload, submit, goBack}
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

.btn__frame{
    width: 100%;
    display: flex;
    justify-content: end;
    gap: 1rem;
}
</style>