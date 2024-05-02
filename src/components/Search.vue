<template>
  <form @submit.prevent="searchStore.getMovies(movieName)">
    <input 
      class="search-input" 
      type="text" 
      v-model="movieName"
      placeholder="Enter movie name">
  </form>
  <Loader v-if="searchStore.loader"/>
  <div v-else>
    <Movie v-for="movie of searchStore.movies" :key="movie.id" :movie="movie" :is-search="true"/>
  </div>
</template>

<script setup>
import Loader from '../components/Loader.vue';
import Movie from './Movie.vue';
import { ref } from 'vue';
import {useSearchStore} from '../stores/SearchStore';

const searchStore = useSearchStore();
const movieName = ref('');
</script>

<style scoped>
.search-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #efefef;
  border-radius: 10px;
  margin-bottom: 20px;
}
</style>