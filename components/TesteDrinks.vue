<!-- components/DrinkGrid.vue -->
<template>
  <CategoriesButtons :category = "selectedCategory" />
  <div class="drink-grid">
    <div
      v-for="drink in drinksbycategory"
      :key="drink.idDrink"
      class="drink-card"
    >
      <div
        class="card-image"
        :style="{ backgroundImage: `url(${drink.strDrinkThumb})` }"
      ></div>
      <div class="card-content">
        <p class="drink-name">{{ drink.strDrink }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { fetchDrinksByCategory } from "~/apiService";

const selectedCategory = ref("");

const drinksbycategory = ref(
  [] as { strDrinkThumb: string; strDrink: string; idDrink: string }[]
);

const handleCategoryChange = async (newCategory: string) => {
  console.log(newCategory);
  try {
    console.log(newCategory);
    if (newCategory) {
      const response = await fetchDrinksByCategory(newCategory);
      drinksbycategory.value = response || [];
      console.log(response);
    }
  } catch (error) {
    console.error(`Erro ao buscar categoria`, error);
  }
};

// Chame a função handleCategoryChange quando selectedCategory for alterada
onMounted(() => {
  console.log("selectedCategory.value: onMounted " + selectedCategory.value);
  handleCategoryChange(selectedCategory.value);
});

// Chame a função handleCategoryChange quando selectedCategory for alterada
watch(selectedCategory, (newCategory) => {
  handleCategoryChange(newCategory.value);
  console.log("selectedCategory.value:  " + selectedCategory.value);
  console.log("newCategory.value:  " + newCategory);
});

// Função para criar as opções do combobox
// const createOptions = () => {
//   const categories = drinks.value.slice(0, 10).map((category: any) => ({
//     strCategory: category.strCategory,
//   }));
//   drinks.value = categories;
// };
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
