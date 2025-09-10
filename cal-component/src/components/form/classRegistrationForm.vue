<template>
  <form @submit.prevent class="form__container">
    <h4 class="form__title">Formulaire d'enregistrement de classe</h4>
    <div class="fields">
      <!-- Sélection du type de classe -->
      <selectFamily
        label="Selectionner la classe"
        input-id="type-classe"
        placeholder="Entrer le type de classe"
        :options="schoolCategory"
        v-model="payload.school_type"
        :showValidation="showValidation"
      />

      <!-- Sélection de la série (visible uniquement pour lycée) -->
      <selectFamily
        v-if="['2ND', '1ERE', 'TERM'].includes(payload.school_type)"
        label="Selectionner la série"
        input-id="serie-classe"
        placeholder="Choisir une série"
        :options="seriesOptions"
        v-model="payload.serie"
        :showValidation="showValidation"
      />
    </div>

    <p>*Les modèles de classes suivent le système pédagogique ivoirien</p>

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
  </form>
</template>

<script lang="ts">
import selectFamily from '../input/selectFamily.vue';
import mainButton from '../Button/mainButton.vue';
import secondButton from '../Button/secondButton.vue';
import { ref, Ref } from 'vue';
import { useRouter } from 'vue-router';
import { registerSchool } from '@/_services/schoolservices';

export default {
  components: {
    selectFamily,
    mainButton,
    secondButton,
  },

  setup() {
    const router = useRouter();
    const showValidation: Ref<boolean> = ref(false);

    const schoolCategory = [
      // Préscolaire
      { value: "Crèche", matching: "CRE" },
      { value: "Garderie", matching: "GAR" },
      { value: "Maternelle Petite Section", matching: "MP" },
      { value: "Maternelle Moyenne Section", matching: "MM" },
      { value: "Maternelle Grande Section", matching: "MG" },

      // Primaire
      { value: "CP1", matching: "CP1" },
      { value: "CP2", matching: "CP2" },
      { value: "CE1", matching: "CE1" },
      { value: "CE2", matching: "CE2" },
      { value: "CM1", matching: "CM1" },
      { value: "CM2", matching: "CM2" },

      // Collège
      { value: "6ème", matching: "6E" },
      { value: "5ème", matching: "5E" },
      { value: "4ème", matching: "4E" },
      { value: "3ème", matching: "3E" },

      // Lycée
      { value: "Seconde", matching: "2ND" },
      { value: "Première", matching: "1ERE" },
      { value: "Terminale", matching: "TERM" },
    ];

    // Options pour les séries du lycée
    const seriesOptions = [
      { value: "Série A", matching: "A" },
      { value: "Série C", matching: "C" },
      { value: "Série D", matching: "D" },
      { value: "Série E", matching: "E" },
      { value: "Série F", matching: "F" },
    ];

    const payload = ref({
      school_type: "",
      serie: "",
    });

    const submit = async () => {
      showValidation.value = true;

      if (payload.value.school_type.trim()) {
        registerSchool(payload.value);
        console.log("Formulaire valide :", payload.value);
      } else {
        console.log("Formulaire invalide : type de classe manquant");
      }
    };

    const goBack = () => {
      router.push('/dashboard');
    };

    return {
      router,
      showValidation,
      schoolCategory,
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