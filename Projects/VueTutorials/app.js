const app = Vue.createApp({
  data() {
    return {
      showMovies: true,
      title: "Avengers Endgame",
      director: "Anthony Russo / Joe Russo",
      releaseYear: 2019,
    };
  },
  methods: {
    toggleShowMovies() {
      this.showMovies = !this.showMovies;
    },
  },
});

app.mount("#app");
