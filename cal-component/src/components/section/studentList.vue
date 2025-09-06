<template>
  <div class="student__list">
    <h4>Liste des étudiants de classe</h4>
    <div class="student__list__items">
        <div class="student__list__item">
            <div class="student__info">
            <h4>John Doe</h4>
            <p>John Doe</p>
        </div>
        <div class="student__actions">
          <button>Voir</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.student__list{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 1rem;
  padding: 1rem;
}

.student__list__items{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 1rem;
}
</style>