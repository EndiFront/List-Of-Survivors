<script setup>
import { onMounted } from "vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Group from "./Group/Group.vue";

onMounted(() => {
  const bgImg = document.querySelector(".fon");
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    const scaleValue = 1 + scrolled / 2000;
    bgImg.style.transform = `scale(${scaleValue})`;
  });
});
</script>

<template>
  <Header />
  <main>
    <section class="beschreibung">
      <!-- Фон -->
      <div class="img-wrapper">
        <img class="fon" src="/fon.jpg" alt="fon" />
      </div>

      <!-- Текст -->
      <div class="text">
        <h1>Добро пожаловать в список выживших ИСП-23</h1>
        <p>
          Здесь можно увидеть всех выживших ИСП-23, которые смогли выжить во
          время сессий. <br />
          Список обновляется посеместрово. Приятного просмотра!
        </p>
      </div>
    </section>
    <!-- Группа -->
    <Group />
  </main>
  <Footer />
</template>

<style scoped>
.beschreibung {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.img-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
}

.fon {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(30%);
  will-change: transform;
  transition: transform 0.1s ease-out;
}

.text {
  color: #fff;
  text-align: center;
  width: 60%;
}

h1 {
  font-size: calc(var(--index) * 2.43);
  font-weight: 700;
}

p {
  font-size: calc(var(--index) * 0.83);
}

@media (max-width: 645px) {
  .text {
    width: 90%;
  }
}
</style>
