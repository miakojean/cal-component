<template>
    <ul class="list__frame">
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
        <li class="list__items">
            <i class="ri-team-line"></i> 
            Documents
        </li>
    </ul>
</template>

<script>
export default {

}
</script>

<style scoped>
.list__frame{
  display:flex;
  justify-content: start;
  flex-direction: column;
  gap:1rem;
  border:none;
  background:transparent;
  border-radius:8px;
  cursor:pointer;
  text-align:left;
  width: 100%;
}

.list__items {
  position: relative;
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  border-radius: 0.2rem;
}

/* Soulignement animé */
.list__items::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0.2rem; /* ajuste la distance du texte */
  width: 100%;
  height: 2px;
  background-color: var(--primary-color);; /* ta couleur primaire */
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease-in-out;
}

/* Hover → underline apparaît de gauche à droite */
.list__items:hover::after {
  transform: scaleX(1);
}

.list__items:hover {
  background: #e7e5f5;
}
.nav-item:hover{
  background:rgba(92,72,238,0.06);
}
</style>