<script>

export default {
  name: 'Header',
  
}
</script>

<template>

  <header class="d-flex align-items-center">
    <div class="logo mx-5">
      <img src="/public/Yu-Gi-Oh!.png" alt="Yu-Gi-Oh!">
    </div>
    <h1>Yu-Gi-Oh! Api</h1>
  </header>
  
</template>

<style lang="scss" scoped>

header {
  height: 100px;
  .logo {
    width: 75px;

    img {
      width: 100%;
    }
  }

  h1{
    font-size: 3rem;
  }
}

</style>