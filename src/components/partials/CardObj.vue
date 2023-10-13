<script>
export default {
  name: 'CardObj',
  props: {
    name: String,
    archetype: String,
    image: String,
  }
  
}
</script>

<template>

  <div class="col-2 mb-3">
    <div class="card">
      <img :src="image" :alt="name">
      <div class="description">
        <div class="name-card">{{ name }}</div>
        <div>{{ archetype }}</div>
      </div>

    </div>
  </div>
  
</template>

<style lang="scss" scoped>

.card {
  height: 450px;
  background-color: #d48f38;
  img{
    width: 100%;
  }
  .description {
    text-align: center;
    .name-card{
      color: white;
      text-transform: uppercase;
      font-weight: bold;
      margin-bottom: 40px;
      margin-top: 20px;
    }
  }
}

</style>