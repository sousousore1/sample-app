<template>
  <div id="content"/>
</template>
<style>
html,
body {
  margin: 0;
  padding: 0;
}
</style>
<script>
import axios from 'axios'
import 'phaser'
import TestScene from './scenes/PlayScene.js'

const config = {
  type: Phaser.AUTO,
  parent: 'content',
  width: 640,
  height: 480,
  resolution: 1,
  backgroundColor: '#EDEEC9',
  scene: [TestScene]
}
new Phaser.Game(config)

export default {
  async asyncData({ params }) {
    let { data } = await axios.get(`${process.env.apiUrl}/articles.json`)
    return { articles: data }
  }
}
</script>
