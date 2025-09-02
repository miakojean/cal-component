<template>
  <div class="auth-options">
    <label class="remember">
      <input type="checkbox" id="remember" />
      <span>Se souvenir de moi</span>
    </label>
    <a href="#" class="forgot">Mot de passe oublié&nbsp;?</a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.auth-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  width: 100%;
  font-size: 0.95rem;
}

.remember {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  user-select: none;
}

.remember input[type="checkbox"] {
  accent-color: steelblue;
  width: 1rem;
  height: 1rem;
}

.forgot {
  color: #888;
  text-decoration: none;
  transition: color 0.2s ease;
}

.forgot:hover {
  color: #333;
  text-decoration: underline;
}
</style>