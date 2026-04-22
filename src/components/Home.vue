<script setup>
import Header from './Header.vue';
import Group from './Group/Group.vue';
</script>

<template>
  <Header />
  <main>
    <section class="beschreibung">
    <div class="container">
      <img src="/fon.jpg" alt="fon">
      <div class="text">
        <h1>Добро пожаловать в список выживших ИСП-23</h1>
        <p>Здесь можно увидеть всех выживших ИСП-23, которые смогли выжить во время сессий. Список обновляется посеместрово, поэтому не всегда можно увидеть всех выживших. Приятного просмотра!</p>
      </div>
    </div>
    </section>
    <Group />
  </main>
</template>

<style>
.beschreibung{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img{
    width: 100%;
    height: calc(var(--index) * 30);
    object-fit: cover;
    object-position: center;
    filter: brightness(30%)
  }
  .text{
    position: absolute;
    width: 60%;
    color: #fff;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h1{
      font-size: calc(var(--index) * 2.43);
      font-weight: 700;
    }
    p{
      margin-top: calc(var(--index) * 0.7);
      font-size: calc(var(--index) * 0.7);
    }
  }
}

@media (max-width: 645px) {
  .beschreibung{
    .text{
      width: 90%;
    }
  }
}
</style>