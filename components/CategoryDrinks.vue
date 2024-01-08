<template>
  <div>
    <CategoryButton
      :categories="categories"
      :drinks="drinks"
      @updatedFilteredDrinks="updatedFilteredDrinks"
      @updatedCurrentPage="updatedCurrentPage"
      :handlePageChange="handlePageChange"
    />
    <CardsComponent
      :paginatedDrinks="
        searcheddrinks.length > 0 ? searcheddrinks : paginatedDrinks
      "
      :totalPages="totalPages"
      :currentPage="currentPage"
      :handlePageChange="handlePageChange"
      @updatedSelectedDrinks="updatedSelectedDrinks"
    />
    <div v-if="isModalOpen">
      <DrinkModal
        :ingredientsAndMeasures="ingredientsAndMeasures"
        :closeModal="closeModal"
        :selectedDrinks="selectedDrinks"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, onUnmounted } from "vue";
import CategoryButton from "../components/CategoryButton.vue";
import CardsComponent from "../components/CardsComponent.vue";
import DrinkModal from "../components/DrinkModal.vue";

const categories = ref([]);
const drinks = ref([]);
const currentPage = ref(1);
const filteredDrinks = ref([]);
const paginatedDrinks = ref([]);
const drinksPerPage = 9;
const selectedDrinks = ref({});
const isModalOpen = ref(false);
const ingredientsAndMeasures = ref([]);
const { searcheddrinks, emptydrink } = defineProps([
  "searcheddrinks",
  "emptydrink",
]);

const fetchDrinks = async () => {
  try {
    let response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
    );
    response = await response.json();
    categories.value = response.drinks;
    categories.value.forEach(async (category) => {
      let categoryDrinks = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.strCategory.replaceAll(
          " ",
          "_"
        )}`
      );
      categoryDrinks = await categoryDrinks.json();
      drinks.value.push({
        category: category.strCategory,
        drinks: categoryDrinks.drinks,
      });
    });
  } catch (error) {
    console.error("Error to search the category", error);
  }
};

onMounted(() => {
  fetchDrinks();
});

const handlePageChange = (newPage: number) => {
  if (newPage >= 1 && newPage <= totalPages.value) {
    currentPage.value = newPage;
  }
  const maxDrinks = currentPage.value * drinksPerPage;
  const minDrinks = (currentPage.value - 1) * drinksPerPage;
  paginatedDrinks.value = filteredDrinks.value.filter((d, i) => {
    if (i < maxDrinks && i >= minDrinks) {
      return true;
    }
    return false;
  });
};

const totalPages = computed(
  () => Math.ceil(filteredDrinks.value.length / drinksPerPage) || 0
);
const updatedFilteredDrinks = (newFilteredDrinks) => {
  emptydrink();
  filteredDrinks.value = newFilteredDrinks;
};
const updatedCurrentPage = (newdCurrentPage) => {
  currentPage.value = newdCurrentPage;
};
const updatedSelectedDrinks = (newdSelectedDrinks) => {
  ingredientsAndMeasures.value = [];
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${newdSelectedDrinks.strDrink}`
  )
    .then((response) => response.json())
    .then((value) => value.drinks[0])
    .then((value) => (selectedDrinks.value = value))
    .then((value) => {
      let i = 0;
      for (const prop in value) {
        if (!prop.startsWith("strIngredient")) {
          continue;
        }
        if (!value[prop]) {
          continue;
        }
        ingredientsAndMeasures.value.push({
          ingredients: value[prop],
          measure: value["strMeasure" + prop.match(/\d+/)[0]] || "",
        });
      }
    })
    .then(() => (isModalOpen.value = true));
};
const closeModal = () => {
  isModalOpen.value = false;
};
</script>
