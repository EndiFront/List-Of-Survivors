<script setup>
  defineProps({
    img: String,
    name: String,
    link: String
  })
</script>

<template>
  <div id="item">
    <img :src="img" alt="avatar" />
    <h2>{{ name }}</h2>
    <router-link :to="link" class="a">Узнать о мне</router-link>
  </div>
</template>

<style scoped>
  #item{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    height: 380px;
    border-radius: 10%;
    background: #1A2B3C;
    border: 3px solid #E2D1A3;
    box-shadow: #000 10px 15px 20px;
    img{
      width: 180px;
      height: 180px;
      object-fit: cover;
      margin-top: 30px;
      border-radius: 10%;
    }
    h2{
      font-size: 25px;
      text-align: center;
      font-weight: 600;
      margin-top: 30px;
      color: #C5A059;
    }
    .a{
      margin-top: 30px;
      padding: 10px 20px;
      background: #1A2B3C;
      border: 2px solid #E2D1A3;
      color: #C5A059;
      border-radius: 10px;
      transition: all .3s ease;
    }
    .a:hover{
      background: #C5A059;
      color: #1A2B3C;
      box-shadow: #000 10px 10px 20px;
    }
    @media(hover: hover){
      .a:hover{
        background: #C5A059;
        color: #1A2B3C;
        box-shadow: #000 10px 10px 20px;
      }
    }
  }
</style>