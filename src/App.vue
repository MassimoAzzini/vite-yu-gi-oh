<script>

import axios from 'axios';
import {store} from './data/store';
import Header from './components/Header.vue';
import Main from './components/Main.vue';

export default {
  name: 'App',
  components: {
    Header,
    Main,
  },
  data() {
    return {
      store
    }
  },

  methods: {
    getApi(){
      axios.get(store.apiUrl)
      .then (res => {
        store.cardsList = res.data.data;
      })
      .catch (err => {
        console.log(err);
      })
    },

  },
  mounted() {
    this.getApi()
  },
}

</script>

<template>

  <Header />
  <Main />


</template>

<style lang="scss">

@use './scss/main.scss';

</style>
