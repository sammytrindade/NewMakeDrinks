<!-- Container que exibe as informações do drink após clicar no card
  drink-modal: (container de estilização pai)
  header: class de estilização dos elementos (Nome do drink)
-->

<template>
  <div class="drink-modal">
    <div class="header">
      <h2>{{ selectedDrinks.strDrink }}</h2>
      <h2>{{ selectedDrinks.strDrinkThumb }}</h2>
      <div class="header-img">
        <img :src="selectedDrinks.strDrinkThumb" alt="Drink Image" />
      </div>
      <div v-for="iandm in ingredientsAndMeasures" :key="iandm.ingredients">
        <p>{{ iandm.ingredients }} - {{ iandm.measure }}</p>
      </div>
    </div>

    <!-- <div @click="closeModal">
      <p>x</p> colocar o ícone para fechar o modal
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
let { ingredientsAndMeasures, selectedDrinks, closeModal } = defineProps([
  "selectedDrinks",
  "closeModal",
  "ingredientsAndMeasures",
]);
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
.description {
  flex: 1;
}
.header-img {
  display: flex;
}
.header-img img {
  width: 30%;
  border-radius: 100%;
}
</style>
