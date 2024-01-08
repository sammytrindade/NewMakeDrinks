<!-- Criação de div e class "card-galery" para colocar todos os elementos em coluna sem afetar o design
Função da class
cards-container: (Conteúdo pai dos cards)
card-galery: (para melhor estilização no css)
card: (Elemento dos cards e seus devidos nomes)
card-image: (Elemento filho da class card para estilização da img)
card-title: (Elemento filho da class card para estilização do texto marcado com a tag HTML "p")
pagination: (Elemento filho da class card container, usado para estilização da paginação( Os buttons e o texto marcado pelo HTML "span")
cards-container: card-galery, pagination.
card-galery: card.
card: card-image, heart, card-title.
-->

<template>
  <div class="cards-container" v-if="paginatedDrinks.length > 0">
    <div class="card-galery">
      <div class="card" v-for="drink in paginatedDrinks" :key="drink.idDrink">
        <IconsEmptyfavorite class="heart" @click="() => addToFavorite(drink)" />
        <div @click="() => handleSelectedDrink(drink)">
          <img
            :src="drink.strDrinkThumb"
            alt="Imagem do drink"
            class="card-image"
          />
          <p class="card-title">{{ drink.strDrink }}</p>
        </div>
      </div>
    </div>
    <div class="pagination">
      <button
        @click="handlePageChange(currentPage - 1)"
        :disabled="currentPage === 1"
      >
        Before
      </button>
      <span>Página {{ currentPage }} de {{ totalPages }}</span>
      <button
        @click="handlePageChange(currentPage + 1)"
        :disabled="currentPage === totalPages"
      >
        After
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
const { paginatedDrinks, totalPages, currentPage, handlePageChange } =
  defineProps([
    "paginatedDrinks",
    "totalPages",
    "currentPage",
    "handlePageChange",
  ]);
console.log(paginatedDrinks);

const emit = defineEmits(["updatedSelectedDrinks"]);

const handleSelectedDrink = (drink) => {
  //console.log("teste do drink");
  emit("updatedSelectedDrinks", drink);
};

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

<style scoped>
.cards-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: black;
  align-items: center;
}
.card-galery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card {
  width: 22%;
  display: flex;
  padding: 10px;
  text-align: center;
  margin: 5em 5em 0;
  position: relative;
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

.card-image {
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
}
.card-title {
  position: absolute;
  top: 25.4em;
  width: 92%;
  font-weight: bold;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0),
    rgba(246, 141, 46, 0.5),
    rgba(246, 141, 46, 0.6),
    rgba(246, 141, 46, 0.6),
    rgba(246, 141, 46, 0.7),
    rgba(246, 141, 46, 0.8),
    rgba(246, 141, 46, 0.9),
    rgba(246, 141, 46, 0.95)
  );
  text-align: center;
  height: 50px;
  color: #22224f;
  font-size: 25px;
}

.pagination {
  text-align: center;
  margin-left: 38%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.pagination button:nth-child(1) {
  margin-right: 30px;
}

.pagination button {
  margin: 1em;
  padding: 2em 4em;
  margin-left: 30px;
}
.pagination span {
  color: white;
  font-size: 24px;
  padding: 2em 4em;
}

.heart {
  position: absolute;
  left: 41em;
  top: 1.4em;
  z-index: 1;
  cursor: pointer;
}

@media (max-width: 1440px) {
  .card {
    width: 24%;
    display: flex;
    padding: 10px;
    text-align: center;
    margin: 3em 2em 0;
    position: relative;
    transition: transform 0.3s;
  }
  .card-image {
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 100%;
  }
  .card-title {
    position: absolute;
    top: 14.2em;
    z-index: 1000;
    width: 94.7%;
    font-weight: bold;
    background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(246, 141, 46, 0.5),
      rgba(246, 141, 46, 0.6),
      rgba(246, 141, 46, 0.6),
      rgba(246, 141, 46, 0.7),
      rgba(246, 141, 46, 0.8),
      rgba(246, 141, 46, 0.9),
      rgba(246, 141, 46, 0.95)
    );
    text-align: center;
    height: 50px;
    color: #22224f;
    font-size: 20px;
  }

  .heart {
    left: 19.3em;
  }

  .pagination {
    text-align: center;
    margin-left: 31%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .pagination button:nth-child(1) {
    margin-right: 30px;
  }
  .pagination button {
    margin: 1em;
    padding: 2em;
  }
  .pagination span {
    color: white;
    font-size: 20px;
    padding: 2em 4em;
  }
}

@media (max-width: 1024px) {
  .card {
    width: 26%;
    display: flex;
    padding: 10px;
    text-align: center;
    margin: 2em 1em 0;
    position: relative;
    transition: transform 0.3s;
  }
  .card-image {
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 100%;
  }
  .card-title {
    width: 93.3%;
    position: absolute;
    top: 73%;
    font-weight: bold;
    background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(246, 141, 46, 0.5),
      rgba(246, 141, 46, 0.6),
      rgba(246, 141, 46, 0.6),
      rgba(246, 141, 46, 0.7),
      rgba(246, 141, 46, 0.8),
      rgba(246, 141, 46, 0.9),
      rgba(246, 141, 46, 0.95)
    );
    text-align: center;
    height: 50px;
    color: #22224f;
    font-size: 18px;
  }
  .heart {
    position: absolute;
    left: 15em;
    top: 1em;
  }
  .pagination {
    text-align: center;
    margin-left: 26.5%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .pagination button:nth-child(1) {
    margin-right: 30px;
  }

  .pagination button {
    margin: 1em;
    padding: 1em;
  }
  .pagination span {
    color: white;
    font-size: 18px;
  }
}

@media (max-width: 768px) {
  .cards-container {
    display: flex;
  }
  .card-galery {
    display: flex;
  }
  .card {
    width: 25%;
    height: 23%;
  }
  .card-title {
    width: 91%;
    position: absolute;
    top: 62%;
    font-weight: bold;
    background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(246, 141, 46, 0.5),
      rgba(246, 141, 46, 0.6),
      rgba(246, 141, 46, 0.6),
      rgba(246, 141, 46, 0.7),
      rgba(246, 141, 46, 0.8),
      rgba(246, 141, 46, 0.9),
      rgba(246, 141, 46, 0.95)
    );

    height: 50px;
    color: #22224f;
    font-size: 20px;
  }
  .heart {
    position: absolute;
    z-index: 1;
    top: 1em;
    left: 10em;
  }

  .pagination {
    text-align: center;
    margin-left: 19%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}

@media (max-width: 425px) {
  .cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: black;
    height: 100%;
  }
  .card {
    width: 80%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: transform 0.3s;
  }
  .card-title {
    top: 13.4em;
    width: 94%;
  }

  .heart {
    left: 18em;
  }

  .pagination {
    text-align: center;
    margin-left: 0%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .pagination span {
    font-size: 12px;
  }
}
</style>
