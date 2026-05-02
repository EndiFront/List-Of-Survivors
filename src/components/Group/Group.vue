<script setup>
  import Item from './Item.vue'
</script>

<template>
  <section id="group">
    <div class="container">
      <h2>Выжившие:</h2>
      <div class="group">
        <Item 
          img="/Gallery/Masha/ava.jpg"
          name="Машискорка"
          link="/Masha"
        />
        <Item 
          img="/Gallery/Stepa/ava.jpg"
          name="Степан Пинкман"
          link="/Stepa"
        />
        <Item 
          img="/Gallery/Artem/ava.jpg"
          name="Артём Кинпинтяун"
          link="/Artem"
        />
        <Item 
          img="/Gallery/Seni/ava.jpg"
          name="Обезьяна Cеня"
          link="/Seni"
        />
        <Item 
          img="/Gallery/Roma/ava.jpg"
          name="Мастер Рома"
          link="/Roma"
        />
        <Item 
          img="/Gallery/Vlad/ava.png"
          name="Таксист Владислав"
          link="/Vlad"
        />
        <Item 
          img="/Gallery/Me/ava.png"
          name="Егор Оверрайд"
        />
        <Item 
          img="/Gallery/Ivan/ava.jpg"
          name="Иван PlayBoy"
        />
        <Item 
          img="/Gallery/Yarik/ava.jpg"
          name="Машинист Ярослав"
        />
        <Item 
          img="/Gallery/Zavar/ava.jpg"
          name="Захар Силин"
        />  
        <Item 
          img="/NN.jpg"
          name="Никита Никитин"
        />
        <Item 
          img="/NN.jpg"
          name="Никита Никитин"
        />
        <Item 
          img="/NN.jpg"
          name="Никита Никитин"
        />
        <Item 
          img="/NN.jpg"
          name="Никита Никитин"
        />
        <Item 
          img="/NN.jpg"
          name="Никита Никитин"
        />  
        <Item 
          img="/NN.jpg"
          name="Никита Никитин"
        />
        <Item 
          img="/NN.jpg"
          name="Никита Никитин"
        />
        <Item 
          img="/NN.jpg"
          name="Никита Никитин"
        />
        <Item 
          img="/NN.jpg"
          name="Никита Никитин"
        />
        <Item 
          img="/NN.jpg"
          name="Аноним"
        />  
      </div>
    </div>
  </section>
</template>

<style scoped>
  #group{
    .container{
      margin-top: calc(var(--index) * 4);
      flex-direction: column;
      margin-left: auto;
      margin-right: auto;
      width: 80%;
      display: flex;
      h2{
        font-size: calc(var(--index) * 2);
        text-align: left;
        color: var(--color-text);
      }
      .group{
        margin-top: calc(var(--index) * 2);
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        gap: 68px ;
      }
    }
  }
</style>