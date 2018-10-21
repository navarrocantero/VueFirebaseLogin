<template>
  <div class="login">
    <h3>LOGIN</h3>
    <input v-model="email" type="email" placeholder="Email"><br>
    <input v-model="password" type="password" placeholder="Password"><br>
    <button v-on:click="signIn">Conectar</button>
    <p>¿NO account?
      <router-link to="/sign-up"> Regístrate ahora.</router-link>
    </p>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'login',
    data: function () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signIn: function () {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('hello')
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
      }
    }
  }
</script>

<style scoped>
  .login {
    margin-top: 40px;
  }

  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }

  button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }

  p {
    margin-top: 40px;
    font-size: 13px;
  }

  p a {
    text-decoration: underline;
    cursor: pointer;
  }
</style>


