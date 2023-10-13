<script>
import { store } from '../../data/store'
import CardObj from './CardObj.vue';
import ResultFoundCard from './ResultFoundCard.vue';

export default {
  name: 'ContainerCards',
  components: {
    CardObj,
    ResultFoundCard
  },

  data() {
    return {
      store,
    }
  },
  mounted() {
    setTimeout (() => {
      console.log(store.cardsList);
    }, 2000)
  },
  
}
</script>

<template>

  <div class="container-fluid p-5">
    <div class="row p-3 bg-black">
      <FoundCard />
    </div>
    <div class="row">
      <CardObj
        v-for="card in store.cardsList"
        :key="card.id"
        :name="card.name"
        :archetype="card.archetype"
        :image="card.card_images[0]"
      />

    </div>
  </div>
  
</template>

<style lang="scss" scoped>
.container-fluid {
  background-color: white;

  div.row.bg-black {
    color: white;
    font-weight: bold;
  }
}

</style>