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
      <selectFamily
        label="Selectionner la classe"
        input-id="type-classe"
        placeholder="Entrer le type de classe"
        :options="schoolCategory"
        v-model="payload.level"
        :showValidation="showValidation"
      />

      <!-- Sélection de la série (visible uniquement pour lycée) -->
      <selectFamily
        v-if="['2ND', '1ERE', 'TERM'].includes(payload.level)"
        label="Selectionner la série"
        input-id="serie-classe"
        placeholder="Choisir une série"
        :options="seriesOptions"
        v-model="payload.serie"
        :showValidation="showValidation"
      />
    </div>

    <p>*Les modèles de classes suivent le système pédagogique ivoirien</p>
  </form>
</template>

<script lang="ts">
import selectFamily from '../input/selectFamily.vue';
import mainButton from '../Button/mainButton.vue';
import secondButton from '../Button/secondButton.vue';
import { ref, Ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { createClasse } from '@/_services/schoolservices';

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

    const schoolId = sessionStorage.getItem("school_id");

    const payload = ref({
      level: "",
      name: "",
      serie: "",
      id: schoolId,
    });

    // Watcher pour mettre à jour le nom automatiquement quand le niveau change
    watch(() => payload.value.level, (newLevel) => {
      if (newLevel) {
        // Trouver l'objet correspondant dans schoolCategory
        const selectedCategory = schoolCategory.find(item => item.matching === newLevel);
        if (selectedCategory) {
          payload.value.name = selectedCategory.matching;
        }
      } else {
        payload.value.name = "";
      }
    });

    // Watcher pour la série (si applicable)
    watch(() => payload.value.serie, (newSerie) => {
      if (newSerie && ['2ND', '1ERE', 'TERM'].includes(payload.value.level)) {
        // Pour les classes lycée, on combine level + série pour le nom
        const selectedCategory = schoolCategory.find(item => item.matching === payload.value.level);
        const selectedSerie = seriesOptions.find(item => item.matching === newSerie);
        
        if (selectedCategory && selectedSerie) {
          payload.value.name = `${selectedCategory.matching}${selectedSerie.matching}`;
        }
      }
    });

    const submit = async () => {
      showValidation.value = true;

      // Validation des champs requis
      if (payload.value.level?.trim() && payload.value.id?.trim() && payload.value.name?.trim()) {
        try {
          console.log("Envoi des données :", payload.value);
          
          const response = await createClasse(payload.value);
          
          console.log("Classe créée avec succès :", response.data);
          
          // Redirection après succès
          router.push('/dashboard/classe');
          
        } catch (error: any) {
          console.error("Erreur lors de la création de la classe :", error);
          
          // Gestion d'erreur plus détaillée
          if (error.response) {
            console.error("Réponse d'erreur du serveur :", error.response.data);
            alert(`Erreur: ${error.response.data.message || 'Erreur serveur'}`);
          } else if (error.request) {
            console.error("Aucune réponse du serveur :", error.request);
            alert("Erreur de connexion au serveur");
          } else {
            console.error("Erreur de configuration :", error.message);
            alert("Erreur de configuration de la requête");
          }
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
      schoolCategory,
      seriesOptions,
      schoolId,
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