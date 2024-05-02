import { defineStore } from "pinia";
import { useMovieStore } from "./MovieStore";
import { ref } from "vue";
const url =
    "https://api.themoviedb.org/3/search/movie?api_key=47e623229b146c80b3802fc04b2800a8&language=en-US&query=";



export const useSearchStore = defineStore("searchStore", () => {
  const loader = ref(false);
  const movies = ref([]);
 
  const getMovies = async (search) => {
    loader.value = true;
    const response = await fetch(url + search);
    const data = await response.json();
    movies.value = data.results;
    loader.value = false;
  }

  const addToUserMovies = (movie) => {
    const movieStore = useMovieStore();
    movieStore.movies.push({ ...movie, isWatched: false });
    movieStore.setActiveTab(1);
  }

  return { loader, movies, getMovies, addToUserMovies }
})