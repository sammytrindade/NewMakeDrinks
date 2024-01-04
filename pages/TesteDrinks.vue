<!-- components/DrinkGrid.vue -->
<template>
    <div class="drink-grid">
      <div v-for="drink in drinks" :key="drink.idDrink" class="drink-card">
        <div class="card-image" :style="{ backgroundImage: `url(${drink.strDrinkThumb})` }"></div>
        <div class="card-content">
          <p class="drink-name">{{ drink.strDrink }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { fetchDrinksByCategory } from '~/apiService';
  
  const drinks = ref([]);
  
  onMounted(async () => {
    try {
      const response = await fetchDrinksByCategory('Ordinary_Drink');
      drinks.value = response || [];
    } catch (error) {
      console.error('Erro ao buscar drinks:', error);
    }
  });
  </script>
  
  <style scoped>
  .drink-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  
  .drink-card {
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .card-image {
    height: 150px;
    background-size: cover;
    background-position: center;
  }
  
  .card-content {
    padding: 10px;
  }
  
  .drink-name {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
  }
  </style>
  