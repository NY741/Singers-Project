export default {
  namespaced: true,
  state() {
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
    };
  },
  getters: {
    bands(state) {
      return state.bands;
    },
  },
};
