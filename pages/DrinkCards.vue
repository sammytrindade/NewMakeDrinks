<template>
  <div class="container-cards">
    <div v-for="drink in drinks" :key="drink.idDrink" class="card">
      <div class="img-cards" @click="">
        <img :src="drink.strDrinkThumb" alt="Drink Image" />
        <div class="card-text">
          {{ drink.strDrink }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

type DrinkResponse = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

export default {
  components: {},

  data() {
    return {
      drinks: [] as DrinkResponse[],
    };
  },
  async created() {
    try {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
      );
      const data = await response.json();
      this.drinks = data.drinks || [];
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
};
</script>

<style scoped>
.container-cards {
  background-color: #f68d2e;
  width: 100%;
  min-height: 100vh;
  padding: 16px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colunas */
  grid-template-rows: repeat(3, 1fr); /* 3 linhas */
  gap: 16px;
}

.card {
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 16px;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
}

.img-cards img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-text {
  padding: 16px;
  text-align: center;
}
</style>
