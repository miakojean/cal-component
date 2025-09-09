<template>
      
  <div class="dashboard__main">
    <aside class="sidebar" aria-label="Sidebar">
      <div class="brand">
        
      </div>

      <nav class="nav">

        <div class="my__school">
          <h4>
            CalSchool Dashboard
          </h4>
        </div>

        <div class="my__school">
          <h4 class="bar__title">
            Mes écoles
            <i class="ri-add-line"></i>
          </h4>
          <p v-if="mySchool.length === 0">Aucune école enregistrée</p>
          <ul v-else class="academic__list">
            <li v-for="(school, index) in mySchool"
            :key="index">{{ school.name }}</li>
          </ul>
        </div>

        <div class="sidebar-footer">
          <div class="user-profile">
            <span class="user-logo">

            </span>
            <span class="username">{{ username }}</span>
          </div>
        </div>

        <div class="my__school">
          <h4>
            Paramètres 
          </h4>
          <ul>
            <li>Mon plan</li>
          </ul>
        </div>
      </nav>

    </aside>
  </div>
</template>

<script lang="ts">
import frame from '../items/frame.vue';
import { isAuthenticated } from '@/_services/authservices';
import { getOwnerSchool } from '@/_services/schoolservices';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  
  components: {
    frame,
  },
  
  setup() {

    const router = useRouter()

    const username = ref<string | null> (null)

    const getUsername = () =>{
      if(isAuthenticated()){
        username.value = localStorage.getItem('username')
      } else username.value = "Aucun utilisateur"
    }

    const mySchool = ref([]);

    const getSchool = async () => {
      try {
        const response = await getOwnerSchool();
        if (response && response.data && response.data.schools) {
          mySchool.value = response.data.schools; 
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des écoles :", error);
      }
    };

    
    onMounted(() => {
      getUsername();
      getSchool();
    });

    return {
      username,
      getUsername,
      getSchool,
      mySchool
    };
  },
};
</script>




<style scoped>

*{box-sizing:border-box}

.dashboard__main{
  display: flex;
  justify-content: start;
  width: 280px;
  height: 100%;
}

.sidebar{
  width: 280px;
  border-right:1px solid #ececf7;
  padding:16px;
  display:flex;
  flex-direction:column;
  justify-content: start;
  gap:12px;
  transition:width 180ms ease;
}

.bar__title{
  display: flex;
  justify-content: space-between;
  color: #414142;
  padding: 0.5rem;
  border: 1px solid #adadad;
  border-radius: 1.5rem;
  cursor: pointer;
}

.bar__title:hover{
  color: #414142;
  padding: 0.5rem;
  border: 1px solid #868686;
  border-radius: 1.5rem;
  cursor: pointer;
}

.sidebar.collapsed{
  width:72px;
}

.my__school{
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 2rem;
}



.nav{
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  gap: 1rem;
}


.nav-item:hover{
  background:rgba(92,72,238,0.06);
}

.icon{
  width:20px;
  text-align:center;
  font-size:10px;
  color:var(--primary-color);
}

.sidebar-footer{
  margin-top:auto;
  font-size:12px;
  color:#666;
}

.content{
  flex:1;
  padding:28px;
  max-width:var(--max-width);
  margin:0 auto;
  width:100%;
}

.content-header{
  display:flex;
  flex-direction:column;
  gap:4px;
  margin-bottom:18px;
}

.content-header h2{margin:0}
.muted{color:#6b6b7a;font-size:13px}

.blank-area{
    width: 100%;
    height: 100%;
}

.sidebar-footer {
  padding: 10px;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: center;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-logo {
  width: 40px;
  height: 40px;
  border-radius: 50%; /* rond */
  object-fit: cover;
  border: 1px solid var(--primary-color);
  background: #d1d1db;
}

.username {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-color);
}

</style>
