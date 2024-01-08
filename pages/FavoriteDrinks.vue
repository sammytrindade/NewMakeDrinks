<template>
  <Header />
  <div class="card" v-for="drink in card" :key="drink.idDrink">
    <IconsEmptyfavorite class="heart" @click="() => addToFavorite(drink)" />

    <img :src="drink.strDrinkThumb" alt="Drink Image" class="card-image" />
    <p class="card-title">{{ drink.strDrink }}</p>
  </div>
  <Footer />
</template>
<script setup lang="ts">
const card = ref([]);
onMounted(() => {
  card.value = JSON.parse(localStorage.getItem("favorite") || "[]");
});

const addToFavorite = (drink) => {
  let favoritesCards = JSON.parse(localStorage.getItem("favorite") || "[]");

  if (favoritesCards.find((value) => value.strDrink === drink.strDrink)) {
    favoritesCards = favoritesCards.filter(
      (value) => value.strDrink !== drink.strDrink
    );
    localStorage.setItem("favorite", JSON.stringify(favoritesCards));
    console.log(localStorage.getItem("favorite"));

    return;
  }

  localStorage.setItem("favorite", JSON.stringify([...favoritesCards, drink]));
  console.log(localStorage.getItem("favorite"));
};
</script>
