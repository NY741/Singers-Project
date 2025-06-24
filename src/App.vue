<template>
  <the-header></the-header>
  <main-content>
    <router-view></router-view>
  </main-content>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/UI/TheHeader.vue";
import TheFooter from "./components/UI/TheFooter.vue";
import MainContent from "./components/UI/MainContent.vue";

export default {
  components: {
    TheHeader,
    MainContent,
    TheFooter,
  },
  provide() {
    return {
      singers: this.singers,
      bands: this.bands,
    };
  },
  data() {
    return {
      bands: [
        {
          id: "d12",
          name: "D12",
          genre: "Rap/Hip-Hop",
          members: ["s1", "s2", "s3", "s4", "s5", "s6"],
          imageUrl:
            "https://cache.pressmailing.net/thumbnail/story_hires/d099c9da-f82e-4bbe-8a62-ca0175ef89f7/B017885L.JPG.jpg",
        },
        {
          id: "g-unit",
          name: "G-Unit",
          genre: "Rap/Hip-Hop",
          members: ["s7", "s8", "s9", "s10"],
          imageUrl:
            "https://lh3.googleusercontent.com/cQ_rpFK8c67nRGh1KghVlB1evHpxVQ4cYiteGgshQJu2pedOMHhidIHyfYCwwAUN7A_wVv0qbDTIJKM=w544-h544-l90-rj",
        },
        {
          id: "bep",
          name: "Black Eyed Peas",
          genre: "Hip-Hop",
          members: ["s11", "s12", "s13", "s14"],
          imageUrl:
            "https://soundslikefeelslike.com/wp-content/uploads/2022/11/img_2437-1.jpg?w=640",
        },
        // {
        //   id: "lp",
        //   name: "Linkin Park",
        //   genre: "Alternative/Rock",
        //   members: ['s15','s16','s17','s18', 's19','s20'],
        //   imageUrl: 'https://vinyloteka.ru/sites/default/files/u75885/linkinpark.jpg'
        // },
      ],
      singers: [
        {
          id: "s1",
          name: "Eminem",
          role: "leader",
          rating: 5,
          albums: [
            "The Slim Shady LP",
            "The Marshall Mathers LP",
            "The Eminem Show",
          ],
          imageUrl:
            "https://i.scdn.co/image/ab6761610000e5eba00b11c129b27a88fc72f36b",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat animi quidem consectetur similique. Aperiam illo nulla dolorem error. Facilis molestiae qui incidunt autem debitis ratione quaerat dolor aperiam ipsam at. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat animi quidem consectetur similique. Aperiam illo nulla dolorem error. Facilis molestiae qui incidunt autem debitis ratione quaerat dolor aperiam ipsam at. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat animi quidem consectetur similique. Aperiam illo nulla dolorem error. Facilis molestiae qui incidunt autem debitis ratione quaerat dolor aperiam ipsam at.",
        },
        {
          id: "s2",
          name: "Proof",
          role: "member",
          rating: 4,
          imageUrl: "https://i.redd.it/0pwbo7rvbv2b1.jpg",
        },
        {
          id: "s3",
          name: "Kon Artist",
          role: "member",
          rating: 3,
          imageUrl:
            "https://i.discogs.com/M3hEnvccQzkJCyIU5pi5fxQqe1yLt6-yF4nvsqVHaew/rs:fit/g:sm/q:90/h:600/w:489/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTIyMDgz/OC0xNTIxNDA1MTAx/LTQwMjAuanBlZw.jpeg",
        },
        {
          id: "s4",
          name: "Bizarre",
          role: "member",
          rating: 3,
          imageUrl:
            "https://www.femalefirst.co.uk/image-library/partners/bang/square/500/d/d12s-bizarre-aW1hZ2VzMS8yMDIxLzAxLzE5LzE2MTEwNTA1MzVjcm9wcGV.jpg",
        },
        {
          id: "s5",
          name: "Kuniva",
          role: "member",
          rating: 2,
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzc0mxR9r1aGWzzqKrV4e2FDkOg9nB4eMYBuALtyQ1GsFR4YAOrfDxKVJMGbzgFHtuy0U&usqp=CAU",
        },
        {
          id: "s6",
          name: "Swift",
          role: "member",
          rating: 3,
          imageUrl: "https://music.metason.net/image?fn=A-333742.jpeg&sc=654",
        },
        {
          id: "s7",
          name: "50 Cent",
          role: "leader",
          rating: 5,
          albums: ["Get rich or die trying", "The Massacre", "Curtis"],
          imageUrl:
            "https://i.scdn.co/image/dd031b9c5d1b6eba4a691cd89c954255aae787f2",
        },
        {
          id: "s8",
          name: "Lloyd Banks",
          role: "member",
          rating: 3,
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BM2ZmMjM2NDEtNTE2MC00ZjAwLTk1YzAtMTA2MGNhY2VkMjgzXkEyXkFqcGc@._V1_.jpg",
        },
        {
          id: "s9",
          name: "Tony Yayo",
          role: "member",
          rating: 3,
          imageUrl: "https://iscale.iheart.com/catalog/artist/40235",
        },
        {
          id: "s10",
          name: "Young Buck",
          role: "member",
          rating: 2,
          imageUrl:
            "https://resizing.flixster.com/5aRgtR2rGYS2wR91c85P8bxshwg=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/515898_v9_ba.jpg",
        },
        {
          id: "s11",
          name: "Will.I.Am",
          role: "leader",
          rating: 4,
          imageUrl:
            "https://www.gspeakers.com/wp-content/uploads/2023/03/will.i.am-Photo_11.2021-Photo-Credit-Sterling-Hampton-1.jpg",
        },
        {
          id: "s12",
          name: "Fergie",
          role: "member",
          rating: 4,
          imageUrl: "https://stuki-druki.com/aforizms/Fergie-01.jpg",
        },
      ],
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

html {
  font-size: 12px;
}

body {
  margin: 0;
  padding: 0;
}

/* h1, h2 {
  letter-spacing: 5px;
} */

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
}

.block-centered {
  display: block;
  margin: 0 auto;
  text-align: center;
}

.block-flex {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 15px;
  margin-bottom: 25px;
}
</style>
