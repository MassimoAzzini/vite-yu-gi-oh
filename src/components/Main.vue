<script>
import ContainerCards from './partials/ContainerCards.vue';

export default {
  name: 'Main',
  components: {
    ContainerCards,
  }
  
}
</script>

<template>

  <main>
    <ContainerCards />
    
  </main>
  
</template>

<style lang="scss" scoped>

main{
  background-color: orange;
}

</style>