import kaboom from "kaboom";
import "kaboom/global";
kaboom({
  width: window.innerWidth,
  height: window.innerHeight,
  scale: 1,
})
add([
  sprite("grass.bg"),
  pos(width() / 2, height() / 2),
  scale(width() / sprite("grass.bg").width, height() / sprite("grass.bg").height),
  fixed(),
]);
add([
  anchor("center"),
  sprite("road"),
  pos(width() / 2, height() / 2),
  scale(Math.max(width() /1600, height() /1600)),
  fixed(),
]);
add([
  anchor("center"),
  sprite("lava"),
  pos(width() / 2, height() / 2),
  scale(Math.max(width() /1600, height() /1600)),
  fixed(),
]);
add([
  anchor("center"),
  sprite("fullmoon"),
  pos(width() / 2, height() / 2),
  scale(Math.max(width() /1600, height() /1600)),
  fixed(),
]);
add([
  anchor("center"),
  sprite("skybackground"),
  pos(width() / 2, height() / 2),
  scale(Math.max(width() /1600, height() /1600)),
  fixed(),
]);
add([
  anchor("center"),
  sprite("plain"),
  pos(width() / 2, height() / 2),
  scale(Math.max(width() /1600, height() /1600)),
  fixed(),
]);
add([
  anchor("center"),
  sprite("logo"),
  pos(width() / 2, height() / 2),
  scale(Math.max(width() /1600, height() /1600)),
  fixed(),
]);
console.log("Game started")

kaboom({
  background: [26, 128, 138],
  font: "EvilEmpire",
});

// Font used throughout
loadFont("EvilEmpire", "/code/fonts/komitt.ttf");

// Various game sprites go here
loadSprite("ghosty", "/sprites/ghosty.png");
loadSprite("grass", "/sprites/grass.png");
loadSprite("steel", "/sprites/steel.png");
loadSprite("door", "/sprites/door.png");
loadSprite("key", "/sprites/key.png");
loadSprite("bean", "/sprites/bean.png");
loadSprite("logo", "/sprites/logo.png");
loadSprite("orange", "/sprites/orange.png");
loadSprite("sky", "/sprites/sky.png");
loadSprite("alien", "/sprites/alien.png");
loadSprite("smile", "/sprites/smile.png");
loadSprite("shades", "/sprites/shades.png");
loadSprite("EndScreen", "/sprites/EndScreen.png");
loadSprite("grass.bg", "/sprites/grassbackground.png");
loadSprite("road", "/sprites/road.png");
loadSprite("lava", "/sprites/lava.jpg");
loadSprite("plain", "/sprites/plain.png");
loadSprite("LoseScreen", "/sprites/LoseScreen.png");
loadSprite("mathstime", "/sprites/mathstime.png");
loadSprite("levelover", "/sprites/levelover.png");
loadSprite("fullmoon", "/sprites/fullmoon.png");
loadSprite("dog", "sprites/dog.png");
loadSprite("cat", "sprites/cat.png");
loadSprite("bat", "sprites/bat.png");
loadSprite("bear", "sprites/bear.png");
loadSprite("fox", "sprites/fox.png");
loadSprite("hampster", "sprites/hampster.png");
loadSprite("horse", "sprites/horse.png");
loadSprite("rabbit", "sprites/rabbit.png");
loadSprite("tiger", "sprites/tiger.png");
loadSprite("unicorn", "sprites/unicorn.png");
loadSprite("wolf", "sprites/wolf.png");
loadSprite("dragon", "sprites/dragon.png");
loadSprite("frog", "sprites/frog.png");
loadSprite("panda", "sprites/panda.png");
loadSprite("mute", "sprites/mute.png");
loadSprite("sound", "sprites/sound.png");
loadSprite("Tiger", "sprites/tiger.png");
loadSprite("skybackground", "sprites/skybackground.png");
loadSprite("skybackground", "sprites/skybackground.png");
loadSprite("mute", "sprites/mute.png");
loadSprite("sound", "sprites/sound.png");
loadSprite("one", "sprites/one.png");
loadSprite("two", "sprites/two.png");
loadSprite("three", "sprites/three.png");
loadSprite("four", "sprites/four.png");
loadSprite("ninja", "sprites/ninja.png");
loadSprite("girl", "sprites/girl.png");
loadSprite("detective", "sprites/detective.png");
loadSprite("boy", "sprites/boy.png");
loadSprite("astronaut", "sprites/astro.png");
loadSprite("trophy", "sprites/trophy.png");
loadSprite("cross", "sprites/cross.png");
loadSprite("medal", "sprites/medal.png");

// in-game sounds
loadSound("AckWoi", "/sounds/DavidCutter-AckWoi.mp3");
loadSound("WorkinginNY", "/sounds/DavidCutter-WorkinginNewYork.mp3");
loadSound("Honey", "/sounds/DavidCutter-Honey.mp3");
loadSound("Elderberry", "/sounds/DavidCutter-Elderberry.mp3");
loadSound("GoodDeeds", "/sounds/DavidCutter-GoodDeeds.mp3");

let currentLevel = 1;
let selectedCharacter = null;
let score = 3
const SPEED = 680;
let isMuted = false;
const LEVELS = [//chnage maps up except first one 
  [
    "===|======================",
    "=                        =",
    "=====$====================",
    "=                        =",
    "================ ======a==",
    "=                        =",
    "=a=======  ===============",
    "=                        =",
    "= =====================a==",
    "=                        =",
    "==a=============      ====",
    "=                        =",
    "=a  @=====================",
    "==========================",
  ],
  [
    "--------------------------",
    "--------------------------",
    "-------------$  --    ----",
    "-------------       -  ---",
    "|           -----    --- -",
    "-----              ----l--",
    "----   ---  ----   -------",
    "-----   ----------   --l--",
    "-----    -l------    -----",
    "-      ------      ---l---",
    "--  --  -  -l-----   -----",
    "-  ---    --------     --- ",
    "-- -                ------",
    "- @               --------",
    "--------------------------",
    "--------------------------",
  ],
  [
    ">>>>>>>>>>>>>>>>>>>>>>>>>>",
    ">    >>>>>>>>>>>>>>>>>>>>>",
    ">>>>                $    >",
    "|    >>>>>c>>>>>>>>>   >>>",
    ">                        >",
    ">    >>>>>>>>>>>>>>>>>>>>>",
    ">                        >",
    ">>>>>>>>>>>>>>>>>>>>>>   >",
    ">c                       >",
    "> >>>>>>>>>>>>>>>>>>     >",
    ">                        >",
    ">>>>   >>>>>>>>>>>>>>>   >",
    ">                        >",
    ">>>>@    >>>>>>>>>>>>>>>>>",
    ">>>>>>>>>>>>>>>>>>>>>>>>>>",
  ],
  [
    "ooooooooooooooooooooooooo",
    "o x   ooo   ooo  ooo    o",
    "o oo  oooooooo ooooo  $ o",
    "o   o x           x    oo",
    "o ooo ooo x   ooo oo  ooo",
    "o     oooooo   x       oo",
    "|                 oooo  o",
    "oo oooooooooooooooooo  oo",
    "o                   o   o",
    "o ooooooooooooooooo   ooo",
    "o                       o",
    "oooooooooooooooooooo   oo",
    "o                     o o",
    "ooo@   xooooooooooooooooo",
    "ooooooooooooooooooooooooo",

  ],
];
const LEVELOPTS = {
  tileWidth: 64,
  tileHeight: 64,
  tiles: {
    "=": () => [
      sprite("grass"),
      area(),
      body({ isStatic: true }),
      anchor("center"),
      scale(0.25),
      "wall",
    ],
    "-": () => [
      sprite("steel"),
      area(),
      body({ isStatic: true }),
      scale(0.26),
      anchor("center"),
      "wall",
    ],
    ">": () => [
      sprite("orange"),
      area(),
      body({ isStatic: true }),
      scale(0.25),
      anchor("center"),
      "wall",
    ],
    "o": () => [
      sprite("sky"),
      area(),
      body({ isStatic: true }),
      scale(0.249),
      anchor("center"),
      "wall",
    ],
    "$": () => [
      sprite("key"),
      area(),
      anchor("center"),
      "key",
    ],
    "@": () => [
      sprite(selectedCharacter),
      area(),
      body(),
      scale(0.25),
      anchor("center"),
      "player",
    ],
    "l": () => [
      sprite("ghosty"),
      area(),
      body(),
      anchor("center"),
      "ghosty",
    ],
    "|": () => [
      sprite("door"),
      area(),
      body({ isStatic: true }),
      scale(0.25),
      anchor("center"),
      "door",
    ],
    "a": () => [
      sprite("alien"),
      area(),
      body({ isStatic: true }),
      scale(0.1),
      anchor("center"),
      "alien",
    ],
    "c": () => [
      sprite("smile"),
      area(),
      body({ isStatic: true }),
      scale(0.15),
      anchor("center"),
      "smile",
    ],
    "x": () => [
      sprite("shades"),
      area(),
      body({ isStatic: true }),
      scale(0.15),
      anchor("center"),
      "shades",
    ],
  },
}
function addButton(txt, p, f) {
  const btn = add([
    text(txt),
    pos(p),
    area(),
    anchor("center"),
  ]);

  btn.onClick(f);

  btn.onUpdate(() => {
    if (btn.isHovering()) {
      btn.scale = vec2(1.2);
    } else {
      btn.scale = vec2(1);
      btn.color = rgb(208, 207, 206);
    }
  });
}
function generateQuestion(min, max, ensureSmallerOperand, opname, opfunc) {
  // Special-case division
  if (opname === "/") {
    let answer = randi(1, max)
    let num2 = randi(1, max)
    let num1 = answer * num2

    let question = `${num1} ÷ ${num2} =`
    return [question, answer]
  }

  // Generate the first random number
  num1 = randi(min, max)

  // if ensureSmallerOperand, we pick a random number that is less than num1
  if (ensureSmallerOperand) {
    max = num1
  }

  // Generate the second random number
  num2 = randi(min, max)

  // Generate the question text
  let question = `${num1} ${opname} ${num2} =`

  // Work out the correct number
  let answer = opfunc(num1, num2)

  return [question, answer]
}
function addDialog() {
  //const h = 160;
  //const pad = 16;

  const bg = add([
    rect(width(), 160),
    pos(0, height()),
    anchor("botleft"),
    color(0, 0, 0),
    fixed(),
    z(100),
  ]);
  const txt = add([
    text(""),
    pos(16, height() - 160 + 16),
    fixed(),
    color(255, 255, 255),
    z(100),
  ])
  bg.hidden = true;
  txt.hidden = true;
  return {
    say(t) {
      txt.text = t;
      bg.hidden = false;
      txt.hidden = false;
    },
    dismiss() {
      if (!this.active()) {
        return;
      }
      txt.text = "";
      bg.hidden = true;
      txt.hidden = true;
    },
    active() {
      return !bg.hidden;
    },
    destroy() {
      bg.destroy();
      txt.destroy();
    },
  };
}
const music1 = play("AckWoi", {
  volume: 0.8,
  loop: true
})
const music2 = play("Elderberry", {
  volume: 0.8,
  loop: true
})
const music3 = play("WorkinginNY", {
  volume: 0.8,
  loop: true
})
const music4 = play("Honey", {
  volume: 0.8,
  loop: true
})
const music5 = play("GoodDeeds", {
  volume: 0.8,
  loop: true
})
const music6 = play("Hasta", {
  volume: 0.8,
  loop: true
})
function stop_all_music() {
  music1.stop()
  music2.stop()
  music3.stop()
  music4.stop()
  music5.stop()
  music6.stop()
}
stop_all_music()
let music_muted = false
scene("start", () => {
  stop_all_music()
  music1.play()
  
  const music_button = add([
    sprite("sound"),
    pos(1350, 45), // Change the pos to whatever you want.
    area(),
    color(255,255,255),
    anchor("center"),
    z(2),
    scale(0.3), // Change to whatever you want. yhyh that aint too deep 
    "music_button",
  ])

  music_button.onClick(() => {
    if (music_muted == false) {
      music_muted = true
      music_button.use(sprite("mute"))
      volume(0) // This effects all game sounds
    } else if (music_muted == true){
      music_muted = false
      music_button.use(sprite("sound"))
      volume(0.8) // This effects all game sounds
    }
  }) 
  add([
    pos(1230, 89),    
    text("Mute / Unmute", {
      size: 40,
      width: 1600,
    }),
    z(1),
  ]);
  add([sprite("logo", { width: width(), height: height() })]);
  scale(Math.max(width() / 1080, height() / 2080)),
    addButton("Start", vec2(width() / 2, height() - 2 - 270), () => go("gametypeselection"));
  addButton("Help", vec2(width() / 2, height() - 2 - 210), () => go("help"));
  addButton("Credits", vec2(width() / 2, height() - 2 - 150), () => go("credits"));

});
scene("gametypeselection", () => {
  music1.play()
  add([
    sprite("plain", { width: width(), height: height() })
  ]);
  scale(Math.max(width() / 1080, height() / 2080))
  add([
    pos(width() / 25, height() / 7),
    text("Select your game mode", {
      size: 40,
      width: 1600,
    }),
  ]);
  currentLevel = 1,
  addButton("Normal Mode (Play the game all at once)", vec2(width() / 2, height() - 2 - 450), () => {
    go("characterSelection")
  });
  addButton("Indivisual Mode (Play levels one at a time / focus on one skill)", vec2(width() / 2, height() - 2 - 350), () => {
    go("characterSelectionforlevel")
  });
  addButton("Maths Mode (Just play maths with no level's)", vec2(width() / 2, height() - 2 - 250), () => {
    go("mathsmode")
  });
  addButton("Go Back to the start", vec2(width() / 2, height() / 2 - -300), () => go("start"));
})
scene("help", () => {
  stop_all_music()
  music1.play()

  add([sprite("plain"), pos, vec2(width() / 2 - 4 * 64, height() / 2 - 3 * 64),
  ]);
  add([
    pos(width() / 25, height() / 7),
    text("How to Play", {
      size: 40,
      width: 1600,
    }),
  ]);

  add([
    pos(width() / 25, height() / 1.9),
    text("In this game, find the key to open doors. But watch out, surprises await! To control your character all you need to do is press the ↑ ↓ → ← key or WASD key.", {
      size: 30,
      width: 1200,
    }), // FIX THIS TEXT
  ]);
  add([
    pos((width() / 2), height() / 1.2),
    text("Press any key to Start", {
      size: 30,
      width: 1200,
    }),

    addButton("Go Back to the start screen", vec2(width() / 2, height() - 2 - 180), () => go("start"))
  ]);

  onKeyPress(() => go("gametypeselection"));
});
scene("characterSelectionforlevel", () => {
  stop_all_music()
   music1.play()
  add([
    anchor("center"),
    sprite("plain"),
    pos(width() / 2, height() / 2),
    scale(Math.max(width() / 1600, height() / 1600)),
    fixed(),
  ]);
  add([
    pos(width() / 25, height() / 7),
    text("What Character Would You Like To Play As?", {
      size: 40,
      width: 1600,
    }),
  ]);

  addButton("Smiley", vec2(width() / 2, height() / 2), () => {
    selectedCharacter = "bean"
    go("levelselection")
  });

  addButton("Dog", vec2(width() / 2 - 500, height() / 2), () => {
    selectedCharacter = "dog"
    go("levelselection")
  });

  addButton("Cat", vec2(width() / 2 - - 300, height() / 2), () => {
    selectedCharacter = "cat"
    go("levelselection")
  });
  addButton("Bear", vec2(width() / 2 - 300, height() / 2), () => {
    selectedCharacter = "bear"
    go("levelselection")
  });
  addButton("Bat", vec2(width() / 2 - - 500, height() / 2), () => {
    selectedCharacter = "bat"
    go("levelselection")
  });
  addButton("Fox", vec2(width() / 2, height() / 2 - - 100), () => {
    selectedCharacter = "fox"
    go("levelselection")
  });
  addButton("Hamster", vec2(width() / 2 - 300, height() / 2 - - 100), () => {
    selectedCharacter = "hampster"
    go("levelselection")
  });
  addButton("Horse", vec2(width() / 2 - 500, height() / 2 - - 100), () => {
    selectedCharacter = "horse"
    go("levelselection")
  });
  addButton("Rabbit", vec2(width() / 2 - - 300, height() / 2 - - 100), () => {
    selectedCharacter = "rabbit"
    go("levelselection")
  });
  addButton("Tiger", vec2(width() / 2 - - 500, height() / 2 - - 100), () => {
    selectedCharacter = "Tiger"
    go("levelselection")
  });
  addButton("Unicorn", vec2(width() / 2 - 500, height() / 2 - - 175), () => {
    selectedCharacter = "unicorn"
    go("levelselection")
  });
  addButton("Wolf", vec2(width() / 2 - - 500, height() / 2 - - 175), () => {
    selectedCharacter = "wolf"
    go("levelselection")
  });
  addButton("Panda", vec2(width() / 2 - - 300, height() / 2 - - 175), () => {
    selectedCharacter = "panda"
    go("levelselection")
  });
  addButton("Frog", vec2(width() / 2, height() / 2 - - 175), () => {
    selectedCharacter = "frog"
    go("levelselection")
  });
  addButton("Dragon", vec2(width() / 2 - 300, height() / 2 - - 175), () => {
    selectedCharacter = "dragon"
    go("levelselection")
  });
  addButton("Astronaut", vec2(width() / 2 - - 500, height() / 2 -100), () => {
    selectedCharacter = "astronaut"
    go("levelselection")
  });
  addButton("Detective", vec2(width() / 2 - - 300, height() / 2 -100), () => {
    selectedCharacter = "detective"
    go("levelselection")
  });
  addButton("Girl", vec2(width() / 2 - 300, height() / 2 - 100), () => {
    selectedCharacter = "girl"
    go("levelselection")
  });
  addButton("Boy", vec2(width() / 2 - 500, height() / 2 - 100), () => {
    selectedCharacter = "boy"
    go("levelselection")
  });
  addButton("Ninja", vec2(width() / 2, height() / 2 - 100), () => {
    selectedCharacter = "ninja"
    go("levelselection")
  });
  addButton("Go Back to the start", vec2(width() / 2, height() / 2 - -300), () => go("start"));
}); 
scene("levelselection", () => {
  music1.play()
  add([
    sprite("plain", { width: width(), height: height() })
  ]);
  scale(Math.max(width() / 1080, height() / 2080))
  addButton("Change your character", vec2(width() / 2, height() / 2 - 200), () => {
    levelIx = 1
    go("characterSelectionforlevel")
  });
  add([
    pos(width() / 25, height() / 9),
    text("Indivisual Mode", {
      size: 40,
      width: 1600,
    }),
  ]);
  addButton("Level 1 (Addition)", vec2(width() / 2, height() / 2 - 100), () => {
    currentLevel = 1
    go("level")
  });
  add([
    sprite("one"),
    pos(width() / 2 - 190, height() / 2 - 115),
    scale(0.6)
  ]);
  scale(Math.max(width() /1 , height() /450 ))
  addButton("Level 2 (Subtraction)", vec2(width() / 2, height() / 2), () => {
   currentLevel = 2;
    go("level")
  });
  add([
    sprite("two"),
    pos(width() / 2 - 220, height() / 2 - 17),
    scale(0.6)
  ]);
  addButton("Level 3 (Multiplication)", vec2(width() / 2, height() / 2 + 100), () => {
    currentLevel = 3
    go("level")
  });
  add([
    sprite("three"),
    pos(width() / 2 - 240, height() / 2 + 80),
    scale(0.6),
  ]);
  addButton("Level 4 (Division)", vec2(width() / 2, height() / 2 + 200), () => {
    currentLevel = 4
    go("level")
  });
  add([
    sprite("four"),
    pos(width() / 2 - 190, height() / 2 + 180),
    scale(0.6)
  ]);
  addButton("Go Back to the start", vec2(width() / 2, height() / 2 + 280), () => go("start")); 
})  
scene("credits", () => {
  add([sprite("plain"), pos, vec2(width() / 2 - 4 * 64, height() / 2 - 3 * 64),
  ]);
  add([
    pos(width() / 25, height() / 7),
    text("Credits I must give", {
      size: 40,
      width: 1600,
    }),
  ]);
  music1.play()
  add([
    pos(width() / 35, height() / 1.9),
    text("I must give credit to my sources which are Canva for background (start, end, and help), OpenGameArt for in level backgrounds. For level 3 I have taken it from opengameart (attribution to creator). OpenMoji and the kaboom Assets Lib for sprites / emojis. I have used music from www.davidcuttermusic.com — David Cutter for my intro. For my font I have used Komika Title I have not made any changes to it and have taken it from Dafont (attribution to creator).", {
      size: 30,
      width: 1200,
    }),
  ]);

  add([
    pos((width() / 7), height() / 1.2),
    text("Press any key to Start", {
      size: 30,
      width: 1200,
    }),
  ]);

  onKeyPress(() => go("gametypeselection"));

  addButton("Go Back to Start", vec2(width() / 2, height() / 2 + 280), () => go("start"));
});
function setupLevel(levelData) {

}
scene("level", () => {
  console.log("level>", currentLevel)
  if (currentLevel === 5) {
    go("win")
  } else {

    let levelIx = currentLevel - 1

    let musics = [music2, music3, music4, music5]
    let bgs = [
      ["grass.bg", 1294, 1600],
      ["road", 1294, 1600],
      ["lava", 1294, 1600],
      ["fullmoon", 1294, 1600],
      ["skybackground", 1294, 1600]
    ];

    const dirs = {
      "left": LEFT,
      "a": LEFT,
      "right": RIGHT,
      "d": RIGHT,
      "up": UP,
      "w": UP,
      "down": DOWN,
      "s": DOWN,
    };

    // Set game music
    stop_all_music()
    musics[levelIx].play()

    // Add the background
add([
  sprite(bgs[levelIx][0]),
  scale(Math.max(width() / bgs[levelIx][1], height() / bgs[levelIx][2])),
  fixed(),
]);

    // Draw the level
    const level = addLevel(LEVELS[levelIx], LEVELOPTS);

    // Get the player object
    const player = level.get("player")[0];
    let dialog = addDialog()

    // Has the player found the key yet?
    let hasKey = false;

    let keydown = [false, false, false, false]
    let move = [0, 0, 0, 0]

    // Move the camera with the player
    player.onUpdate(() => {
      player.move(move[1] - move[3], move[2] - move[0])
      camPos(player.pos)
    })

    let keys = ["up", "right", "down", "left", "w", "d", "s", "a"]

    for (let i = 0; i < keys.length; i++) {
      let j = i % 4
      console.log(j)
      onKeyDown(keys[i], () => {
        if (!keydown[j]) {
          keydown[j] = true
          move[j] = SPEED
        }
      })
      onKeyRelease(keys[i], () => {
        keydown[j] = false
        move[j] = 0
      })
    }

    player.onCollide("wall", (wall, col) => {
      if (col.isTop()) {
        move[0] = 0
      } else if (col.isLeft()) {
        move[3] = 0
      } else if (col.isRight()) {
        move[1] = 0
      } else {
        move[2] = 0
      }
    })

    // Set directional controls
    /*for (const dir in dirs) {
      onKeyPress(dir, () => {
        dialog.dismiss();
      });
      onKeyDown(dir, () => {
        if (movement[dir] == null) {
          player.move(dirs[dir].scale(SPEED));
        }
      });
    };*/

    player.onCollide("key", (key) => {
      destroy(key);
      hasKey = true;
    });

    player.onCollide("door", () => {
      if (hasKey) {
        if (currentLevel === 1) {
          go("mathstime", 0, 20, false, "+", (a, b) => { return a + b });
          currentLevel = 2;
        } else if (currentLevel === 2) {
          go("mathstime", 0, 20, true, "-", (a, b) => { return a - b });
          currentLevel = 3
        } else if (currentLevel === 3) {
          go("mathstime", 0, 12, false, "×", (a, b) => { return a * b });
          currentLevel = 4
        } else if (currentLevel === 4) {
          go("mathstime", 1, 10, true, "/", (a, b) => { return a * b });
          currentLevel = 5
        } else {
          go("win");
        }
      } else {
        dialog.say("You got no key!");
      }
    });
  }
});
scene("mathstime", (min, max, ensureSmallerOperand, opname, opfunc) => {
  score = 3
  // Generate the question and answer
  let [questionVal, answerVal] = generateQuestion(min, max, ensureSmallerOperand, opname, opfunc)

  let answer = answerVal
  console.log(answer)

  // Add the background
  add([sprite("mathstime", { width: width(), height: height() })]);

  // Answer field background
  add([
    pos(width() / 2 + 100, height() / 2.1),
    rect(70, 55),
    outline(6),
    color(36, 34, 137),
    area(),
  ])

  // Question text
  const question = add([
    pos(width() / 2, height() / 2),
    text(questionVal),
    z(3),
  ]);

  // input text
  const input = add([
    pos(width() / 2 + 110, height() / 2),
    text(""),
  ]);

  // Score label
  let scorelabel = add([
    pos(525, 300),
    text("score: " + score)
  ]);

  onCharInput((ch) => {
    if (ch >= "0" && ch <= "9") {
      input.text += ch;
    }
  });

  onKeyPress("backspace", () => {
    if (input.text.length > 0) {
      input.text = input.text.slice(0, -1);
    }
  });

  onKeyPress("enter", () => {
    let inputInt = parseInt(input.text)

    console.log(inputInt, answer)
    if (inputInt === answer) {
      score += 1

      if (score === 6) {
        go("mathsDone");
      }
    } else {
      score -= 1

      if (score < 0) {
        go("losescreen");
      }
    }

    let [new_questionVal, new_answerVal] = generateQuestion(min, max, ensureSmallerOperand, opname, opfunc)

    question.text = new_questionVal
    answer = new_answerVal
    input.text = ""
    scorelabel.text = "score: " + score
  });
  let timer = 65;
  let run_action = 1;
  let timer_yes = "timer on";
  let x = 0;

  const timer_on = add([
    vec2(0, height() / 2),
    fixed(),
  ]);

  const time_x = add([
    text("Timer: " + timer),
    pos(525, 400),
    fixed(),
    outline(2),
    color(255, 255, 255)

  ]);


  onUpdate(() => {
    if (run_action === 1) {
      x++;
    }
    if (x % 60 === 0) {
      timer--;
      time_x.text = "Timer: " + timer;
    }
    if (timer <= 0) {
      go("losescreen")
    }
  });
})
scene("losescreen", () => {
  add([sprite("LoseScreen", { width: width(), height: height() })]);
  stop_all_music()
  music1.play()
  currentLevel = currentLevel - 1;
  addButton("Restart", vec2(width() / 2, (height() / 2) + 85), () => {
    go("level");
  });
  add([
      text("You have not passed this level. Please try again!", { align: "center" }),
      anchor("center"),
      pos(width() / 2, (height() / 2)),
  ]);

  add([
      sprite("cross"),
      pos((width() / 2) - 390, (height() / 2)), // Adjusted position
      area(),
      color(255,255,255),
      anchor("center"),
      z(2),
      scale(0.13),
  ]);
})
scene("mathsDone", () => {
  add([sprite("levelover", { width: width(), height: height() })]);
  stop_all_music()
  music1.play()
  addButton("Restart", vec2(width() / 2, (height() / 2) + 85), () => {
    currentLevel -= 1;
    go("level");
  });
  addButton("Go to next level", vec2(width() / 2, (height() / 2.5) + 25), () => {
  
    go("level")
  });
  addButton("Go to level selection screen", vec2(width() / 2, (height() / 2.5) + 85), () => {
    go("levelselection")
  });
  add([
    text("Your score is 6", { align: "center" }),
    anchor("center"),
    pos(width() / 2, (height() / 2) + 155),
  ]);
  add([
      sprite("medal"),
      pos((width() / 2) - 145, (height() / 2) + 155), // Adjusted position
      area(),
      color(255,255,255),
      anchor("center"),
      z(2),
      scale(0.13),
  ]);
});
scene("win", () => {
  add([sprite("EndScreen", { width: width(), height: height() })]);
  stop_all_music()
  music1.play()
  addButton("Restart", vec2(width() / 2, (height() / 2) + 85), () => {
    currentLevel = 1;
    go("level");
  });
  addButton("Go to Start", vec2(width() / 2, (height() / 2.5) + 85), () => go("start"));
  currentLevel = 1;
  add([
    text("Your score is 24/24", { align: "center" }),
    anchor("center"),
    pos(width() / 2, (height() / 2) + 155),
  ]);
  add([
      sprite("trophy"),
      pos((width() / 2) - 145, (height() / 2) + 155), // Adjusted position
      area(),
      color(255,255,255),
      anchor("center"),
      z(2),
      scale(0.13),
  ]);
});
scene("characterSelection", () => {
  stop_all_music()
  add([
    anchor("center"),
    sprite("plain"),
    pos(width() / 2, height() / 2),
    scale(Math.max(width() / 1600, height() / 1600)),
    fixed(),
  ]);
  add([
    pos(width() / 25, height() / 7),
    text("What Character Would You Like To Play As?", {
      size: 40,
      width: 1600,
    }),
  ]);

  addButton("Smiley Face", vec2(width() / 2, height() / 2), () => {
    selectedCharacter = "bean"
    go("level")
  });

  addButton("Dog", vec2(width() / 2 - 500, height() / 2), () => {
    selectedCharacter = "dog"
    go("level")
  });

  addButton("Cat", vec2(width() / 2 - - 300, height() / 2), () => {
    selectedCharacter = "cat"
    go("level")
  });
  addButton("Bear", vec2(width() / 2 - 300, height() / 2), () => {
    selectedCharacter = "bear"
    go("level")
  });
  addButton("Bat", vec2(width() / 2 - - 500, height() / 2), () => {
    selectedCharacter = "bat"
    go("level")
  });
  addButton("Fox", vec2(width() / 2, height() / 2 - - 100), () => {
    selectedCharacter = "fox"
    go("level")
  });
  addButton("Hamster", vec2(width() / 2 - 300, height() / 2 - - 100), () => {
    selectedCharacter = "hampster"
    go("level")
  });
  addButton("Horse", vec2(width() / 2 - 500, height() / 2 - - 100), () => {
    selectedCharacter = "horse"
    go("level")
  });
  addButton("Rabbit", vec2(width() / 2 - - 300, height() / 2 - - 100), () => {
    selectedCharacter = "rabbit"
    go("level")
  });
  addButton("Tiger", vec2(width() / 2 - - 500, height() / 2 - - 100), () => {
    selectedCharacter = "Tiger"
    go("level")
  });
  addButton("Unicorn", vec2(width() / 2 - 500, height() / 2 - - 175), () => {
    selectedCharacter = "unicorn"
    go("level")
  });
  addButton("Wolf", vec2(width() / 2 - - 500, height() / 2 - - 175), () => {
    selectedCharacter = "wolf"
    go("level")
  });
  addButton("Panda", vec2(width() / 2 - - 300, height() / 2 - - 175), () => {
    selectedCharacter = "panda"
    go("level")
  });
  addButton("Frog", vec2(width() / 2, height() / 2 - - 175), () => {
    selectedCharacter = "frog"
    go("level")
  });
  addButton("Dragon", vec2(width() / 2 - 300, height() / 2 - - 175), () => {
    selectedCharacter = "dragon"
    go("level")
  });
  addButton("Astronaut", vec2(width() / 2 - - 500, height() / 2 -100), () => {
    selectedCharacter = "astronaut"
    go("level")
  });
  addButton("Detective", vec2(width() / 2 - - 300, height() / 2 -100), () => {
    selectedCharacter = "detective"
    go("level")
  });
  addButton("Girl", vec2(width() / 2 - 300, height() / 2 - 100), () => {
    selectedCharacter = "girl"
    go("level")
  });
  addButton("Boy", vec2(width() / 2 - 500, height() / 2 - 100), () => {
    selectedCharacter = "boy"
    go("level")
  });
  addButton("Ninja", vec2(width() / 2, height() / 2 - 100), () => {
    selectedCharacter = "ninja"
    go("level")
  });
  addButton("Go Back to the start", vec2(width() / 2, height() / 2 - -300), () => go("start"));
});
scene("mathsmode", () => {
  stop_all_music()
  music1.play()
  add([
    sprite("plain", { width: width(), height: height() })
  ]);
  scale(Math.max(width() / 1080, height() / 2080))

  addButton("Addition", vec2(width() / 2, height() - 2 - 550), () => {
    go("mathsmodeQ", 0, 20, false, "+", (a, b) => { return a + b })
  });
  addButton("Subtraction", vec2(width() / 2, height() - 2 - 450), () => {
    go("mathsmodeQ", 0, 20, true, "-", (a, b) => { return a - b })
  });
  addButton("Multiplication", vec2(width() / 2, height() - 2 - 350), () => {
    go("mathsmodeQ", 0, 12, false, "×", (a, b) => { return a * b })
  });
  addButton("Division", vec2(width() / 2, height() - 2 - 250), () => {
    go("mathsmodeQ", 0, 12, false, "/", (a, b) => { return a * b })
  });
  addButton("How to play math's mode!", vec2(width() / 2, height() - 2 - 650), () => go("howtoplaymathsmode"));
  addButton("Go back to the start screen", vec2(width() / 2, height() - 2 - 85), () => go("start"));
})
scene("mathsmodeQ", (min, max, ensureSmallerOperand, opname, opfunc) => {
  score = 3
  // Generate the question and answer
  let [questionVal, answerVal] = generateQuestion(min, max, ensureSmallerOperand, opname, opfunc)

  let answer = answerVal
  console.log(answer)

  // Add the background
  add([sprite("plain", { width: width(), height: height() })]);

  // Answer field background
  add([
    pos(width() / 2 + 100, height() / 2.1),
    rect(70, 55),
    outline(6),
    color(36, 34, 137),
    area(),
  ])

  addButton("Go Back to the math's mode screen", vec2(width() / 2, height() - 2 - 180), () => go("mathsmode"));

  // Question text
  const question = add([
    pos(width() / 2 - 30, height() / 2),
    text(questionVal),
    z(3),
  ]);

  // input text
  const input = add([
    pos(width() / 2 + 110, height() / 2),
    text(""),
  ]);

  // Score label
  let scorelabel = add([
    text("score: " + score)
  ]);

  onCharInput((ch) => {
    if (ch >= "0" && ch <= "9") {
      input.text += ch;
    }
  });

  onKeyPress("backspace", () => {
    if (input.text.length > 0) {
      input.text = input.text.slice(0, -1);
    }
  });

  onKeyPress("enter", () => {
    let inputInt = parseInt(input.text)

    console.log(inputInt, answer)
    if (inputInt === answer) {
      score += 1
    } else {
      score -= 1
    }

    let [new_questionVal, new_answerVal] = generateQuestion(min, max, ensureSmallerOperand, opname, opfunc)

    question.text = new_questionVal
    answer = new_answerVal
    input.text = ""
    scorelabel.text = "score: " + score
  });

}) 
scene("howtoplaymathsmode", () => {
  stop_all_music()
  add([sprite("plain"), pos, vec2(width() / 2 - 4 * 64, height() / 2 - 3 * 64),
  ]);
  add([
    pos(width() / 25, height() / 7),
    text("How to play math's mode", {
      size: 40,
      width: 1600,
    }),
  ]);

  add([
    pos(width() / 25, height() / 1.9),
    text("In math's mode you can play just the maths bit's of this game. To make this fun play against a friend and compare your score's.", {
      size: 30,
      width: 1200,
    }),
  ]);
  addButton("Go Back to the math's mode screen", vec2(width() / 2, height() - 2 - 180), () => go("mathsmode"));
});
scene("pre-help", () => {
  stop_all_music()
  music1.play()

  add([sprite("plain"), pos, vec2(width() / 2 - 4 * 64, height() / 2 - 3 * 64),
  ]);
  add([
    pos(width() / 25, height() / 7),
    text("Welcome! Please read what's below to learn how to play.", {
      size: 40,
      width: 1600,
    }),
  ]);

  add([
    pos(width() / 25, height() / 1.9),
    text("In this game, find the key to open doors. But watch out, surprises await! To control your character all you need to do is press the ↑ ↓ → ← key or WASD key.", {
      size: 30,
      width: 1200,
    }), 
  ]);
  add([
    addButton("Go to the start screen", vec2(width() / 2, height() - 2 - 180), () => go("start"))
  ]);
});

go("pre-help");