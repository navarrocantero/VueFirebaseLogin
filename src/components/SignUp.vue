<template>
  <div class="sign-up">
    <p>Crear una cuenta nueva</p>
    <input type="email" v-model="email" name="email" id="email" placeholder="Email" required><br>
    <input type="password" v-model="password" name="password" id="password" placeholder="Password"
           required><br>
    <button v-on:click="signUp">Registrar</button>
    <br>
    <span>o volver al <router-link to="/login">login</router-link></span>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'signUp',
    data: function () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signUp: function () {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
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
  .signUp {
    margin-top: 40px;
  }

  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }

  button {
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
  }

  p {
    margin-top: 40px;
    font-size: 13px;
  }

  span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
  }
</style>
