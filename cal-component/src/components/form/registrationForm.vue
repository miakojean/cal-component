<template>
    <div class="main__form">
        <form action="" class="regis__form" v-if="step === 1">
            <h4>Inscription</h4>
            <p class="errorMessages" v-if="message.errorMessages">
                {{ message.errorMessages }}
            </p>
            <inputFamily v-for="(steps, index) in firstStep"
                :key="index"    
                :inputId="steps.inputId"
                :placeholder="steps.placeholder"
                v-model="steps.value"
            />
            <secondButton @click="nextstep()" type="button"/>
            <p class="conditions">
                En poursuivant vous acceptez les termes et conditions 
                d'utilisations.
            </p>
            <divider/>
            <mainButton label="connexion"/>
        </form>

        <form action="" class="regis__form" v-if="step === 2">
            <h4>Inscription</h4>
            <p class="errorMessages" v-if="message.errorMessages">
                {{ message.errorMessages }}
            </p>
            <inputFamily v-for="(steps, index) in secondStep"
                :key="index"    
                :inputId="steps.inputId"
                :placeholder="steps.placeholder"
                :type="steps.type"
                v-model="steps.value"
            />
            <secondButton type="button" @click="nextstep()"/>
            <p class="conditions">
                En poursuivant vous acceptez les termes et conditions 
                d'utilisations.
            </p>
            <divider/>
            <mainButton label="connexion"/>
        </form>

        <form action="" class="regis__form" v-if="step === 3">
            <h4>Inscription</h4>
            <p class="errorMessages" v-if="message.errorMessages">
                {{ message.errorMessages }}
            </p>
            <inputFamilyPassword v-for="(steps, index) in password"
                :key="index"    
                v-model="steps.value"
                :inputId = "steps.inputId"
            />
            <selectFamily/>
            <mainButton @click="simulateCallApi()" type="button"/>
            <p class="conditions">
                En poursuivant vous acceptez les termes et conditions 
                d'utilisations.
            </p>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import selectFamily from '../input/selectFamily.vue';
import inputFamily from '../input/inputFamily.vue';
import inputFamilyPassword from '../input/inputFamilyPassword.vue';
import mainButton from '../mainButton.vue';
import divider from './divider.vue';
import secondButton from '../Button/secondButton.vue';

export default {
    components:{
        inputFamily,
        mainButton,
        divider,
        secondButton,
        inputFamilyPassword,
        selectFamily
    },

    setup(){
        const step = ref(1);

        const firstStep = ref([
            {   inputId:'Nom de Famille', 
                placeholder:'Entrer votre nom de famille',
                value:''
            },
            {   inputId:'Prenom(s)', 
                placeholder:'Entrer prenom(s)',
                value:''
            },
            {
                inputId:'Username',
                placeholder:'Entrer un nom d\'utilisateur',
                value:''
            }
        ]);

        const secondStep = ref([
            {   inputId:'Email', 
                placeholder:'Entrer votre email',
                type:'email',
                value:''
            },
            {   inputId:'Numero de téléphone', 
                placeholder:'Entrer numéro de téléphone',
                value:''
            },
            {
                inputId:'Date de naissance',
                placeholder:'Entrer votre date de naissance',
                type:'date',
                value:''
            }
        ]);

        const password = ref([
            {inputId:'Mot de passe', value:''},
            {inputId:'Confirmer', value:''},
        ])

        const message = ref({
            errorMessages: '',
            successMessages: '',
        });

        const passwordMatching = (one, two) => {
            if(one !== two){
                message.value.errorMessages = "Les mots de passe ne sont pas identiques";
                return false;
            }
            return true;
        }

        const nextstep = () => {
            // Réinitialiser les messages d'erreur
            message.value.errorMessages = '';
            
            // Vérifier si tous les champs de l'étape 1 sont remplis
            const emptyFields = firstStep.value.filter(field => 
                !field.value || field.value.trim() === ''
            );
            
            if (emptyFields.length > 0) {
                message.value.errorMessages = 'Veuillez remplir tous les champs obligatoires';
                return;
            }
            
            // Si tous les champs sont remplis, passer à l'étape suivante
            step.value ++;
        };

        const simulateCallApi = async() => {
            // Réinitialiser les messages d'erreur
            message.value.errorMessages = '';
            
            // Vérifier si tous les champs de l'étape 3 sont remplis
            const emptyFields = password.value.filter(field => 
                !field.value || field.value.trim() === ''
            );
            
            if (emptyFields.length > 0) {
                message.value.errorMessages = 'Veuillez remplir tous les champs obligatoires';
                return;
            }

            // Vérifier la concordance des mots de passe
            const isPasswordMatching = passwordMatching(
                password.value[0].value, 
                password.value[1].value
            );
            
            if (!isPasswordMatching) {
                return; // Arrêter si les mots de passe ne correspondent pas
            }

            // Créer le payload avec toutes les données
            const payload = {
                nom: firstStep.value[0].value,
                prenom: firstStep.value[1].value,
                username: firstStep.value[2].value,
                email: secondStep.value[0].value,
                telephone: secondStep.value[1].value,
                dateNaissance: secondStep.value[2].value,
                motDePasse: password.value[0].value,
                confirmationMotDePasse: password.value[1].value
            };

            console.log('Payload envoyé à l\'API:', payload);

            // Simuler l'appel API avec un timeout de 3000ms
            try {
                message.value.successMessages = 'Envoi en cours...';
                
                await new Promise(resolve => setTimeout(resolve, 3000));
                
                // Simuler une réponse réussie
                console.log('API Response: Inscription réussie!');
                message.value.successMessages = 'Inscription réussie!';
                message.value.errorMessages = '';
                
                // Réinitialiser le formulaire après succès
                step.value = 1;
                firstStep.value.forEach(field => field.value = '');
                secondStep.value.forEach(field => field.value = '');
                password.value.forEach(field => field.value = '');
                
            } catch (error) {
                console.error('API Error:', error);
                message.value.errorMessages = 'Erreur lors de l\'inscription. Veuillez réessayer.';
                message.value.successMessages = '';
            }
        }

        return { step, message, password, nextstep, firstStep, secondStep, simulateCallApi }
    }
}
</script>