<template>
  <div class="main">
    <div class="container">
      <ul>
        <li v-for="user in users" :key="user">
          Name: {{ user.name }}<br/>
          Age: {{ user.age }}<br/>
          <template v-if="user.city">
            City: {{ user.city }}<br/>
          </template>
          Sex: {{ user.sex }}<br/>
          Email: {{ user.email }}<br/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListUsers',
  data() {
    return {
      users: [],
    }
  },
  async mounted() {
    let token = await this.$store.dispatch('getToken')

    if(!token) {
      this.$router.push({name: 'home'})
    }

    this.users = await this.$store.dispatch('getUsers')
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: calc(100vh - 60px);
  padding: 30px 0 30px 0;
  background-image: linear-gradient(180deg, rgba(199, 124, 180, 0.4) 0%, rgba(243, 118, 116, 0.6) 50.22%, rgba(199, 124, 180, 0.4) 100%), url('~@/assets/background.jpg');
  background-position: left center;
  background-repeat: no-repeat;
  background-size: cover;
}

.container {
  width: 478px;
  min-height: calc(100vh - 160px);
  padding: 20px 30px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 60px;
  backdrop-filter: blur(200px);
}
</style>
