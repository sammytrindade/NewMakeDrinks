<template>
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
      <p>welcome</p>
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
}
</style>
