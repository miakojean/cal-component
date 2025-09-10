<template>
  <div class="main__container">
    <div class="empty-state">
      <div class="empty-state__icon">
        <i class="ri-school-line"></i>
      </div>
      
      <h2 class="empty-state__title">{{ whatIsEmpty }}</h2>
      
      <p class="empty-state__description">
        {{ emptyDescription }}
      </p>

      <mainButton 
        :label="addThing"
        @click="handleCreateSchool"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import addButton from '../Button/addButton.vue'
import mainButton from '../Button/mainButton.vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'DashboardEmptyState',

  components:{
    addButton,
    mainButton
  },

  props:{
    whatIsEmpty:{
      type:String,
      default:"Aucune école enrégistrée"
    },
    emptyDescription:{
      type:String,
      default:"Vous n'avez pas encore créé d'école. Commencez par créer votre première école pour gérer vos classes, étudiants et la scolarité."
    },
    addThing:{
      type:String,
      default:"Ajouter une école"
    },
    pathDirection:{
      type:String,
      default:'/school-registration'
    }
  },
  
  setup(props) {

    const router = useRouter();

    const handleCreateSchool = () => {
      router.push(`${props.pathDirection}`)
    }

    const showHelp = () => {
      console.log('Afficher l\'aide')
      // Ouvrir une documentation ou un modal d'aide
    }

    return {
      handleCreateSchool,
      showHelp,
      router
    }
  }
})
</script>

<style scoped>
.main__container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 2rem;
}

.empty-state {
  text-align: center;
  max-width: 450px;
  padding: 3rem 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border: 2px dashed #e2e8f0;
}

.empty-state__icon {
  font-size: 4rem;
  color: #cbd5e0;
  margin-bottom: 1.5rem;
  padding: 1rem;
}

.empty-state__icon i {
  display: inline-block;
  animation: float 3s ease-in-out infinite;
  font-size: 3rem;
}

.empty-state__title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.empty-state__description {
  color: #718096;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.empty-state__button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.empty-state__button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

.empty-state__button:active {
  transform: translateY(0);
}

.empty-state__help {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e2e8f0;
}

.empty-state__help a {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
}

.empty-state__help a:hover {
  text-decoration: underline;
}

/* Animation */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Responsive */
@media (max-width: 640px) {
  .empty-state {
    padding: 2rem 1.5rem;
    margin: 1rem;
  }
  
  .empty-state__icon {
    font-size: 3rem;
  }
  
  .empty-state__title {
    font-size: 1.25rem;
  }
  
  .empty-state__description {
    font-size: 1rem;
  }
  
  .empty-state__button {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
  }
}
</style>