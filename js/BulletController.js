class BulletController {
  constructor(x, y, spriteName, configs) {
    this.sprite = Nakama.game.add.sprite(x, y, 'assets', spriteName);
    Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.update = this.update.bind(this);
  }

  update() {
      this.sprite.body.velocity.y = -400;
      if (this.sprite.position.y <= 0){
            this.sprite.destroy()
        }
    }
}
