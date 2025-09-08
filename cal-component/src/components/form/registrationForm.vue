<template>
    <div class="main__form">
        <timeLines :currentStep="step"/>
        <form action="" class="regis__form" v-if="step === 1">
            <h4>Inscription</h4>
            <p class="error__message" v-if="message.errorMessages">
                {{ message.errorMessages }}
            </p>
            <inputFamily v-for="(steps, index) in firstStep"
                :key="index"    
                :inputId="steps.inputId"
                :placeholder="steps.placeholder"
                v-model="steps.value"
                :show-validation="showValidation"
            />
            <secondButton @click="validateCurrentStep()" type="button" label="Continuer"/>
            <p class="conditions">
                En poursuivant vous acceptez les termes et conditions 
                d'utilisations.
            </p>
            <divider/>
            <mainButton label="connexion"/>
        </form>

        <form action="" class="regis__form" v-if="step === 2">
            <h4>Inscription</h4>
            <p class="error__message" v-if="message.errorMessages">
                {{ message.errorMessages }}
            </p>
            <inputFamily v-for="(steps, index) in secondStep"
                :key="index"    
                :inputId="steps.inputId"
                :placeholder="steps.placeholder"
                :type="steps.type"
                v-model="steps.value"
                :show-validation="showValidation"
            />
            <secondButton type="button" @click="validateCurrentStep()" label="Continuer"/>
            <p class="conditions">
                En poursuivant vous acceptez les termes et conditions 
                d'utilisations.
            </p>
            <divider/>
            <mainButton label="connexion"/>
        </form>

        <form action="" class="regis__form" v-if="step === 3">
            <h4>Inscription</h4>
            <p class="error__message" v-if="message.errorMessages">
                {{ message.errorMessages }}
            </p>
            <inputFamilyPassword v-for="(steps, index) in password"
                :key="index"    
                v-model="steps.value"
                :inputId="steps.inputId"
                :show-validation="showValidation"
            />
            <selectFamily 
                v-model="selectedRole" 
                :show-validation="showValidation"
            />
            <mainButton @click="validateCurrentStep()" type="button" label="Finaliser l'inscription"/>
            <p class="conditions">
            En poursuivant vous acceptez les termes et conditions 
            d'utilisations.
            </p>
      </form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';
import { validateStep, Step1Data, Step2Data, Step3Data, ValidationResult } from './validation';
import selectFamily from '../input/selectFamily.vue';
import inputFamily from '../input/inputFamily.vue';
import inputFamilyPassword from '../input/inputFamilyPassword.vue';
import mainButton from '../Button/mainButton.vue';
import divider from './divider.vue';
import secondButton from '../Button/secondButton.vue';
import timeLines from './timeLines.vue';
import { registerUser } from '@/_services/authservices';
import { useRouter } from 'vue-router';

interface FormField {
    inputId: string;
    placeholder: string;
    value: string;
    type?: string;
}

interface Message {
    errorMessages: string;
    successMessages: string;
}

export default defineComponent({
    name: 'RegistrationForm',
    components: {
        inputFamily,
        mainButton,
        divider,
        secondButton,
        inputFamilyPassword,
        selectFamily,
        timeLines
    },

    setup() {

        const router = useRouter()

        const step: Ref<number> = ref(1);
        const showValidation: Ref<boolean> = ref(false);
        const selectedRole: Ref<string> = ref('');

        const firstStep: Ref<FormField[]> = ref([
            {   inputId: 'Nom de Famille', 
                placeholder: 'Entrer votre nom de famille',
                value: ''
            },
            {   inputId: 'Prenom(s)', 
                placeholder: 'Entrer prenom(s)',
                value: ''
            },
            {
                inputId: 'Username',
                placeholder: 'Entrer un nom d\'utilisateur',
                value: ''
            }
        ]);

        const secondStep: Ref<FormField[]> = ref([
            {   inputId: 'Email', 
                placeholder: 'Entrer votre email',
                type: 'email',
                value: ''
            },
            {   inputId: 'Numero de téléphone', 
                placeholder: 'Entrer numéro de téléphone',
                value: ''
            },
            {
                inputId: 'Date de naissance',
                placeholder: 'Entrer votre date de naissance',
                type: 'date',
                value: ''
            }
        ]);

        const password: Ref<FormField[]> = ref([
            { inputId: 'Mot de passe', value: '' },
            { inputId: 'Confirmer', value: '' },
        ]);

        const message: Ref<Message> = ref({
            errorMessages: '',
            successMessages: '',
        });

        const getStepData = (): Step1Data | Step2Data | Step3Data => {
            switch(step.value) {
                case 1:
                    return {
                        nom: firstStep.value[0].value,
                        prenom: firstStep.value[1].value,
                        username: firstStep.value[2].value
                    } as Step1Data;
                case 2:
                    return {
                        email: secondStep.value[0].value,
                        telephone: secondStep.value[1].value,
                        dateNaissance: secondStep.value[2].value
                    } as Step2Data;
                case 3:
                    return {
                        motDePasse: password.value[0].value,
                        confirmationMotDePasse: password.value[1].value
                    } as Step3Data;
                default:
                    return {} as Step1Data;
            }
        };

        const validateCurrentStep = (): void => {
            showValidation.value = true;
            
            const currentData = getStepData();
            const validation: ValidationResult = validateStep(step.value, currentData, selectedRole.value);
            
            if (!validation.isValid) {
                message.value.errorMessages = validation.errors.join(', ');
                return;
            }
            
            message.value.errorMessages = '';
            
            if (step.value < 3) {
                showValidation.value = false;
                step.value++;
            } else {
                simulateCallApi();
            }
        };

        const simulateCallApi = async (): Promise<void> => {
            const payload = {
                last_name: firstStep.value[0].value,
                firstname: firstStep.value[1].value,
                username: firstStep.value[2].value,
                email: secondStep.value[0].value,
                telephone: secondStep.value[1].value,
                date_of_birth: secondStep.value[2].value,
                password: password.value[0].value,
                password2: password.value[1].value,
                title_category: selectedRole.value
            };

            console.log('Payload envoyé à l\'API:', payload);

            try {
                message.value.successMessages = 'Envoi en cours...';
                
                await registerUser(payload);
                
                console.log('API Response: Inscription réussie!');
                message.value.successMessages = 'Inscription réussie!';
                
                resetForm();

                router.push('/login')
                
            } catch (error) {
                console.error('API Error:', error);
                message.value.errorMessages = 'Erreur lors de l\'inscription';
            }
        };

        const resetForm = (): void => {
            step.value = 1;
            showValidation.value = false;
            firstStep.value.forEach(field => field.value = '');
            secondStep.value.forEach(field => field.value = '');
            password.value.forEach(field => field.value = '');
            selectedRole.value = '';
            message.value.errorMessages = '';
            message.value.successMessages = '';
        };

        return { 
            router,
            step, 
            message, 
            password, 
            selectedRole,
            showValidation,
            validateCurrentStep, 
            firstStep, 
            secondStep, 
            simulateCallApi 
        };
    }
});
</script>