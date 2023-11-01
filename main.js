/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/

const maps = {
  lvl1: {
    bgkd: [
      [4, 4, 4, 4, 4, 4, 4, 6, 6, 6, 4, 4, 4, 4, 4, 4],
      [4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4],
      [4, 2, 2, 2, 2, 2, 4, 5, 2, 2, 2, 2, 2, 2, 2, 4],
      [4, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 4],
      [4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4],
      [4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4],
      [4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4],
      [6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6],
      [6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 2, 2, 6],
      [6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6],
      [4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4],
      [4, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4],
      [4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4],
      [4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4],
      [4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 5, 4],
      [4, 4, 4, 4, 4, 4, 4, 6, 6, 6, 4, 4, 4, 4, 4, 4],
    ],
    frgd: [
      [7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 7, 7, 7, 7, 7, 7],
      [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7],
      [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7],
      [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7],
      [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7],
      [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7],
      [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7],
      [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7],
      [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7],
      [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7],
      [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7],
      [7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 7, 7, 7, 7, 7, 7],
    ],
  },
};

class Handler {
  constructor() {
    this.objects = [];
  }

  add(obj) {
    this.objects.push(obj);
  }
  remove(index) {
    this.objects.splice(index, 1);
  }

  init() {
    for (const o of this.objects) o.update();
  }

  update(dt) {
    for (const i in this.objects) {
      if (this.objects[i].shouldUpdate) this.objects[i].update();

      if (this.objects[i].remove) this.remove(i);
    }
  }

  draw(c, r) {
    for (const o of this.objects) {
      if (o.shouldDraw) o.draw(c, r);
    }
  }
}

class TouchHandler {
  constructor() {}

  static x1 = 0;
  static y1 = 0;
  static x2 = 0;
  static y2 = 0;

  static touched = false;
}

/*class MapHandler {
        constructor(){}
    
        async loadmap(file){
            return await(await fetch(file)).json();
        }
    
        static buildlevel(lvl){
            loadmap(lvl.toString()).then(data=>{
    
            }).catch(res=>console.log(res));
        }
    }*/

class GameState {}
class GameObject {
  constructor(x = 0, y = 0, img = null, hndl = null) {
    this.x = x;
    this.y = y;
    this.w = 16;
    this.h = 16;

    this.handler = hndl;
    this.id = "GO";
    this.remove = false;

    this.dx = 0;
    this.dy = 0;
    this.speed = 0;

    this.coldir = "N";
    this.isCollidable = false;

    this.sx = 0;
    this.sy = 0;
    this.sw = 16;
    this.sh = 16;
    this.img = img;

    this.frame = 0;
    this.ttl_frames = 2;
    this.curr_frame = 0;
    this.anim_speed = 8;
    this.currTime = 0;

    this.shouldUpdate = true;
    this.shouldDraw = true;
  }

  init() {}

  update(dt) {}

  draw(c, r) {
    if (!this.img) {
      c.fillStyle = "rgba(64,4,38,0.4)";
      c.fillRect(this.x * r, this.y * r, this.w * r, this.h * r);
    } else {
      c.drawImage(
        this.img,
        this.sx,
        this.sy,
        this.sw,
        this.sh,
        (this.x * r) | 0,
        (this.y * r) | 0,
        (this.w * r) | 0,
        (this.h * r) | 0
      );
    }
  }

  animate() {
    this.frame++;

    if (this.frame % this.anim_speed == 0) {
      this.curr_frame++;

      if (this.curr_frame >= this.ttl_frames) this.curr_frame = 0;
      this.sx = this.sw * this.curr_frame;
    }
  }

  spawn_part(num) {
    for (let i = 0; i < num; i++) {
      this.handler.add(new Particle(this.x, this.y));
    }
  }

  isColliding(o) {
    let l = this.dx < o.x + o.w;
    let r = this.dx + this.w > o.x;
    let t = this.dy < o.y + o.h;
    let b = this.dy + this.h > o.y;

    return l && r && t && b;
  }

  col_resolve(o) {
    let vx = this.centerX - o.centerX;
    let vy = this.centerY - o.centerY;
    let hw = this.halfW + o.halfW;
    let hh = this.halfH + o.halfH;

    let coldir = "";

    if (Math.abs(vx) < hw && Math.abs(vy) < hh) {
      let ox = hw - Math.abs(vx);
      let oy = hh - Math.abs(vy);

      if (ox >= oy) {
        if (vy > 0) {
          this.coldir = "t";
          this.dy += oy;
          TouchHandler.y += oy;
        } else {
          this.coldir = "b";
          this.dy -= oy;
          TouchHandler.y -= oy;
        }
      } else {
        if (vx > 0) {
          this.coldir = "l";
          this.dx += ox;
          TouchHandler.x += ox;
        } else {
          this.coldir = "r";
          this.dx -= ox;
          TouchHandler.x -= ox;
        }
      }
    }
  }

  get centerX() {
    return this.x + this.w * 0.5;
  }
  get centerY() {
    return this.y + this.h * 0.5;
  }
  get halfW() {
    return this.w * 0.5;
  }
  get halfH() {
    return this.h * 0.5;
  }
}

class Block extends GameObject {
  constructor(x = 0, y = 0, img = null, hndl = null) {
    super(x, y, img, hndl);

    this.id = "block";

    this.isCollidable = true;
  }
}

class Particle extends GameObject {
  constructor(x, y) {
    super(x + 16 * 0.5, y + 16 * 0.5, null, null);

    this.w *= 0.25;
    this.h *= 0.25;

    this.dx = Math.cos(Math.random() * (2 * Math.PI));
    this.dy = Math.sin(Math.random() * (2 * Math.PI));

    this.life = 0;
    this.ttl_life = Math.random() * 100;
  }

  update() {
    this.life++;
    this.w -= 0.02;
    this.h -= 0.02;
    if (this.life >= this.ttl_life) this.remove = true;

    this.x += 0.7 * this.dx;
    this.y += 0.4 * this.dy;
  }
}

/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/

class Bullet extends GameObject {
  constructor(x = 0, y = 0, img = null, hndl = null) {
    super(x, y, img, hndl);

    this.w = this.h = 4;

    this.sx = Math.floor(Math.random() * 6) * 16;
    this.sy = 64;

    this.ang = Math.atan2(TouchHandler.y1 - this.y, TouchHandler.x1 - this.x);
    this.dx = x;
    this.dy = y;
  }

  update() {
    this.speed_x = Math.cos(this.ang) * 5;
    this.speed_y = Math.sin(this.ang) * 5;

    for (const o of this.handler.objects) {
      if (o.isCollidable && this.isColliding(o)) {
        if (o instanceof Enemy) {
          o.remove = true;
          o.spawn_part(25);
          if (Math.random() >= 0.8) o.spawn_coin();
          ek++;
        }
      }
    }

    if (this.x < 16 || this.x > 16 * 14) this.remove = true;
    if (this.y < 16 || this.y > 16 * 14) this.remove = true;

    this.dx += this.speed_x;
    this.dy += this.speed_y;

    this.x = this.dx;
    this.y = this.dy;
  }
}

class Coin extends GameObject {
  constructor(x, y, img, hndlr) {
    super(x, y, img, hndlr);

    this.sx = 0;
    this.sy = 16;

    this.w = this.h = 8;

    this.ttl_frames = 4;
    this.anim_speed = 4;

    this.isCollidable = true;
  }

  update() {
    this.animate();
  }
}

class Player extends GameObject {
  static isAlive = true;

  constructor(x = 0, y = 0, img = null, hndl = null) {
    super(x, y, img, hndl);

    this.id = "player";

    this.dx = x;
    this.dy = y;
    TouchHandler.x1 = x;
    TouchHandler.y1 = y;

    this.lives = 3;
    this.coins = 0;

    this.speed = 16;

    this.shoot_speed = 10;
    this.shoot_frame = 0;

    /*const btn_shoot = document.getElementById("btn-shoot");
            btn_shoot.onclick = () => {
                this.shoot();
            }*/
  }

  init() {
    for (const o of this.handler.objects) {
      if (o instanceof Enemy) o.remove = true;
      if (o instanceof Coin) o.remove = true;
      if (o instanceof Bullet) o.remove = true;
      if (o instanceof Particle) o.remove = true;
    }

    this.dx = 16 * 8;
    this.dy = 16 * 8;

    TouchHandler.x1 = this.dx;
    TouchHandler.y1 = this.dx;
    this.speed = 16;
  }
  update(dt) {
    //this.currTime += dt;
    this.shoot_frame++;

    this.animate();

    if (pl <= 0) {
      TouchHandler.x1 = -1;
      TouchHandler.y1 = -1;
      this.init();
    }

    this.dx += (TouchHandler.x1 - this.x) / this.speed;
    this.dy += (TouchHandler.y1 - this.y) / this.speed;

    if (this.dx < 16) this.dx = 16;
    else if (this.dx > 16 * 15 - this.w) this.dx = 16 * 15 - this.w;

    if (this.dy < 16) this.dy = 16;
    else if (this.dy > 16 * 15 - this.h) this.dy = 16 * 15 - this.h;

    for (const o of this.handler.objects) {
      if (o.isCollidable && this.isColliding(o)) {
        if (o instanceof Block) {
          this.col_resolve(o);
        }
        if (o instanceof Enemy) {
          /*this.remove = true;
                        this.spawn_part(25);*/
          o.remove = true;
          //this.spawn_part(25);
          this.init();
          pl--;
        }
        if (o instanceof Coin) {
          o.remove = true;
          co++;
        }
      }
    }

    if (TouchHandler.touched && this.shoot_frame >= this.shoot_speed) {
      this.shoot_frame = 0;
      this.shoot();
    }

    this.x = this.dx;
    this.y = this.dy;
  }

  shoot() {
    if (this.handler != undefined)
      this.handler.add(
        new Bullet(
          this.x + this.w * 0.5 - 2,
          this.y + this.h * 0.5 - 2,
          this.img,
          this.handler
        )
      );
  }
}

class Enemy extends GameObject {
  constructor(x = 0, y = 0, img = null, hndlr = null) {
    super(x, y, img, hndlr);

    this.id = "enemy";

    this.sx = 0;
    this.sy = 48;

    this.to_x = x;
    this.to_y = y;
    this.dx = x;
    this.dy = y;

    this.isCollidable = true;

    this.speed = /*Math.random() */ 150;
  }

  update() {
    this.animate();

    for (const o of this.handler.objects) {
      if (o instanceof Player) {
        this.to_x = o.x;
        this.to_y = o.y;
      }
    }

    this.dx += (this.to_x - this.x) / this.speed;
    this.dy += (this.to_y - this.y) / this.speed;

    this.x = this.dx;
    this.y = this.dy;
  }

  spawn_coin() {
    this.handler.add(new Coin(this.x, this.y, this.img, this.handler));
  }
}

let pl = 3;
let ek = 0;
let co = 0;

class Game {
  static r;
  static isPlaying = true;
  constructor() {
    this.last = 0;
    this.current = 0;

    this.state = "boot";

    this.ts = 16;
    this.vw = 16;
    this.ratio = 1;

    this.img = null;
    this.mu_bkgd = null;

    this.ctx = document.querySelector("canvas").getContext("2d");

    this.ctx.canvas.ontouchstart = touchstart;
    this.ctx.canvas.ontouchmove = touchmove;
    this.ctx.canvas.ontouchend = touchend;

    window.onresize = () => this.resize();
    this.resize();

    this.handler = new Handler();

    // Gameover TEMP
    this.go_x = 0;
    this.go_y = 0;
    this.go_i = 0;
    this.go_f = 0;
    this.go_colors = ["white", "gray", "black", "gray"];
    this.go_ci = 0;

    let confirmbool = confirm(
      "This game is far from complete so sorry for the bugs (busy holidays).\nI dont know if I will keep on updating it but hope you enjoy!"
    );

    if (confirmbool == true || confirmbool == false) {
      this.mu_bkgd = new Audio();
      this.mu_bkgd.loop = true;
      this.mu_bkgd.autoplay = true;
      this.mu_bkgd.onerror = () => console.log("Audio fail");
      this.mu_bkgd.onloadstart = () => {
        this.mu_bkgd.play();
        //this.update();
      };
      this.mu_bkgd.src =
        "https://www.dropbox.com/s/6d55x9yhzlr5el8/main.mp3?raw=1";

      this.img = new Image();
      this.img.onload = () => this.init();
      this.img.onerror = () => {
        this.ctx.fillText("Failed to load image", 0, 16);
      };
      this.img.src =
        "https://www.dropbox.com/s/lrpzyjtlioryebp/sheet.png?raw=1";
    }

    //this.init();
  }

  resize() {
    if (this.ctx == null || this.ctx == undefined) return;
    this.ctx.canvas.width = innerWidth * 0.99;
    this.ctx.canvas.height = innerHeight * 0.99;

    if (this.ctx.canvas.width > this.ctx.canvas.height)
      this.ctx.canvas.width = this.ctx.canvas.height;
    else if (this.ctx.canvas.height > this.ctx.canvas.width)
      this.ctx.canvas.height = this.ctx.canvas.width;

    this.ratio = this.ctx.canvas.width / this.ts / this.vw;
    Game.r = this.ratio;
    this.ctx.font = `${this.ts * 0.5 * this.ratio}px 'Press Start 2P`;
    this.ctx.imageSmoothingEnabled = false;
  }

  init() {
    this.state = "loading";
    this.buildmap(maps.lvl1.bgkd);
    this.buildmap(maps.lvl1.frgd);

    this.update();
  }

  update(hrts) {
    this.current = hrts;
    requestAnimationFrame(this.update.bind(this));

    let dt = (this.current - this.last) / 1000;

    if (!this.mu_bkgd.isPlaying && TouchHandler.touched) {
      this.mu_bkgd.play();
    }

    // Lazy states
    if (pl > 0) {
      this.spawn_enemy(1);

      this.handler.update(dt);
    } else {
      this.update_gameover();
    }

    this.render();

    this.last = this.current;
  }

  render() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    // TEMP LAZY
    if (pl > 0) {
      this.handler.draw(this.ctx, this.ratio);

      this.draw_ui();
    } else {
      this.draw_gameover();
    }

    //this.draw_grid();
  }

  draw_ui() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, 112 * this.ratio, 16 * this.ratio);
    this.ctx.fillRect(160 * this.ratio, 0, 96 * this.ratio, 16 * this.ratio);
    this.ctx.fillStyle = "white";

    this.ctx.drawImage(
      this.img,
      0,
      80,
      16,
      16,
      0,
      0,
      16 * this.ratio,
      16 * this.ratio
    );
    this.ctx.fillText(`x${pl}`, 16 * this.ratio, 16 * this.ratio);

    this.ctx.drawImage(
      this.img,
      16,
      80,
      16,
      16,
      48 * this.ratio,
      0 * this.ratio,
      16 * this.ratio,
      16 * this.ratio
    );
    this.ctx.fillText(`x${ek}`, 64 * this.ratio, 16 * this.ratio);

    this.ctx.drawImage(
      this.img,
      32,
      80,
      16,
      16,
      208 * this.ratio,
      0 * this.ratio,
      16 * this.ratio,
      16 * this.ratio
    );
    this.ctx.fillText(`x${co}`, 224 * this.ratio, 16 * this.ratio);
  }

  spawn_enemy(curr_lvl) {
    let num = Math.random() * 100;

    let dirs = ["t", "r", "l", "b"];
    let xx = 0,
      yy = 0;

    switch (dirs[Math.floor(Math.random() * dirs.length)]) {
      case "t":
        xx = Math.floor(Math.random() * (10 - 7) + 7) * 16;
        yy = -16;
        break;
      case "r":
        yy = Math.floor(Math.random() * (10 - 7) + 7) * 16;
        xx = this.ts * this.vw - 16;
        break;
      case "l":
        yy = Math.floor(Math.random() * (10 - 7) + 7) * 16;
        xx = -16;
        break;
      case "b":
        xx = Math.floor(Math.random() * (10 - 7) + 7) * 16;
        yy = this.ts * this.vw + 16;
        break;
    }

    if (num >= 96) {
      this.handler.add(new Enemy(xx, yy, this.img, this.handler));
    }
  }

  // TEMP
  update_gameover() {
    for (const o of this.handler.objects) {
      if (!o instanceof Block) {
        o.remove = true;
      }
    }

    this.go_f++;
    this.go_y = 5 * Math.sin(this.go_f / 6) + 16;

    if (this.go_f % 10 == 0) this.go_i++;
    if (this.go_i >= 4) this.go_i = 0;

    if (this.go_f % 5 == 0) this.go_ci++;
    if (this.go_ci >= this.go_colors.length) this.go_ci = 0;

    if (this.go_f > 60 && TouchHandler.touched) {
      pl = 3;
      co = 0;
      ek = 0;
      this.go_f = 0;
      this.go_i = 0;
      this.go_y = 0;
      this.go_ci = 0;
    }
  }

  draw_gameover() {
    let text = "Game";
    let text2 = "Over";

    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    this.ctx.fillStyle = "rgb(181,223,228)";
    this.ctx.fillText(`Killed ${ek}`, 0 * this.ratio, 16 * this.ratio);
    this.ctx.fillText(`Earned ${co}`, 0 * this.ratio, 16 * 2 * this.ratio);

    this.ctx.fillStyle = "white";
    //for (const i in text){
    this.ctx.fillText(
      text[this.go_i],
      (16 * this.go_i * 0.5 + 16 * 7) * this.ratio,
      (this.go_y + 16 * 5) * this.ratio
    );
    //}

    this.ctx.fillText(
      text2[this.go_i],
      16 * 6 * (this.go_i + 1) * 0.5 * this.ratio,
      (this.go_y + 16 * 6) * this.ratio
    );

    this.ctx.fillStyle = this.go_colors[this.go_ci];
    this.ctx.fillText(
      "Touch to play again.",
      48 * this.ratio,
      16 * 10 * this.ratio
    );
    this.ctx.fillStyle = this.go_colors[this.go_ci + 1];
    this.ctx.fillText(
      "Everything By HAPPY TO HELP",
      20 * this.ratio,
      16 * 12 * this.ratio
    );
  }

  buildmap(layer) {
    for (let i = 0; i < layer.length; i++) {
      for (let j = 0; j < layer[0].length; j++) {
        let current = layer[i][j];
        let tile = null;

        let tx = Math.floor((current - 1) % this.ts) * this.ts;
        let ty = Math.floor((current - 1) / this.ts) * this.ts;

        switch (current) {
          case 0:
            break;

          case 1: // NULL TILE
            break;

          case 2: // Ice 1
          case 3: // Ice 2
          case 4: // Snow 1
          case 5: // Snow 2
            tile = new Block(j * this.ts, i * this.ts, this.img, this.handler);
            tile.sx = tx;
            tile.sy = ty;
            tile.isCollidable = false;
            this.handler.add(tile);
            break;
          case 6: // Snow Rocks
          case 7: // Tree
            tile = new Block(j * this.ts, i * this.ts, this.img, this.handler);
            tile.sx = tx;
            tile.sy = ty;
            this.handler.add(tile);
            break;

          case 33:
            tile = new Player(j * this.ts, i * this.ts, this.img, this.handler);
            tile.sx = tx;
            tile.sy = ty;
            this.handler.add(tile);
            break;
          case 49: // Elf
            tile = new Enemy(j * this.ts, i * this.ts, this.img, this.handler);
            tile.sx = tx;
            tile.sy = ty;
            this.handler.add(tile);
            break;
          default:
            break;
        }
      }
    }
  }

  draw_grid() {
    for (let i = 0; i < this.vw; i++) {
      for (let j = 0; j < this.vw; j++) {
        this.ctx.strokeStyle = "rgba(0,0,0,0.3)";
        this.ctx.strokeRect(
          j * this.ts * this.ratio,
          i * this.ts * this.ratio,
          this.ts * this.ratio,
          this.ts * this.ratio
        );
      }
    }
  }
}

window.onload = () => new Game();

const touchstart = (e) => {
  //e.preventDefault();
  let cnv_l = document.querySelector("canvas").getBoundingClientRect().left;
  let cnv_r = document.querySelector("canvas").getBoundingClientRect().right;
  let cnv_t = document.querySelector("canvas").getBoundingClientRect().top;
  let cnv_b = document.querySelector("canvas").getBoundingClientRect().bottom;

  TouchHandler.touched = true;

  TouchHandler.x1 = (e.changedTouches[0].clientX - cnv_l) / Game.r;
  TouchHandler.y1 = (e.changedTouches[0].clientY - cnv_t) / Game.r;
  /*TouchHandler.x2 = (e.changedTouches[1].clientX - cnv_l) / Game.r;
        TouchHandler.y2 = (e.changedTouches[1].clientY - cnv_t) / Game.r;*/
};

const touchmove = (e) => {
  //e.preventDefault();
  let cnv_l = document.querySelector("canvas").getBoundingClientRect().left;
  let cnv_r = document.querySelector("canvas").getBoundingClientRect().right;
  let cnv_t = document.querySelector("canvas").getBoundingClientRect().top;
  let cnv_b = document.querySelector("canvas").getBoundingClientRect().bottom;

  TouchHandler.touched = true;

  TouchHandler.x1 = (e.changedTouches[0].clientX - cnv_l) / Game.r;
  TouchHandler.y1 = (e.changedTouches[0].clientY - cnv_t) / Game.r;
  /*TouchHandler.x2 = (e.changedTouches[1].clientX - cnv_l) / Game.r;
        TouchHandler.y2 = (e.changedTouches[1].clientY - cnv_t) / Game.r;*/
};

const touchend = (e) => {
  TouchHandler.touched = false;
};

window.oncontextmenu = () => false;

/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/
