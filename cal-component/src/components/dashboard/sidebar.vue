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
        <p>Aucune école enregistrée</p>

      </div>

        <div class="my__school">
          <h4>
            Paramètres 
          </h4>
        </div>
      </nav>

        <div class="sidebar-footer">
          <small>Version 1.0</small>
        </div>
    </aside>
  </div>
</template>

<script lang="ts">
import frame from '../items/frame.vue';

export default {
  components: {
    frame,
  },
  setup() {
    return {};
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
</style>
