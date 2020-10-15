// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
//TCEAPS
Vue.config.productionTip = false

let app;

// Declaration of Firebase
var config = {
  apiKey: "AIzaSyBwJHIxKFq0Ep_1HgHRrVDHEbDJeN8t5ys",
  authDomain: "pruebavue-7d509.firebaseapp.com",
  databaseURL: "https://pruebavue-7d509.firebaseio.com",
  projectId: "pruebavue-7d509",
  storageBucket: "pruebavue-7d509.appspot.com",
  messagingSenderId: "856743667637"
};

firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
});
