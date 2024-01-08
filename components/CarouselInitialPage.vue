<!-- Arquivo carrossel da página inicial

Elemento pai: carousel(Estilizando todo o composto do arquivo)
Elemento filho: carousel__item(Elemento para acionar a tag HTML img que exibirá as img do carousel)
Elemento filho: carousel-text(Elemento box para estilização dos textos que se encontram no centro do carousel)
-->

<template>
  <header class="carousel">
    <Carousel :autoplay="1700" :wrap-around="true">
      <Slide v-for="slide in slides" :key="slide">
        <div class="carousel__item"><img :src="slide" alt="" /></div>
      </Slide>
      <template #addons>
        <Pagination />
      </template>
    </Carousel>
    <div class="carousel-text">
      <h3>WELKOME TO</h3>
      <h1>MAKE DRINKS</h1>
      <p>
        Explore your favorite drinks and discover which ingredients are used in
        their preparation.
      </p>
      <!-- <div class="corousel-button">
        <button>Ordinary drinks</button>
        <button>Cocktails</button>
      </div> -->
    </div>
  </header>
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      slides: [
        "https://mestredosdrinks.com/wp-content/uploads/2022/04/Drinks-tudo-que-voce-precisa-saber-para-fazer-Drinks-Saborosos.jpg",
        "https://www.emporiotambo.com.br/pub/media/resized/1300x800/ves/blog/xdrinks-classicos.jpeg.pagespeed.ic.f_zQaQpUej.jpg",
        "https://s2.glbimg.com/bdczSTxShj6HVOvLmW1psKEP5aE=/top/e.glbimg.com/og/ed/f/original/2019/12/12/drinks-receitas.jpg",
      ],
    };
  },
};
</script>

<style>
.carousel__item img {
  width: 100vw;
  height: 89vh;
  object-fit: cover;
}

.carousel {
  position: relative;
}
.carousel-text {
  position: absolute;
  background-color: aliceblue;
  left: 50%;
  top: 30%;
  text-align: center;
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

@media (max-width: 1024px) {
  .carousel-text {
    position: absolute;
    left: 14%;
  }
}

@media (max-width: 768px) {
  .carousel-text {
    position: absolute;
    left: 15%;
    top: 20%;
  }

  .carousel-text h3 {
    font-size: 20px;
    padding-bottom: 15px;
  }
  .carousel-text h1 {
    font-size: 40px;
    padding-bottom: 15px;
  }
  .carousel-text p {
    font-size: 15px;
  }
}

@media (max-width: 425px) {
  .carousel-text {
    position: absolute;
    left: 2%;
    top: 20%;
  }
}
</style>
