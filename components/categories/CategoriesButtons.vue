<template>
  <div>
    <select
      :value="selectedCategory"
      id="categorySelect"
      @change="handleCategory"
    >
      <option disabled value="">Choose the category of your drink</option>
      <option
        v-for="drink in drinks"
        :key="drink.strCategory"
        :value="drink.strCategory"
      >
        {{ drink.strCategory }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, defineEmits } from "vue";
import { fetchCategoriesList } from "~/apiService";

const props = defineProps(["category"]);
const emits = defineEmits(["update:category"]);

const drinks = ref([] as { strCategory: string }[]);
const selectedCategory = ref("");

const fetchDrinks = async () => {
  try {
    const response = await fetchCategoriesList();
    drinks.value = response || [];
  } catch (error) {
    console.error(`Erro ao buscar categoria`, error);
  }
};

const handleCategory = async (event: Event) => {
  console.log("aaaaaaaa");
  selectedCategory.value = (event.target as HTMLSelectElement).value;
  console.log("teste2" + selectedCategory.value);
  emits("update:category", selectedCategory.value);
};

onMounted(() => {
  fetchDrinks();
});

watch(
  () => props.category,
  (newCategory) => {
    console.log("Nova categoria:", newCategory);
  }
);
</script>
