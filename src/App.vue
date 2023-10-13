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
  <div v-if="store.cardsList.length < 2000"  class="w-100 vh-100">

    <img class="loading" src="/public/yugioh_master.jpg" alt="">

  </div>

  <div v-else>
    <Header />
    <Main />
  </div>


</template>

<style lang="scss">
@use './scss/main.scss';


img.loading{

  width: 100%;

}

</style>
