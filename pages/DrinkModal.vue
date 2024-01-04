<!-- DrinkModal.vue -->
<template>
    <div class="drink-modal">
      <div class="header">
        <h2>{{ drinkName }} nome do drink</h2>
      </div>
      <div class="body">
        <div>
          <h3>Álcoolico?</h3>
          <p>{{ alcoholType }} sim/não</p>
        </div>
        <div>
          <h3>Tipo de Copo</h3>
          <p>{{ glassType }} vidro</p>
        </div>
        <div>
          <h3>Ingredientes</h3>
          <ul>
            <li v-for="(ingredient, index) in ingredients" :key="index">{{ ingredient }}</li>
          </ul>
        </div>
      </div>
      <div class="footer">
        <div class="logo">
          <!-- Insira a logo do projeto aqui -->
        </div>
        <div class="description">
          <h3>Preparo:</h3>
          <p>{{ preparation }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  
  const drinkName = ref('');
  const alcoholType = ref('');
  const glassType = ref('');
  const ingredients = ref([]);
  const preparation = ref('');
  
  onMounted(async () => {
    // Substitua as URLs das APIs pelos endpoints reais
    const alcoholApi = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=');
    const alcoholData = await alcoholApi.json();
    alcoholType.value = alcoholData.type;
  
    const glassApi = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=');
    const glassData = await glassApi.json();
    glassType.value = glassData.type;
  
    // Substitua a URL da API de ingredientes pelo endpoint real
    const ingredientsApi = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
    const ingredientsData = await ingredientsApi.json();
    ingredients.value = ingredientsData.ingredients;
  
    // Substitua a URL da API de preparo pelo endpoint real
    const preparationApi = await fetch('');
    const preparationData = await preparationApi.json();
    preparation.value = preparationData.preparation;
  });
  </script>
  
  <style scoped>
  .drink-modal {
    background-color: #ffa500; /* Laranja */
    color: #000;
    padding: 20px;
    border-radius: 10px;
  }
  
  .header {
    text-align: center;
  }
  
  .body {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  .footer {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    background-color: #000; /* Preto */
    color: #fff;
    padding: 10px;
    border-radius: 5px;
  }
  
  .logo {
    /* Estilo da logo do projeto */
  }
  
  .description {
    flex: 1;
  }
  </style>
  