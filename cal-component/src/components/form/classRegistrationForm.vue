<template>
  <form @submit.prevent class="form__container">
    <h4 class="form__title">Formulaire d'enregistrement de classe</h4>
    <div class="btn__frame">
      <secondButton
        @click="goBack"
        label="Retour"
        maxWidth="200px"
      />
      <mainButton
        @click="submit"
        label="Ajouter une classe"
        maxWidth="200px"
      />
    </div>
    <div class="fields">
      <!-- Sélection du type de classe -->

      <select-class-family
        label="Selectionner la classe"
        input-id="type-classe"
        placeholder="Entrer le type de classe"
        v-model="payload.level"
        :showValidation="showValidation"
      />

      <inputFamily 
        input-id="Nom de la classe"
        placeholder="Entrer le nom de la classe"
        v-model="payload.name"
        :showValidation="showValidation"
      />

      <!-- Sélection de la série (visible uniquement pour lycée) -->
      <selectFamily
        v-if="['2ND', '1ERE', 'TERM'].includes(payload.level)"
        label="Selectionner la série"
        input-id="serie-classe"
        placeholder="Choisir une série"
        :options="seriesOptions"
        v-model="seriesValue"
        :showValidation="showValidation"
      />
    </div>

    <p>* Les modèles de classes suivent le système pédagogique ivoirien</p>
    <p>* Spécifiez le nom de la classe quand 
      vous avez deux ou plusieurs classes de même niveau.
    </p>
  </form>
</template>

<script lang="ts">
import selectFamily from '../input/selectFamily.vue';
import selectClassFamily from '../input/selectClassFamily.vue';
import mainButton from '../Button/mainButton.vue';
import secondButton from '../Button/secondButton.vue';
import inputFamily from '../input/inputFamily.vue';
import { ref, Ref, watch, computed } from 'vue';
import { useRouter } from 'vue-router';
import { createClasse } from '@/_services/schoolservices';

export default {
  components: {
    selectFamily,
    selectClassFamily,
    mainButton,
    secondButton,
    inputFamily
  },

  setup() {
    const router = useRouter();
    const showValidation: Ref<boolean> = ref(false);
    
    const seriesOptions = [
      {value:"Serie A", matching:"A"},
      {value: "Serie C", matching:"C"},
      {value: "Serie D", matching:"D"},
      {value:"Serie F", matching:"F"},
      {value:"Serie G", matching:"G"}
    ];

    const schoolId = sessionStorage.getItem("school_id");

    const seriesValue = computed({
      get: () => payload.value.series || 'NA',
      set: (newValue) => {
        payload.value.series = newValue === 'NA' ? '' : newValue;
      }
    });

    const payload = ref({
      school: schoolId,
      name: "",
      level: "",
      series: "",
      academic_year: "2024-2025"
    });

    const submit = async () => {
      showValidation.value = true;

      // Validation des champs requis
      if (payload.value.level?.trim() && payload.value.name?.trim()) {
        try {
          console.log("Envoi des données :", payload.value);
          
          //const response = await createClasse(payload.value);
          
          //console.log("Classe créée avec succès :", response.data);
          
        } catch (error: any) {
          console.error("Erreur lors de la création de la classe :", error);
        }
      } else {
        console.log("Formulaire invalide - champs manquants :", payload.value);
        alert("Veuillez remplir tous les champs obligatoires");
      }
    };

    const goBack = () => {
      router.push('/dashboard/classe');
    };
    
    return {
      router,
      showValidation,
      seriesValue,
      schoolId,
      seriesOptions,
      payload,
      submit,
      goBack,
    };
  },
};
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