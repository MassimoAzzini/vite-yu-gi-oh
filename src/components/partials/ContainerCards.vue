<script>
import CardObj from './CardObj.vue';

export default {
  name: 'ContainerCards',
  components: {
    CardObj,
  }
  
}
</script>

<template>

  <div class="container-fluid p-5">
    <div class="row w-100 bg-black">
      <span>Found x cards</span>
    </div>
    <div class="row w-100 ">
    <CardObj />
    <CardObj />
    <CardObj />
    <CardObj />
    <CardObj />
    <CardObj />
    <CardObj />
    <CardObj />
    <CardObj />
    <CardObj />

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