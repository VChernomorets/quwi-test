<template>
  <div class="wrapper">
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: "auth",
  created(){
    if(this.$auth.loggedIn) {
      this.$router.push('/dashboard');
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.wrapper {
  font-family: Arial,sans-serif;
}
</style>
