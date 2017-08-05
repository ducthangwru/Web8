var Nakama = {};
Nakama.configs = {
  GAME_WIDTH : 640,
  GAME_HEIGHT : 960,
  ENEMY_POSITION : {
    x : 200,
    y : 200,
    velocity : 200
  },
  BACKGROUND_POSITION : {
    x : 0,
    y : -960,
    velocity : 5
  },
  P1_START_POSITION : {
    x : 200,
    y : 600,
  },
  P2_START_POSITION : {
    x : 400,
    y : 600,
  }
};

window.onload = function(){
  Nakama.game = new Phaser.Game(
    Nakama.configs.GAME_WIDTH ,
    Nakama.configs.GAME_HEIGHT,
    Phaser.AUTO,'',
    {
      preload: preload,
      create: create,
      update: update,
      render: render
    }, false, false
  );
}

// preparations before game starts
var preload = function(){
  Nakama.game.scale.minWidth = Nakama.configs.GAME_WIDTH / 2;
  Nakama.game.scale.minHeight = Nakama.configs.GAME_HEIGHT / 2;
  Nakama.game.scale.maxWidth = Nakama.configs.GAME_WIDTH;
  Nakama.game.scale.maxHeight = Nakama.configs.GAME_HEIGHT;
  Nakama.game.scale.pageAlignHorizontally = true;
  Nakama.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

  Nakama.game.time.advancedTiming = true;

  Nakama.game.load.atlasJSONHash('assets', 'Assets/assets.png', 'Assets/assets.json');
  Nakama.game.load.image('background', 'Assets/Map1.png');
}

// initialize the game
var create = function(){
  Nakama.game.physics.startSystem(Phaser.Physics.ARCADE);
  Nakama.keyboard = Nakama.game.input.keyboard;

  Nakama.background = Nakama.game.add.sprite(Nakama.configs.BACKGROUND_POSITION.x, Nakama.configs.BACKGROUND_POSITION.y, 'background');
  Nakama.bulletGroup = Nakama.game.add.physicsGroup();
  Nakama.playerGroup = Nakama.game.add.physicsGroup();
  Nakama.enemyGroup = Nakama.game.add.physicsGroup();

  Nakama.sprites = [];
  Nakama.players = [];

  Nakama.sprites.push(
    new EnemyController(Nakama.configs.ENEMY_POSITION.x, Nakama.configs.ENEMY_POSITION.y, 'EnemyType3.png',
    {
      health : 5
    })
  );

  Nakama.players.push(
    new ShipType1Controller(Nakama.configs.P1_START_POSITION.x, Nakama.configs.P1_START_POSITION.y, '-Player',
    {
      up : Phaser.Keyboard.UP,
      down : Phaser.Keyboard.DOWN,
      left : Phaser.Keyboard.LEFT,
      right : Phaser.Keyboard.RIGHT,
      fire : Phaser.Keyboard.SPACEBAR
    }
  )
);

  Nakama.players.push(
    new ShipType2Controller(Nakama.configs.P2_START_POSITION.x, Nakama.configs.P2_START_POSITION.y, '-Partner',
  {
    up : Phaser.Keyboard.W,
    down : Phaser.Keyboard.S,
    left : Phaser.Keyboard.A,
    right : Phaser.Keyboard.D,
    fire : Phaser.Keyboard.F
  }
));
}

// update game state each frame
var update = function(){
  Nakama.background.position.y += Nakama.configs.BACKGROUND_POSITION.velocity;

  if(Nakama.background.position.y >= 0) {
    Nakama.background.position.y = Nakama.configs.BACKGROUND_POSITION.y;
  }

  Nakama.game.physics.arcade.overlap(
    Nakama.bulletGroup,
    Nakama.enemyGroup,
    onBulletHitEnemy
  );
}

// before camera render (mostly for debug)
var render = function(){}

var onBulletHitEnemy = function (bulletSprite, enemySprite) {
  bulletSprite.kill();
  enemySprite.damage(1);
}
