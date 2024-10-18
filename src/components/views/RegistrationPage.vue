<template>
  <div class="main">
    <div class="container">

    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistrationPage',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .main {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    height: calc(100vh - 60px);
    width: 100vw;
    padding: 30px 0 30px 0;
    background-image: linear-gradient(180deg, rgba(199, 124, 180, 0.4) 0%, rgba(243, 118, 116, 0.6) 50.22%, rgba(199, 124, 180, 0.4) 100%), url('~@/assets/background.jpg');
    background-position: left center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .container {
    width: 538px;
    height: 100%;
    max-height: 708px;
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 60px;
    backdrop-filter: blur(200px);
  }
</style>