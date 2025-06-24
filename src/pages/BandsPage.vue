<template>
  <ul>
    <band-item
      v-for="band of bands"
      :key="band.id"
      :id="band.id"
      :name="band.name"
      :genre="band.genre"
      :members="band.members"
      :url="band.imageUrl"
    ></band-item>
  </ul>
</template>

<script>
import BandItem from "@/components/bands/BandItem.vue";

export default {
  // inject: ["bands"],
  components: {
    BandItem,
  },
  computed: {
    bands() {
      return this.$store.getters["bands/bands"];
    },
  },
};
</script>
