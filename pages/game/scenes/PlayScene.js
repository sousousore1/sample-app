import axios from 'axios'
import desertJson from '~/assets/tilemaps/desert.json'
import desertImage from '~/assets/tilemaps/tmw_desert_spacing.png'
import playerImage from '~/assets/sprites/mushroom.png'

class TestScene extends Phaser.Scene {
  constructor() {
    super({ key: 'TestScene' })
  }

  preload() {
    this.load.tilemapTiledJSON('map', desertJson)
    this.load.image('Desert', desertImage)
    this.load.image('player', playerImage)
  }

  async create() {
    const map = this.make.tilemap({ key: 'map' })
    const tileset = map.addTilesetImage('Desert')
    const layer = map.createStaticLayer(0, tileset, 0, 0)

    this.player = this.add.sprite(100, 100, 'player')
    this.cursors = this.input.keyboard.createCursorKeys()

    this.cameras.main.setBounds(0, 0, map.withInPixels, map.heightInPixels)
    this.cameras.main.startFollow(this.player, false)

    const { data } = await axios.get(`${process.env.apiUrl}/articles.json`)
    this.articles = data
    this.articles.forEach(article => {
      console.log(article.title)
    })
  }

  update(time, delta) {
    this.player.angle += 1
    if (this.cursors.left.isDown) {
      this.player.x -= 5
    }
    if (this.cursors.right.isDown) {
      this.player.x += 5
    }
    if (this.cursors.down.isDown) {
      this.player.y += 5
    }
    if (this.cursors.up.isDown) {
      this.player.y -= 5
    }
  }
}

export default TestScene
