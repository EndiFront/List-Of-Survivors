<template>
  <header id="header">
    <div class="container">
      <a href="../App.vue">
        <img src="/logo.svg" alt="logo" />
      </a>
    </div>
  </header>
</template>

<style scoped>
#header {
  /* position: fixed; */
  width: 100%;
  z-index: 1000;
  background-color: var(--color-background);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    img{
      width: 130px;
    }
  }
}
</style>