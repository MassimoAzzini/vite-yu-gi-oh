<script>
import ContainerCards from './partials/ContainerCards.vue';
import {store} from '../data/store'

export default {
  name: 'Main',
  components: {
    ContainerCards,
  },
  data() {
    return {
      store
    }
  },

  
}
</script>

<template>

  <main class="w-100">
    <div class="cont-cast">
      <div class="container-fluid">

        <div class="row">
          <div class="col-2 my-3">
            <select @change="$emit('startSearch')" v-model="store.archetypeToSearch" id="inputState" class="form-select" placeholder="Search Character">
              <option selected value=""></option>
              <option v-for="(archetype, index) in store.archetypeList" :key="index" :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
            </select>
          </div>
          <div class="col-2 my-3">
            <input @keyup.enter="$emit('startSearch')" v-model="store.nameToSearch" type="text" class="form-control" placeholder="Search Name Cards">
          </div>

        </div>

        <ContainerCards />

      </div>
    </div>
  </main>
  
</template>

<style lang="scss" scoped>

main{
  background-color: #d48f38;
  min-height: calc(100vh - 100px);

  .cont-cast {
    width: 80%;
    margin: 0 auto;
  }
}

</style>