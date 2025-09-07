<template>
  <nav class="navbar">
    <div class="logo__nav">
        <h3>Calschool</h3>
    </div>

    <ul class="nav__items">
        <li class="list__items">Ecole</li>
        <li class="list__items">Classes</li>
        <li class="list__items">Comptabilité</li>
        <li class="list__items">A propos</li>
        <li class="list__items">Support</li>
    </ul>

    <div class="nav__btn">
        
    </div>
  </nav>
</template>

<script>
export default {
    components:{
       
    }
}
</script>

<style scoped>
.navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    width: 100%;
}

.nav__items{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;

}

.list__items:hover{
    cursor: pointer;
    text-decoration: underline;
}
</style>