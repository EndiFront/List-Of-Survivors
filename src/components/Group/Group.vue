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