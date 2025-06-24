<template>
  <li :key="id">
    <base-card>
      <img :src="url" :alt="name" />
      <div class="flex-block">
        <h3>{{ name }}</h3>
        <h4>Genre: {{ genre }}</h4>
      </div>
      <button class="simple-link" @click="toggleMembers">
        Show/Hide Members
      </button>
      <ul class="members-list" v-if="membersAreShown">
        <li v-for="member of bandMembers" :key="member">
          <h6>
            <router-link to="/singers/:singerId">
              {{ member.name }}
            </router-link>
          </h6>
        </li>
      </ul>
    </base-card>
  </li>
</template>

<script>
import BaseCard from "../UI/BaseCard.vue";

export default {
  components: {
    BaseCard,
  },
  props: ["id", "name", "genre", "members", "url"],
  inject: ["singers"],
  data() {
    return {
      membersAreShown: false,
    };
  },
  computed: {
    bandMembers() {
      let singers = [];
      for (let member of this.members) {
        const singer = this.singers.find((singer) => singer.id === member);
        singers.push(singer);
      }
      return singers;
    },
  },
  methods: {
    toggleMembers() {
      this.membersAreShown = !this.membersAreShown;
    },
  },
  mounted() {
    setTimeout(() => {
      console.log(this.members);
      console.log(this.bandMembers);
    }, 2000);
  },
};
</script>

<style scoped>
.card {
  max-width: 500px;
}

.flex-block {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
}

h3,
h4,
h5,
h6 {
  display: block;
  margin-bottom: 5px 0;
}

img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

h4 {
  color: #339;
}

.simple-link {
  display: block;
  outline: none;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #999;
  color: #225;
  background-color: #eef;
}

.simple-link:hover {
  color: #339;
  background-color: #ddf;
}

.members-list {
  margin: 0;
  padding: 0;
}

.members-list li {
  height: 20px;
  margin-bottom: 20px;
  padding: 0;
  font-size: 1.5rem;
}
</style>
