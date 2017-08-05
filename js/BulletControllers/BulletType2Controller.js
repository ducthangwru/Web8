class BulletType2Controller extends BulletController {
  constructor(x, y, configs) {
    super(x, y, "BulletType2Upgraded.png", configs);
    this.sprite.update = this.update.bind(this);
    this.sprite.BULLET_SPEED = 500;
    this.sprite.COOL_DOWN = 5;
  }

  update(){
    this.target = Nakama.enemyGroup.getFirstAlive();
    if (this.target == null) {
      this.target = {
        x : 0,
        y : 0
      };
    }

    var targetAngle = Nakama.game.math.angleBetween(
      this.sprite.position.x, this.sprite.position.y,
      this.target.x, this.target.y,
    );

    if(this.sprite.rotation !== targetAngle + Math.PI/2)
    {
      var delta = targetAngle - this.sprite.rotation + Math.PI/2;
      if (delta > Math.PI) delta -= Math.PI * 2;
      if (delta < -Math.PI) delta += Math.PI * 2;
      if (delta > 0)
      {
        this.sprite.rotation += Nakama.game.math.degToRad(this.sprite.COOL_DOWN);
      }
      if (delta < 0)
      {
        this.sprite.rotation -= Nakama.game.math.degToRad(this.sprite.COOL_DOWN);
      }
    }
    if (Math.abs(delta) < Nakama.game.math.degToRad(this.sprite.COOL_DOWN)) {
      this.sprite.rotation = targetAngle + Math.PI/2;
    }

    this.sprite.body.velocity.x = Math.cos(this.sprite.rotation - Math.PI/2) * this.sprite.BULLET_SPEED;
    this.sprite.body.velocity.y = Math.sin(this.sprite.rotation - Math.PI/2) * this.sprite.BULLET_SPEED;
  }
}
