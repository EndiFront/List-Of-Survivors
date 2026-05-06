<template>
    <footer id="footer">
      <div class="container">
        <a href="/">
          <img src="/logo.svg" alt="logo" />
        </a>
      </div>
    </footer>
  </template>
  
  <style scoped>
  #footer {
    margin-top: calc(var(--index) * 3.5);
    width: 100%;
    z-index: 1000;
    background-color: var(--color-dark-blue);
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