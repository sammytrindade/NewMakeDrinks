<template>
  <div class="container">
    <label for="category">CHOSE YOUR DRINK CATEGORY</label>
    <select v-model="selectedCategory" @change="handleCategoryChange">
      <option
        v-for="category in categories"
        :key="category.strCategory"
        :value="category.strCategory"
      >
        {{ category.strCategory }}
      </option>
    </select>
  </div>
</template>
<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";
let { categories, drinks, handlePageChange } = defineProps([
  "categories",
  "drinks",
  "handlePageChange",
]);

const emit = defineEmits(["updatedFilteredDrinks", "updatedCurrentPage"]);

const selectedCategory = ref("");

const filterDrinks = () => {
  if (!selectedCategory.value) return;

  try {
    const filteredDrinks = drinks.filter(
      (drink) => drink.category === selectedCategory.value
    )[0].drinks;
    emit("updatedFilteredDrinks", filteredDrinks);
    emit("updatedCurrentPage", 1);
    handlePageChange(1);
  } catch (error) {
    //console.error("Eror mensage to 400/500:", error);
  }
};

const handleCategoryChange = () => {
  filterDrinks();
};
</script>
<style scoped>
.container {
  text-align: center;
  position: relative;
  bottom: 30em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 8em;
}
label {
  color: white;
  font-size: 32px;
}
select {
  background-color: #ff8c00;
  padding: 1em 5em;
  border-radius: 100px;
}

@media (max-width: 1440px) {
  .container {
    text-align: center;
    position: relative;
    bottom: 20em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 8em;
  }

  label {
    color: white;
    font-size: 27px;
  }
  select {
    background-color: #ff8c00;
    padding: 1em 5em;
    border-radius: 100px;
  }
}
</style>
