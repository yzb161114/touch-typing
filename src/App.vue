<template>
  <div id="app">
    <textarea @keydown='greenTypingKey($event)'></textarea>
    <Macbook></Macbook> 
  </div>
</template>

<script>
import { mapState } from "vuex";
import macbook from "./components/keyboards/macbook";
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    greenTypingKey (event){
      let keyCode = event.which || event.keyCode
      if ( event.code === 'ShiftLeft' ) {
        keyCode = 1600
      } else if ( event.code === 'ShiftRight' ) {
        keyCode = 1601
      }
      let shiftKey = {
        keydown: event.shiftKey,
        code: keyCode === 1600 || keyCode === 1601 ? keyCode : this.$store.getters.getShiftKey.code
      }
      this.$store.dispatch('setCurrKey', keyCode)
      this.$store.dispatch('setShiftKey', shiftKey)
    }
  },
  components: {
    'Macbook': macbook
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
