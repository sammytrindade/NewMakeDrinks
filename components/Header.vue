<!-- navbar transparente que acompanha a página
  Elemento pai: header (Elemento que o navbar está sendo estilizado, tranparência e posição fixados)
  Elemento filho: logo (Elemento da tag "img")
  Elemento filho: button-group (Elemento da tag "button")
  elemento neto: text-button(Elemento de estilização do botão)
  elemento neto: search-container(Elemento de estilização do icon search)
  icon-button:  (Elemento da função click de todos os icons)
  icon-container: (Elemento feito para estilização dos outros 2 icons)
-->

<template>
  <header class="header">
    <div class="logo">
      <NuxtLink to="/">
        <img src="../assets/logo.png" alt="Logo Make Drinks" />
      </NuxtLink>
    </div>

    <div class="button-group">
      <button @click="handleContactUs" class="text-button">Contact Us</button>

      <div class="search-container">
        <button class="icon-button">
          <input
            v-model="inputData"
            @change="handleInputChange"
            placeholder="Search for the drink name"
            v-if="isSearchVisible"
            id="search-input"
            ref="searchInput"
            :style="{
              width: searchInputWidth,
            }"
          />
        </button>
        <div class="icon-container">
          <IconsSearch @click="handleButtonClick" />
        </div>
      </div>

      <button @click="handleUser" class="icon-button">
        <div class="icon-container">
          <IconsUser />
        </div>
      </button>

      <button @click="handleMenu" class="icon-button">
        <div class="icon-container">
          <IconsMenuBars />
        </div>
      </button>
    </div>
  </header>
</template>

<script>
import IconsSearch from "../components/icons/search.vue";
import IconsUser from "../components/icons/user.vue";
import IconsMenuBars from "../components/icons/menuBars.vue";

export default {
  components: {
    IconsSearch,
    IconsUser,
    IconsMenuBars,
  },
  props: {
    searchDrink: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      searchInputWidth: "0px",
      isSearchVisible: false,
      inputData: "",
    };
  },
  methods: {
    handleContactUs() {
      //console.log('Botão "Contact Us" clicado!');
    },

    handleInputChange() {
      console.log(this.inputData);
      fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
          this.inputData
      )
        .then((response) => response.json())
        .then((value) => this.searchDrink(value.drinks));
    },

    handleButtonClick() {
      this.isSearchVisible = !this.isSearchVisible;
      if (!this.isSearchVisible) {
        this.searchInputWidth = "0px";
      } else {
        this.searchInputWidth = "200px";
      }
    },

    handleUser() {
      //console.log("Botão de usuário clicado!");
    },
    handleMenu() {
      //console.log("Botão de menu clicado!");
    },
  },
};
</script>

<style scoped>
.text-button {
  padding: 10px 15px;
  font-size: 16px;
  color: rgb(255, 255, 255); /* Cor do texto do botão */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  background: none;
}

.carousel__item img {
  width: 100vw;
  height: 89vh;
  object-fit: cover;
}

.text-button:hover {
  background-color: #45a049; /* Cor de fundo do botão ao passar o mouse */
}
.icon-button {
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 5px; /* Adiciona margem entre os botões */
  margin-right: 5px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #4b4a483d; /* Cor de fundo do cabeçalho */
  color: rgb(187, 24, 24);
  height: 50px; 
  position: fixed;
  z-index: 1;
  width: 98vw;
}
.search-container {
  display: flex;
  align-items: center;
}

input {
  padding-left: 2px;
}
#search-input {
  margin-left: 10px;
  border-radius: 100px;
  border: #ff8c00;
  padding: 8px; 
}

.button-group {
  display: flex; /* Torna os botões filhos diretos da .button-group em linha */
}

.logo img {
  height: 40px; 
}
.icon-container {
  background-color: #ff8c00; 
  width: 40px; 
  height: 40px; 
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%; /* Para tornar o background um círculo */
  /* Espaçamento entre os ícones*/
  margin-left: 0;
}
.carousel-text h3 {
  font-size: 30px;
  padding-bottom: 15px;
}
.carousel-text h1 {
  font-size: 60px;
  padding-bottom: 15px;
}
.carousel-text p {
  font-size: 20px;
}
.corousel-button {
  background-color: #ff8c00;
  width: 300px;
  padding: 15px;
  border-radius: 100px;
  position: absolute;
  left: 30%;
  margin-top: 40px;
  box-sizing: border-box;
}
.corousel-button button {
  background-color: #ff8c00;
  padding: 18px;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  transition: all 0.5s;
  box-sizing: border-box;
}
.corousel-button button:hover {
  background-color: rgba(0, 0, 0, 0.349);
}
button:nth-child(1) {
  margin-right: 15px;
}

@media (max-width: 425px) {
  .text-button {
    display: none;
  }
  .logo img {
    width: 123px;
  }
  .button-group {
    margin-right: 45px;
  }
}
</style>
