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

  data() {
    return {
      searchInputWidth: "0px",
      isSearchVisible: false,
    };
  },
  methods: {
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
.barra_pesq {
  position: relative;
  top: 25px;
}
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
</style>
