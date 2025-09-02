<template>
  <form @submit.prevent="handleSubmit">
    <h3 class="form__libele">Connexion</h3>
    <p class="form__details">Entrer vos identifiants pour vous connecter</p>
    <inputFamily
      v-model="userCredentials.username"
      :show-validation="showValidation"
      error-message="Veuillez saisir votre email ou nom d'utilisateur"
      @blur="markFieldTouched('username')"
    />
    
    <input-family-password
      v-model="userCredentials.password"
      :show-validation="showValidation"
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
import inputFamily from './input/inputFamily.vue';
import inputFamilyPassword from './input/inputFamilyPassword.vue';
import checkboxFamily from './input/checkboxFamily.vue';
import mainButton from './mainButton.vue';
import { ref, reactive } from 'vue';

export default {
  components: {
    inputFamily,
    inputFamilyPassword,
    checkboxFamily,
    mainButton
  },

  setup() {
    const userCredentials = reactive({
      username: "",
      password: ""
    });
    
    const rememberMe = ref(false);
    const showValidation = ref(false);
    const isSubmitting = ref(false);
    const submitError = ref("");
    const touchedFields = reactive({
      username: false,
      password: false
    });

    const validateForm = () => {
      const errors = [];
      
      if (!userCredentials.username.trim()) {
        errors.push("Le nom d'utilisateur est requis");
      }
      
      if (!userCredentials.password) {
        errors.push("Le mot de passe est requis");
      } else if (userCredentials.password.length < 6) {
        errors.push("Le mot de passe doit contenir au moins 6 caractères");
      }
      
      return errors;
    };

    const markFieldTouched = (fieldName) => {
      touchedFields[fieldName] = true;
    };

    const handleSubmit = async () => {
      showValidation.value = true;
      submitError.value = "";
      
      const errors = validateForm();
      
      if (errors.length > 0) {
        submitError.value = errors.join(". ");
        return;
      }
      
      isSubmitting.value = true;
      
      try {
        // Simuler un appel API
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        // Ici, vous appelleriez normalement votre API d'authentification
        console.log("Tentative de connexion avec:", userCredentials);
        
        // Réinitialiser le formulaire après soumission réussie
        userCredentials.username = "";
        userCredentials.password = "";
        showValidation.value = false;
        
        // Émettre un événement ou rediriger l'utilisateur
      } catch (error) {
        submitError.value = "Échec de la connexion. Veuillez réessayer.";
      } finally {
        isSubmitting.value = false;
      }
    };

    return {
      userCredentials,
      rememberMe,
      showValidation,
      isSubmitting,
      submitError,
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