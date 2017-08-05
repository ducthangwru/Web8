class EnemyController
{
  constructor(x, y, spriteName, configs) {
    this.sprite = Nakama.enemyGroup.create(x, y, 'assets', spriteName);
    this.sprite.anchor = new Phaser.Point(0.5, 0.5);
    this.configs = configs;
    this.sprite.update = this.update.bind(this);
    this.sprite.health = this.configs.health;
  }

  update() {
    this.sprite.position.x = 320 + 300 * Math.sin(Nakama.game.time.time / 1000);
    this.sprite.position.y = 250 + 300 * Math.cos(Nakama.game.time.time / 1000);
  }
}
