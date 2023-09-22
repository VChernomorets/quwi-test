<template>
  <div class="header">
    <Logo />
    <div class="header__navs">
      <a class="header__navs__nav" href="#" @click="logout">
        Logout
      </a>
    </div>
  </div>
</template>

<script>
import Logo from "./Logo.vue";

export default {
  name: 'MainHeader',
  components: {Logo},
  methods: {
    logout() {
      this.$store.dispatch('profile/logout');
    }
  }
}
</script>


<style scoped>
.header {
  width: 100vw;
  padding: 20px 20px;
  box-shadow: 0 4px 2px -2px gray;
  display: flex;
  justify-content: space-between;
}

.header__navs {
  display: flex;
  align-items: center;
}

.header__navs__nav {
  margin-left: 20px;
  text-decoration: none;
  color: black;
  text-transform: uppercase;
}

.header__navs__nav:hover {
  color: #c44512;
}
</style>
