class ShipType2Controller extends ShipController {
  constructor(x, y, spriteSuffix, configs) {
    super(
      x,
      y,
      `Spaceship1${spriteSuffix}.png` ,
      configs
    );

    this.configs.SHIP_SPEED = 200;
    this.configs.COOLDOWN = 500;
  }

  fire() {
    new BulletType2Controller(this.sprite.position.x, this.sprite.position.y , {});
  }
}
