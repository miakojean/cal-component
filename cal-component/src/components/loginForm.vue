<template>
  <form @submit.prevent="handleSubmit">
    <h3 class="form__libele">Connexion</h3>
    <p class="form__details">Entrer vos identifiants pour vous connecter</p>
    
    <input-family
      input-id="Email"
      v-model="userCredentials.email"
      :show-validation="showValidation"
      :is-touched="touchedFields.email"
      error-message="Veuillez saisir votre email"
      @blur="markFieldTouched('email')"
    />
    
    <input-family-password 
      inputId="Mot de passe"
      v-model="userCredentials.password"
      :show-validation="showValidation"
      :is-touched="touchedFields.password"
      error-message="Veuillez saisir votre mot de passe"
      @blur="markFieldTouched('password')"
    />
    
    <checkbox-family v-model="rememberMe" />
    
    <main-button type="submit" :disabled="isSubmitting">
      {{ isSubmitting ? 'Connexion...' : 'Se connecter' }}
    </main-button>
    
    <p v-if="submitError" class="form-error">{{ submitError }}</p>
  </form>
</template>

<script>
import InputFamily from './input/inputFamily.vue';
import InputFamilyPassword from './input/inputFamilyPassword.vue';
import CheckboxFamily from './input/checkboxFamily.vue';
import MainButton from './Button/mainButton.vue'; 
import { ref, reactive } from 'vue';
import api from '@/_services/apiservices';
import { useRouter } from 'vue-router';

export default {
  components: {
    InputFamily,
    InputFamilyPassword,
    CheckboxFamily,
    MainButton
  },

  setup() {
    const userCredentials = reactive({
      email: "",
      password: ""
    });

    const router = useRouter()
    
    const rememberMe = ref(false);
    const showValidation = ref(false);
    const isSubmitting = ref(false);
    const submitError = ref("");
    const touchedFields = reactive({
      email: false,
      password: false
    });

    const validateForm = () => {
      const errors = [];
      
      if (!userCredentials.email.trim()) {
        errors.push("email");
      }
      
      if (!userCredentials.password) {
        errors.push("password");
      } else if (userCredentials.password.length < 6) {
        errors.push("password_length");
      }
      
      return errors;
    };

    const getErrorMessage = (errorType) => {
      const messages = {
        email: "L'email est requis",
        password: "Le mot de passe est requis",
        password_length: "Le mot de passe doit contenir au moins 6 caractères"
      };
      return messages[errorType] || "Erreur de validation";
    };

    const markFieldTouched = (fieldName) => {
      touchedFields[fieldName] = true;
    };

    const handleSubmit = async () => {
      showValidation.value = true;
      submitError.value = "";
      
      // Marquer tous les champs comme touchés
      touchedFields.email = true;
      touchedFields.password = true;
      
      const errors = validateForm();
      
      if (errors.length > 0) {
        submitError.value = errors.map(error => getErrorMessage(error)).join(". ");
        return;
      }
      
      isSubmitting.value = true;
      
      try {
        const response = await api.post('/account/login', {
          email: userCredentials.email,
          password: userCredentials.password
        });
        
        console.log("Connexion réussie:", response.data);
        
        if (response.data.access_token || response.data.access) {
          const token = response.data.access_token || response.data.access;
          const refreshToken = response.data.refresh_token || response.data.refresh
          const username = response.data.user.username;

          localStorage.setItem('authToken', token);
          localStorage.setItem('refresh', refreshToken);
          localStorage.setItem('username', username);
          
          showValidation.value = false;
          userCredentials.email = "";
          userCredentials.password = "";
          router.push('/dashboard')
        } else {
          throw new Error("Token non reçu dans la réponse");
        }
        
      } catch (error) {
        console.error("Erreur de connexion:", error);
        
        if (error.response?.status === 401) {
          submitError.value = "Email ou mot de passe incorrect";
        } else if (error.response?.data?.message) {
          submitError.value = error.response.data.message;
        } else {
          submitError.value = "Échec de la connexion. Veuillez réessayer.";
        }
      } finally {
        isSubmitting.value = false;
      }
    };

    return {
      userCredentials,
      router,
      rememberMe,
      showValidation,
      isSubmitting,
      submitError,
      touchedFields,
      handleSubmit,
      markFieldTouched
    };
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.form__libele{
    width:100%;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
}

.form__details{
    width:100%;
    text-align: center;
    font-size: 0.8rem;
    font-weight: 400;
    color: #a6a6a7;
}

.form-error {
  color: crimson;
  font-size: 0.9rem;
  text-align: center;
  margin: 0;
  padding: 0.5rem;
  background-color: #ffe6e6;
  border-radius: 4px;
}
</style>