<template>
  <form @submit.prevent class="form__container">
    <h4 class="form__title">Formulaire d'enregistrement d'école</h4>
    <div class="fields">
        <inputFamily 
            input-id="Nom d'école"
            placeholder="Entrer le nom de votre école"
            v-model="payload.name"
            :showValidation="showValidation"
        />
        <selectFamily
            label="Type d'établissement"
            input-id="Type d'établissement"
            placeholder="Entrer le type d'établissement"
            :options ="schoolCategory"
            v-model="payload.school_type"
            :showValidation="showValidation"
        />
        <inputFamily 
            input-id="Adresse"
            placeholder="Entrer l'adresse de votre école"
            v-model="payload.address"
            :showValidation="showValidation"
        />
    </div>

    <div class="fields">
        <inputFamily 
            input-id="Numero de téléphone"
            placeholder="Entrer le type d'établissement"
            v-model="payload.phone"
            :showValidation="showValidation"
        />
        <inputFamily 
            input-id="Email"
            placeholder="Entrer l'adresse email de votre école"
            v-model="payload.email"
            :showValidation="showValidation"
        />
        <inputFamily 
            input-id="Site web"
            placeholder="Entrer l'adresse email de votre école"
            v-model="payload.website"
        />
    </div>

    <div class="fields">
        <textArea
            label="Description"
            input-id="Description"
            placeholder="Entrer la description de votre école"
            v-model="payload.description"
            :showValidation="showValidation"
        />
    </div>
    
    <div class="btn__frame">
        <secondButton @click="goBack"
            label="Retour"
            maxWidth="200px"
        />
        <mainButton @click="submit"
            label="Ajouter mon école"
            maxWidth="200px"
        />
    </div>
  </form>
</template>

<script lang="ts">
import inputFamily from '../input/inputFamily.vue';
import selectFamily from '../input/selectFamily.vue';
import mainButton from '../Button/mainButton.vue';
import secondButton from '../Button/secondButton.vue';
import textArea from '../input/textArea.vue';
import { ref, Ref } from 'vue';
import { useRouter } from 'vue-router';
import { registerSchool } from '@/_services/schoolservices';

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

        const showValidation: Ref<boolean> = ref(false);

        const schoolCategory = [
            {value:"Crêche", matching: "CR"},
            {value:"Maternelle", matching:"MA"}, 
            {value:"Primaire", matching:"PR"}, 
            {value:"Collège", matching: "CL"}, 
            {value:"Lycée général", matching: "LYG"},
            {value:"Lycée Technique", matching:"LYT"},
            {value:"Formation professonnelle", matching:"FP"},
            {value:"Ecole spécialisée", matching:"ES"},
            {value:'Centre d\'alphabétisation', matching:"CA"},
        ]

        const payload = ref({
            name:"",
            school_type:"",
            address:"",
            phone:"",
            email: "",
            website: "",
            description:""
        })

        const submit = async () => {
            showValidation.value = true; // Active la validation

            // Vérifie si tous les champs obligatoires sont remplis
            if (
                payload.value.name.trim() &&
                payload.value.address.trim() &&
                payload.value.phone.trim() &&
                payload.value.email.trim()
            ) {
                registerSchool(payload.value);
                console.log("Formulaire valide :", payload.value);
                // Ici tu pourras envoyer les données à ton API
            } else {
                console.log("Formulaire invalide : champs manquants");
            }
        };


        const goBack = () => {
            router.push('/dashboard');
        }

        return{
            router,
            showValidation,
            schoolCategory, 
            payload, 
            submit, 
            goBack
        }
    }

}
</script>

<style scoped>
.form__container{
    padding: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 1240px;
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

.form__title{
    font-weight: 500;
    font-size: 1.2rem;
    color: var(--primary-color);
}
</style>