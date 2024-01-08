<!-- Página principal 
  Elemento pai: space-containers(espaço entre os 2 elementos filhos, feito para estilização de espaço, padding e margin)
  Elemento filhos: sec-primy e sec-secun(Elementos que são gerados para serem estilizar o tamanaho de cada um dos containers)
  sec-primy-container,sec-secun-container(elementos netos, os mesmos são feitos para estilizar o conteudo interno junto com as cores de cada metade)

  sec-primy-img: elemento filho de sec-primy-container(Elemento container que é feito para posicionar as 3 img)
  frames: elemento neto de  sec-primy-container (Elemento usado para estilizar as 3 img)

-->

<template>
  <Header :searchDrink="searchDrink" />
  <slot></slot>
  <CarouselInitialPage />
  <TesteJavascript :searcheddrinks="drinks" :emptydrink="emptydrink" />
  <slot></slot>
  <div class="space-containers">
    <section class="sec-primy">
      <div class="sec-primy-container">
        <h1>OUR STORY</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim
          cursus nisl, vel sollicitudin libero sodales sed. Nunc dapibus sapien
          in tellus tincidunt, ac sollicitudin nibh rhoncus. Nulla
          scelerisque.Aliquam eu nulla dignissim, mollis urna eu, lobortis
          mauris. Nunc malesuada, nisl vitae varius mollis, metus nunc congue
          mauris, in pharetra libero nisi eget quam. Aenean sollicitudin, augue
          non pulvinar pellentesque, neque nibh tincidunt nulla, et scelerisque
          urna est vel mi. Morbi hendrerit felis id dolor ultrices, eget
          fermentum justo molestie.
        </p>
        <img src="../assets/MD.png" alt="Logo Make Drinks" />
        <h1>HOW IT WORKS?</h1>
        <div class="sec-primy-img">
          <div class="frames">
            <img src="../assets/imgHandSelect.png" alt="Hand select" />
            <p>Choose your type of drink</p>
          </div>
          <div class="frames">
            <img src="../assets/imgDrinkCup.png" alt="Bottle and cup" />
            <p>Select your drink to see more details</p>
          </div>
          <div class="frames">
            <img src="../assets/imgFavoriteDrink.png" alt="Heart" />
            <p>Favorite your drink</p>
          </div>
        </div>
      </div>
    </section>

    <section class="sec-secun">
      <div class="sec-secun-container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim
          cursus nisl, vel sollicitudin libero sodales sed. Nunc dapibus sapien
          in tellus tincidunt, ac sollicitudin nibh rhoncus. Nulla scelerisque
          laoreet tellus, quis dignissim quam lacinia non. Donec eu purus
          faucibus, sagittis mauris non, cursus dolor. Mauris at varius magna.
          Phasellus bibendum ac libero id tempor.
        </p>
        <button>contact us</button>
        <img src="../assets/imgCoffeeDrink.png" alt="Coffee Drink" />
      </div>
    </section>
  </div>

  <slot></slot>
  <Footer />
</template>
<script setup>
const drinks = ref([]);

const searchDrink = (searcheddrink) => {
  drinks.value = searcheddrink;
  console.log(drinks.value);
};

const emptydrink = () => {
  drinks.value = [];
};
</script>

<style>
/* espaço dos containers azul e laranja */
.space-containers {
  display: flex;
  padding: 0 5%;
}

/* Lado esquerdo laranja */
.sec-primy {
  width: 4500px;
}
.sec-primy-container {
  background-color: #ff8c00;
  padding: 9em 4em 7em;
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sec-primy-container h1 {
  font-size: 82px;
  text-shadow: 2px 2px 3px black;
}

.sec-primy-container p {
  font-size: 28px;
  padding: 0 2em;

  word-spacing: 20px;
}

.sec-primy-container img {
  width: 60%;
}

.sec-primy-img {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.frames img {
  width: 75px;
}
.frames {
  text-align: center;
}
.frames p {
  font-size: 18px;
  word-spacing: 0;
  text-align: center;
}

/* Lado esquerdo Azul */
.sec-secun {
  width: 3500px;
}

.sec-secun-container {
  background-color: #002846;
  padding-top: 10.1em;
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sec-secun-container p {
  color: white;
  font-size: 28px;
  padding: 0 3em;
  word-spacing: 21px;
}

.sec-secun-container button {
  background-color: #ff8c00;
  font-size: 23px;
  margin-top: 5em;
  color: #002846;
  padding: 1em 3em;
  border-radius: 100px;
}

.sec-secun-container img {
  padding-top: 17.8em;
  width: 100%;
}

@media (max-width: 1440px) {
  .sec-primy-container {
    background-color: #ff8c00;
    padding: 9em 2em 7em;
    margin-bottom: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .sec-primy-container h1 {
    font-size: 62px;
    text-shadow: 2px 2px 3px black;
  }

  .sec-primy-container p {
    font-size: 28px;
    padding: 0 2em;

    word-spacing: 20px;
  }

  .sec-primy-container img {
    width: 60%;
  }

  .sec-primy-img {
    display: flex;
    width: 100%;
    text-align: center;
  }

  .frames img {
    width: 75px;
  }
  .frames p {
    font-size: 15px;
    word-spacing: 0;
    text-align: center;
  }

  /* Lado esquerdo Azul */
  .sec-secun {
    width: 3500px;
  }

  .sec-secun-container {
    background-color: #002846;
    padding-top: 10.1em;
    margin-bottom: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .sec-secun-container p {
    color: white;
    font-size: 28px;
    padding: 0 3em;
    word-spacing: 21px;
  }
  .sec-secun-container button {
    background-color: #ff8c00;
    font-size: 23px;
    margin-top: 5em;
    color: #002846;
    padding: 1em 3em;
    border-radius: 100px;
  }
  .sec-secun-container img {
    padding-top: 16em;
    width: 100%;
  }

  @media (max-width: 1024px) {
    /* Lado esquerdo laranja */
    .sec-secun-container {
      background-color: #002846;
      padding-top: 19.7em;
      margin-bottom: 1em;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .sec-primy-container h1 {
      font-size: 52px;
      text-shadow: 2px 2px 3px black;
    }

    .frames img {
      width: 65px;
    }

    .frames p {
      font-size: 12px;
      word-spacing: 0;
      text-align: center;
    }
  }
}

@media (max-width: 768px) {
  .sec-primy-container {
    background-color: #ff8c00;
    padding: 3em 2em 7em;
    margin-bottom: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .sec-primy-container h1 {
    font-size: 35px;
    text-shadow: 2px 2px 3px black;
  }

  .sec-primy-container p {
    font-size: 18px;
    padding: 0 2em;
    word-spacing: 15px;
  }

  .sec-primy-container img {
    width: 80%;
  }
  .sec-primy-img {
    display: flex;
    width: 100%;
    text-align: center;
  }

  .frames img {
    width: 55px;
  }
  .frames p {
    font-size: 10px;
    word-spacing: 0;
    text-align: center;
  }

  /* Lado esquerdo Azul */

  .sec-secun-container {
    background-color: #002846;
    padding-top: 4em;
    margin-bottom: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .sec-secun-container p {
    color: white;
    font-size: 18px;
    padding: 0 3em;
    word-spacing: 21px;
  }
  .sec-secun-container button {
    background-color: #ff8c00;
    font-size: 13px;
    margin-top: 5em;
    color: #002846;
    padding: 1em 3em;
    border-radius: 100px;
  }
  .sec-secun-container img {
    padding-top: 15em;
    width: 100%;
  }
}

@media (max-width: 425px) {
  .space-containers {
    display: flex;
    flex-direction: column;
  }

  .sec-primy {
    width: 100%;
  }

  .sec-secun {
    width: 100%;
  }
}
</style>
