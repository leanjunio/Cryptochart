<template>
  <v-app>
    <div id="app">
      <ul>
        <li v-bind:key="coin" v-for="coin in coins">
          {{coin.symbol}} {{coin.name}} {{coin.available_supply}}
        </li>
      </ul>
    </div>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to your Todo list',
      coins: [],
      errors: []
    }
  },
  created () {
    this.fetchDataFromApi()
  },
  methods: {
    fetchDataFromApi(){
      axios.get(`https://api.coinmarketcap.com/v1/ticker/`)
      .then(response => {
        this.coins = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  // text-align: center;
  padding-top: 20px;
}
</style>
