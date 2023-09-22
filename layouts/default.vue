<template>
  <div class="wrapper">
    <MainHeader></MainHeader>
    <Nuxt />
  </div>
</template>

<script>
import MainHeader from "../components/ui/MainHeader.vue";

export default {
  name: "default",
  components: {MainHeader},
  created(){
    if(!this.$auth.loggedIn) {
      this.$router.push('/login');
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
  position: relative;
}
</style>
