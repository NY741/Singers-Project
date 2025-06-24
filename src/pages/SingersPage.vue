<template>
  <router-view></router-view>
  <div class="block-centered block-flex">
    <button class="button sort-button" @click="sortRating(ratingSortDirIsAsc)">
      {{ sortRatingButtonText }}
    </button>
    <button class="button sort-button" @click="sortName(nameSortDirIsAsc)">
      {{ sortNameButtonText }}
    </button>
  </div>
  <ul>
    <singer-item
      v-for="singer of singers"
      :key="singer.id"
      :id="singer.id"
      :name="singer.name"
      :albums="singer.albums"
      :role="singer.role"
      :rating="singer.rating"
      :url="singer.imageUrl"
    ></singer-item>
  </ul>
</template>

<script>
import SingerItem from "../components/singers/SingerItem";

export default {
  inject: ["singers"],
  components: {
    SingerItem,
  },
  data() {
    return {
      ratingSortDirIsAsc: true,
      nameSortDirIsAsc: true,
    };
  },
  computed: {
    sortRatingButtonText() {
      return `Sort by ${
        this.ratingSortDirIsAsc ? "Descending" : "Ascending"
      } Rating`;
    },
    sortNameButtonText() {
      return `Sort by ${
        this.nameSortDirIsAsc ? "Descending" : "Ascending"
      } Name`;
    },
  },
  methods: {
    sortRating(asc) {
      if (asc) {
        this.singers.sort((a, b) => b.rating - a.rating);
      } else {
        this.singers.sort((a, b) => a.rating - b.rating);
      }
      this.ratingSortDirIsAsc = !this.ratingSortDirIsAsc;
    },
    sortName(asc) {
      if (asc) {
        // this.singers.sort((a, b) => b.name - a.name);
        this.singers.sort((a, b) =>
          b.name.toLowerCase().localeCompare(a.name.toLowerCase())
        );
      } else {
        // this.singers.sort((a, b) => a.name - b.name);
        this.singers.sort((a, b) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        );
      }
      this.nameSortDirIsAsc = !this.nameSortDirIsAsc;
    },
  },
  mounted() {
    this.sortRating(this.ratingSortDirIsAsc);
    this.sortName(this.nameSortDirIsAsc);
  },
};
</script>

<style>
ul {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

.sort-button {
  padding: 7px;
  border: 1px solid;
  background-color: #def;
}
</style>
