<template>
  <div class="login">
    <logo class="login__logo"/>
    <form class="login__form" @submit.prevent="login()">
      <BaseInput placeholder="Email" type="email" v-model="email" :error-text="errorText" />
      <BaseInput placeholder="Password" type="password" v-model="password"/>
      <button class="login__form__send">Login</button>
    </form>
    <a href="#" class="login__forgot_password">
      Forgot password?
    </a>
  </div>
</template>

<script>
import BaseInput from "../components/ui/BaseInput.vue";
import Logo from "../components/ui/Logo.vue";

export default {
  name: 'IndexPage',
  components: {Logo, BaseInput},
  layout: 'auth',
  data(){
    return {
      email: '',
      password: '',
      errorText: '',
    }
  },
  methods: {
    login() {
      this.$store.dispatch('profile/login', {
        email: this.email,
        password: this.password,
      }).then(() => {
        this.$router.push({name: 'dashboard'});
      }).catch(error => {
        this.errorText = error.response.data.first_errors.email;
      })
    }
  }
}
</script>


<style scoped>
  .login {
    margin: 50vh auto 0;
    transform: translate(0, -50%);
    padding: 35px 40px 50px;
    background: #fff;
    border: 1px solid rgba(0,0,0,.11);
    box-shadow: 0 0 12px rgba(0,0,0,.25);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 440px;
    font-family: Arial,sans-serif;
  }

  .login__logo {
    margin-bottom: 40px;
  }

  .login__form {
    width: 100%;
  }

  .login__form__send {
    margin-bottom: 20px;
    border-radius: 5px;
    height: 52px;
    width: 100%;
    text-transform: none;
    text-shadow: none;
    font-size: 18px;
    font-weight: 400;
    background: #c44512;

    padding: 0 15px;
    color: #fff;
    font-style: normal;
    line-height: 14px;
    border: none;
    cursor: pointer;
    outline: none;
  }

  .login__form__send:hover {
    opacity: .7;
  }

  .login__forgot_password {
    text-decoration: none;
    color: #2975dc;
    font-size: 18px;
  }

  .login__forgot_password:hover {
    text-decoration: underline;
  }

</style>
