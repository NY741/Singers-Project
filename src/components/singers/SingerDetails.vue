<template>
  <base-card>
    <h1>{{ singer.name }}</h1>
    <p>{{ singer.description }}</p>
    <router-link to="/singers">Back to Singers</router-link>
  </base-card>
</template>

<script>
import BaseCard from "../UI/BaseCard.vue";

export default {
  components: {
    BaseCard,
  },
  props: ["singerId"],
  inject: ["singers"],
  computed: {
    singer() {
      return this.singers.find((singer) => singer.id === this.singerId);
    },
  },
};
</script>

<style scoped>
.card {
  /* width: 60%; */
  background-color: #f8fff8;
  box-shadow: 0 0 10px #666;
}

a {
  font-size: 1.2rem;
  color: navy;
}
</style>
