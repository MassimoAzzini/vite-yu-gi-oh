<script>
import {store} from '../../data/store';

export default {
  name: 'ResultFoundCard',
  computed: {
    outputFound(){
      if(store.cardsList.length > 0){
        return 'Found: ' + store.cardsList.length + ' cards';
      }
      return 'No cards found'
    }
  }
}
</script>

<template>

  <span>{{ outputFound }}</span>
  
</template>

<style lang="scss" scoped>

</style>