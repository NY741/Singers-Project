<template>
  <li>
    <base-card>
      <div class="card__block">
        <img :src="url" :alt="name" />
      </div>
      <div class="card__block">
        <h3>{{ name.toUpperCase() }}</h3>
        <h5>{{ capitalize(role) }} of {{ bandName }}</h5>
        <div>
          <img
            v-for="i in 5"
            :key="i"
            class="img-icon"
            :src="getStarIconUrl(i)"
            alt="star"
          />
        </div>
        <button v-if="albums" class="simple-link" @click="toggleAlbums">
          Albums
        </button>
        <ul v-if="albums && albumsAreShown">
          <li v-for="album of albums" :key="album">
            <h5>{{ album }}</h5>
          </li>
        </ul>
        <router-link class="button-link" :to="singerDetailsLink"
          >Show details</router-link
        >
      </div>
    </base-card>
  </li>
</template>

<script>
import BaseCard from "../UI/BaseCard.vue";
import starFilled from "@/assets/images/icons/icon_star_filled.png";
import starSimple from "@/assets/images/icons/icon_star_simple.png";

export default {
  components: {
    BaseCard,
  },
  inject: ["bands"],
  props: ["id", "name", "role", "rating", "albums", "url"],
  data() {
    return {
      albumsAreShown: false,
      starIcons: {
        filled: starFilled,
        simple: starSimple,
      },
    };
  },
  methods: {
    capitalize(text) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    },
    toggleAlbums() {
      this.albumsAreShown = !this.albumsAreShown;
      console.log(this.albumsAreShown);
    },
    getStarIconUrl(pos) {
      // console.log(
      //   "Icon URL:",
      //   `/images/icons/icon_star_${pos > this.rating ? "simple" : "filled"}.png`
      // );
      // const linkBase = "../../assets/images/icons/icon_star_";

      // return linkBase + pos > this.rating ? "simple.png" : "filled.png";
      return `/images/icons/icon_star_${
        pos > this.rating ? "simple" : "filled"
      }.png`;
    },
  },
  computed: {
    singerDetailsLink() {
      // return "/singers/" + this.id;
      return {
        name: "singer-details",
        params: { singerId: this.id },
        // query: {sort: 'asc'}
      };
    },
    bandName() {
      for (let band of this.bands) {
        if (band.members.includes(this.id)) {
          return band.name;
        }
      }
      return "";
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
}

.img-icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-bottom: 10px;
}

h3,
h5 {
  margin-bottom: 5px 0;
}

h3 {
  color: #333;
  letter-spacing: 2px;
  text-shadow: 2px 2px 5px #999;
}

/* h3::first-letter {
color: #34a;
} */

h5 {
  color: #339;
}

.card {
  /* width: 60%;
  min-width: 500px; */
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: top;
  gap: 20px;
}

.card__block {
  max-width: 250px;
}

.card__block:first-of-type {
  width: 250px;
  height: 300px;
  overflow: hidden;
}

.simple-link {
  display: block;
  margin-bottom: 10px;
  padding: 6px 12px;
  outline: none;
  border: 1px solid #999;
  color: #225;
  background-color: #efe;
  cursor: pointer;
}

.simple-link:hover {
  color: #339;
}

.button-link {
  display: inline-block;
  padding: 8px 12px;
  border: 1px solid #225;
  font-weight: 600;
  color: #225;
  background-color: #eef;
  border-radius: 5px;
}

ul {
  margin: 0;
  padding: 0;
}

ul li {
  margin: 0;
  padding: 0;
  text-align: left;
}
</style>

<!-- v-if="rating >= 1" -->
