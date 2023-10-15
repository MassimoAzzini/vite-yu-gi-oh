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
      store,
      numbercards: 5000,
    }
  },

  methods: {
    getApi(){
      store.isLoad = true
      axios.get(store.apiUrl, {
        params: {
          num: this.numbercards,
          offset: 0,
          archetype: store.archetypeToSearch,
          fname: store.nameToSearch,
        }
      })
      .then (res => {
        store.isLoad = false

        store.cardsList = res.data.data;

      })
      .catch (err => {
        store.isLoad = false

        console.log(err);
      })
    },

    getApiSelect(){
      axios.get(store.apiOptionUrl)
      .then (res => {
        store.archetypeList = res.data;
        console.log(store.archetypeList);

      })
      .catch (err => {
        console.log(err);
      })

    }

  },
  mounted() {
    this.getApi()
    this.getApiSelect()
  },
}

</script>

<template>
  <div v-if="store.isLoad" class="w-100 vh-100">

    <img class="loading" src="/public/yugioh_master.jpg" alt="">

  </div>

  <div v-else>
    <Header />
    <Main @startSearch="getApi" />
  </div>


</template>

<style lang="scss">
@use './scss/main.scss';


img.loading{

  width: 100%;

}

</style>
