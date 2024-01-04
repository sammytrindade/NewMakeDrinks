<template>
  <header class="header">
    <div class="logo">
      <img src="@/assets/logo.png" alt="Logo" />
    </div>

    <div class="button-group">
      <button @click="handleContactUs" class="text-button">Contact Us</button>

      <div class="search-container">
        <button class="icon-button">
          <input
            placeholder="Digite aqui"
            v-if="isSearchVisible"
            id="search-input"
            ref="searchInput"
            @change="handleButtonChange()"
            v-model="searchValue"
            :style="{
              width: searchInputWidth,
            }"
          />
        </button>
        <div class="icon-container">
          <IconsSearch @click="handlebuttonclick" />
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
  <header class="carousel">
    <Carousel :autoplay="1700" :wrap-around="true">
      <Slide v-for="slide in slides" :key="slide">
        <div class="carousel__item"><img :src="slide" alt="" /></div>
      </Slide>

      <template #addons>
        <Pagination class="pagination" />
      </template>
    </Carousel>
    <div class="carousel-text">
      <h3>WELKOME TO</h3>
      <h1>MAKE DRINKS</h1>
      <p>
        Explore your favorite drinks and discover which ingredients are used in
        their preparation.
      </p>

      <div class="corousel-button">
        <button>Ordinary drinks</button>
        <button>Cocktails</button>
      </div>
    </div>
  </header>

  <section class="sec-primy">
    <div class="container">
      <h1>OUR STORY</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim
        cursus nisl, vel sollicitudin libero sodales sed. Nunc dapibus sapien in
        tellus tincidunt, ac sollicitudin nibh rhoncus. Nulla scelerisque.
      </p>
    </div>
  </section>
</template>

<script>
import IconsSearch from "../components/icons/search.vue";
import IconsUser from "../components/icons/user.vue";
import IconsMenuBars from "../components/icons/menuBars.vue";
import "vue3-carousel/dist/carousel.css";
import {
  fetchDrinksByName
} from "../apiService"

import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  components: {
    IconsSearch,
    IconsUser,
    IconsMenuBars,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },

  data() {
    return {
      searchValue: '',
      drinks: [],
      searchInputWidth: "0px",
      isSearchVisible: false,
      slides: [
        "https://mestredosdrinks.com/wp-content/uploads/2022/04/Drinks-tudo-que-voce-precisa-saber-para-fazer-Drinks-Saborosos.jpg",
        "https://www.emporiotambo.com.br/pub/media/resized/1300x800/ves/blog/xdrinks-classicos.jpeg.pagespeed.ic.f_zQaQpUej.jpg",
        "https://s2.glbimg.com/bdczSTxShj6HVOvLmW1psKEP5aE=/top/e.glbimg.com/og/ed/f/original/2019/12/12/drinks-receitas.jpg",
      ],
    };
  },
  methods: {
    handleButtonChange() {
      console.log(this.searchValue);
      fetchDrinksByName(this.searchValue).then((drinks) => {
        this.drinks = drinks;
        console.log(this.drinks)
      });
    },
    handleContactUs() {
      console.log('Botão "Contact Us" clicado!');
    },

    handlebuttonclick() {
      this.isSearchVisible = !this.isSearchVisible;
      if (!this.isSearchVisible) {
        this.searchInputWidth = "0px";
      } else {
        this.searchInputWidth = "200px";
      }
    },

    handleUser() {
      console.log("Botão de usuário clicado!");
    },
    handleMenu() {
      console.log("Botão de menu clicado!");
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
/* .icon-button:nth-child(1){
  height: 20px;
  width: 20px;
  margin-right: -30px;
  z-index: 1;
  transition: all .2s;
}
.icon-button:nth-child(1):active{
  width: 160px;
  margin-right: 0;
} */
.icon-button {
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 5px; /* Adiciona margem entre os botões */
  margin-right: 5px;
}

/* .icon-button:hover {
   Adicione estilos de destaque quando o mouse estiver sobre os botões de ícone, se necessário 
}*/
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
  padding: 8px; /* Ajuste conforme necessário */
}

.button-group {
  display: flex; /* Torna os botões filhos diretos da .button-group em linha */
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #4b4a483d; /* Cor de fundo do cabeçalho */
  color: rgb(187, 24, 24);
  height: 50px; /* Ajuste conforme necessário */
  position: fixed;
  z-index: 1;
  width: 98vw;
}

.logo img {
  height: 40px; /* Ajuste conforme necessário */
}
.icon-container {
  background-color: #ff8c00; /* Laranja */
  width: 40px; /* Ajuste conforme necessário */
  height: 40px; /* Ajuste conforme necessário */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%; /* Para tornar o background um círculo */
  /* Espaçamento entre os ícones, ajuste conforme necessário */
  margin-left: 0;
}
.carousel {
  position: relative;
}
.carousel-text {
  position: absolute;
  left: 30%;
  top: 15%;
  background-color: transparent;
  color: white;
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

button:nth-child(2) {
  margin-left: 15px;
}

.sec-primy {
  padding: 0 60px;
}
.container {
  background-color: #ff8c00;
  width: 55%;
}
</style>
