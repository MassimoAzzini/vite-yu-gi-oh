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

  <main class="w-100">
    <div class="cont-cast">
      <div class="container-fluid">

        <div class="row">
          <div class="col-2 my-4">
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
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

  .cont-cast {
    width: 80%;
    margin: 0 auto;
  }
}

</style>