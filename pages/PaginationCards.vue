<!-- components/Pagination.vue -->
<template>
  <div>
    <div v-for="item in paginatedItems" :key="item.id">
      <DrinkCards :drink="item" />
    </div>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">
        Next
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent} from "vue";
import type { PropType } from 'vue';
import DrinkCards from "../components/DrinkCards.vue";

const setdrinks = (page) => {
  fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    this.drinks = data.drinks;
                    this.currentPage = 1;
                    this.error = false;
                    if (!this.drinks) {
                        this.error = true;
                    }
                })
                .catch((error) => {
                    this.error = true;
                    console.error('Error fetching drinks:', error);
                });
}

export default defineComponent({
  components: {
    DrinkCards,
  },
  props: {
    items: {
      type: Array as PropType<
        { id: number; title: string; description: string }[]
      >,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    totalPages(): number {
      console.log(this.items)
      return Math.ceil(this.items?.length / this.itemsPerPage);
      
    },
    paginatedItems(): { id: number; title: string; description: string }[] {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.items?.slice(startIndex, endIndex);
    },
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },
});
</script>

<style scoped>
.pagination {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

button {
  cursor: pointer;
  padding: 5px 10px;
}
</style>
