class ShipController {
  constructor(x, y, spriteName, configs) {
    this.sprite = Nakama.game.add.sprite(x, y, 'assets', spriteName);
    Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds = true;
    this.configs = configs;
    this.bullets = [];
    this.configs.SHIP_SPEED = 300;
    this.sprite.update = this.update.bind(this);
  }

  update() {
    if(Nakama.keyboard.isDown(this.configs.LEFT)) {
      this.sprite.body.velocity.x = -this.configs.SHIP_SPEED;
    }

    else if(Nakama.keyboard.isDown(this.configs.RIGHT)) {
      this.sprite.body.velocity.x = this.configs.SHIP_SPEED;
    }
    else {
      this.sprite.body.velocity.x = 0;
    }

    if(Nakama.keyboard.isDown(this.configs.UP)) {
      this.sprite.body.velocity.y = -this.configs.SHIP_SPEED;
    }

    else if(Nakama.keyboard.isDown(this.configs.DOWN)) {
      this.sprite.body.velocity.y = this.configs.SHIP_SPEED;
    }
    else {
      this.sprite.body.velocity.y = 0;
    }

    if(Nakama.keyboard.isDown(this.configs.FIRE)) {
      var bulletX = this.sprite.position.x + (this.sprite.width / 2) - 25;
      var bulletY = this.sprite.position.y + (this.sprite.height / 2) - 80;

      this.bullets.push(
        new BulletController(bulletX, bulletY , 'BulletType1Upgraded.png'), this
      );
    }
  }
}
