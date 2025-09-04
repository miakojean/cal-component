<template>
        
    <div class="dashboard__main">
        <aside :class="['sidebar', { collapsed }]" aria-label="Sidebar">
            <div class="brand">
                
            </div>

            <nav class="nav">

                <div class="my__school">
                    <h4>
                        CalSchool Dashboard
                    </h4>
                </div>
                
                <ul class="list__frame">
                    <li class="list__items">
                        <i class="ri-dashboard-line"></i> 
                        Dashboard
                    </li>
                    <li class="list__items">
                        <i class="ri-bank-line"></i> 
                        Classes
                    </li>
                    <li class="list__items">
                        <i class="ri-team-line"></i> 
                        Étudiants
                    </li>
                    <li class="list__items">
                        <i class="ri-money-dollar-circle-line"></i> 
                        Frais de scolarité
                    </li>
                    <li class="list__items">
                        <i class="ri-bar-chart-2-line"></i> 
                        Comptabilité
                    </li>
                </ul>

                <div class="my__school">
                    <h4>
                        CalSchool Dashboard
                    </h4>
                </div>
            </nav>

            <div class="sidebar-footer" v-if="!collapsed">
                <small>Version 1.0</small>
            </div>
        </aside>
    </div>
    

</template>

<script setup>
import { ref } from 'vue'

const collapsed = ref(false)
const items = ['Tableau de bord', 'Utilisateurs', 'Transactions', 'Paramètres']

function toggle() {
  collapsed.value = !collapsed.value
}
</script>

<style scoped>

*{box-sizing:border-box}

.dashboard__main{
    display: flex;
    justify-content: start;
    width: 100%;
    height: 100%;
}

.sidebar{
  width: 280px;
  background:linear-gradient(180deg, var(--white), #fbfbff);
  border-right:1px solid #ececf7;
  padding:16px;
  display:flex;
  flex-direction:column;
  justify-content: start;
  gap:12px;
  transition:width 180ms ease;
}

.sidebar.collapsed{
  width:72px;
}

.nav{
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  gap: 1rem;
}

.list__frame{
  display:flex;
  justify-content: start;
  flex-direction: column;
  gap:0.5rem;
  border:none;
  background:transparent;
  padding:10px;
  border-radius:8px;
  cursor:pointer;
  text-align:left;
  width: 100%;
}

.list__items {
  position: relative;
  display: flex;
  gap: 1rem;
  padding: 0.8rem;
  cursor: pointer;
  font-weight: 500;
  transition: color 0.2s ease-in-out;
}

/* Soulignement animé */
.list__items::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0.2rem; /* ajuste la distance du texte */
  width: 100%;
  height: 2px;
  background-color: #5c48ee; /* ta couleur primaire */
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease-in-out;
}

/* Hover → underline apparaît de gauche à droite */
.list__items:hover::after {
  transform: scaleX(1);
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
</style>
