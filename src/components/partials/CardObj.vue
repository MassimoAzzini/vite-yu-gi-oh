<script>
export default {
  name: 'CardObj',
  props: {
    name: String,
    archetype: String,
    image: Array,
  }
  
}
</script>

<template>

  <div class="col-2">
    <div class="card">
      <img :src="image" :alt="name">
      <div class="description">
        <div>{{ name }}</div>
        <div>{{ archetype }}</div>
      </div>

    </div>
  </div>
  
</template>

<style lang="scss" scoped>

.card {
  height: 605px;
  background-color: #d48f38;
  img{
    width: 100%;
  }
}

</style>