<script setup>
import Lightgallery from "lightgallery/vue";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

// Стили
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const plugins = [lgZoom, lgThumbnail];
</script>

<template>
  <div class="survivor-profile">
    <div class="header-banner">
      <router-link to="/" class="a"><= Вернуться в список</router-link>
    </div>

    <div class="main-content">
      <div class="dossier-gallery">
        <div class="section-header">
          <span class="ornament"></span>
          <h2>Галерея</h2>
          <span class="ornament"></span>
        </div>

        <lightgallery
          :settings="{ speed: 500, plugins: plugins }"
          class="gallery-grid"
        >
          <a
            v-for="n in 6"
            :key="n"
            :href="'/Gallery/Masha/' + n + '.jpg'"
            class="gallery-item"
          >
            <div class="image-wrapper">
              <img :src="'/Gallery/Masha/' + n + '.jpg'" class="gallery-img" />
              <div class="vignette"></div>
              <div class="img-overlay">ПРИБЛИЗИТЬ</div>
            </div>
            <div class="corner tl"></div>
            <div class="corner tr"></div>
            <div class="corner bl"></div>
            <div class="corner br"></div>
          </a>
        </lightgallery>
      </div>
      <div class="about-dossier">
        <div class="section-header">
          <span class="ornament"></span>
          <h2>О мне</h2>
          <span class="ornament"></span>
        </div>
        <div class="dossier-card">
          <div class="card-interior">
            <p>
              На первый взгляд она производит впечатление человека с очень
              выразительным и переменчивым стилем. У неё мягкие черты лица,
              которые она умело подчеркивает с помощью очков в стильной темной
              оправе. Цвет волос, судя по кадрам, варьируется от естественных
              светлых оттенков до глубокого рыжего и даже контрастного
              черно-розового в сценическом образе. Такая готовность к
              экспериментам с внешностью говорит о творческой натуре и желании
              пробовать себя в разных ролях, будь то уютный повседневный образ в
              худи или детально проработанный косплей с использованием сложного
              грима и аксессуаров.
            </p>
            <br />
            <p>
              Как человек, она кажется личностью разносторонней и достаточно
              уверенной в себе. Роль старосты требует организованности, но её
              фотографии намекают на то, что за официальным статусом скрывается
              живой и увлеченный человек. В ней чувствуется сочетание
              серьезности, необходимой для учебы, и артистизма. Тот факт, что
              она не боится примерять на себя необычные образы, может
              свидетельствовать об открытости новому и хорошем воображении —
              качествах, которые наверняка помогают ей находить нестандартные
              подходы в общении с группой. Она выглядит как лидер, который умеет
              быть на одной волне с коллективом, сохраняя при этом свою
              индивидуальность.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.survivor-profile {
  min-height: 100vh;
  background-color: var(--color-background);
  color: var(--color-text);
  font-family: "Garamond", "Georgia", serif;
  padding: 60px 20px;
}

.header-banner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.a {
  color: var(--color-gold);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 30px;
  text-decoration: none;
  display: block;
}

.main-content {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 100px;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
  color: var(--color-gold);
}

.section-header h2 {
  font-family: "Cinzel", "Times New Roman", serif;
  font-size: 2rem;
  text-transform: uppercase;
  margin: 0;
}

.ornament {
  flex-grow: 1;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    var(--color-gold),
    transparent
  );
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.gallery-item {
  display: block;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
  transition:
    transform 0.4s ease,
    box-shadow 0.4s ease;
  border: 1px solid rgba(197, 160, 89, 0.1);
}

.gallery-item:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 15px 40px rgba(197, 160, 89, 0.3);
  border-color: rgba(197, 160, 89, 0.5);
}

.image-wrapper {
  position: relative;
  overflow: hidden;
}

.gallery-img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}

.gallery-item:hover .gallery-img {
  transform: scale(1.1);
}

.vignette {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.9);
  pointer-events: none;
}

.img-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(16, 28, 49, 0.8);
  color: var(--color-gold);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Cinzel", serif;
  font-size: 1.3rem;
  letter-spacing: 2px;
  opacity: 0;
  transition: opacity 0.4s ease;
  backdrop-filter: blur(2px);
}

.gallery-item:hover .img-overlay {
  opacity: 1;
}

.corner {
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid var(--color-gold);
  pointer-events: none;
  opacity: 0.3;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .corner {
  opacity: 1;
}

.tl {
  top: 10px;
  left: 10px;
  border-right: none;
  border-bottom: none;
}
.tr {
  top: 10px;
  right: 10px;
  border-left: none;
  border-bottom: none;
}
.bl {
  bottom: 10px;
  left: 10px;
  border-right: none;
  border-top: none;
}
.br {
  bottom: 10px;
  right: 10px;
  border-left: none;
  border-top: none;
}

.about-dossier {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dossier-card {
  width: 100%;
  max-width: 950px;
  background-color: var(--color-dark-blue);
  padding: 10px;
  border-radius: 12px;
  border: 3px solid var(--color-gold);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
  position: relative;
}

.card-interior {
  padding: 50px;
  background-color: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
}

/* Стили для p внутри card-interior теперь работают напрямую */
.card-interior p {
  text-align: justify;
  margin-bottom: 25px;
  font-size: 1.2rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  text-indent: 30px;
}

.card-interior p:last-of-type {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .section-header h2 {
    font-size: 1.5rem;
  }
  .card-interior {
    padding: 25px;
  }
  .card-interior p {
    font-size: 1.1rem;
    line-height: 1.6;
    text-indent: 15px;
  }
  .gallery-grid {
    grid-template-columns: 1fr 1fr;
  }
  .gallery-img {
    height: 180px;
  }
}
</style>
