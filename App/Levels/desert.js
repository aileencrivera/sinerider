const DESERT = {
  name: 'Desert',
  nick: 'DESERT',
  biome: 'sinusoidalDesert',
  axesEnabled: false,
  runAsCutscene: true,
  x: -10,
  y: -10,
  camera: {
    x: 2,
    y: -2,
    fov: 7,
  },
  requirements: ['COS'],
  defaultExpression:
    '\\sin \\left(\\frac{x}{10}\\right)+\\sin \\left(\\frac{x}{20}+\\frac{pi}{3}\\right)+\\sin \\left(\\frac{x}{53}+\\frac{pi}{2}\\right)',
  assets: {
    sounds: {
      music: {
        desert: {
          western_intro: '.mp3',
          western_loop: '.mp3',
        },
      },
    },
  },
  directors: [
    {
      type: 'lerp',
      point0: [0, 0],
      point1: [25, 0],
      state0: {
        position: [-2, 4],
        fov: 5,
      },
      state1: {
        position: [30, 8],
        fov: 12,
      },
    },
    {
      type: 'lerp',
      point0: [35, 0],
      point1: [75, 0],
      state0: {
        position: [30, 8],
        fov: 12,
      },
      state1: {
        position: [74, 5],
        fov: 8,
      },
    },
    {
      type: 'lerp',
      point0: [75, 0],
      point1: [90, 0],
      state0: {
        position: [74, 5],
        fov: 8,
      },
      state1: {
        position: [85, 5],
        fov: 8,
      },
    },
  ],
  goals: [],
  sky: {
    asset: 'images.sinusoidal_desert_background',
    margin: 1,
  },
  dialogue: [
    {
      speaker: 'Ada',
      color: '#FFF',
      content: 'Well, how was it?',
      direction: 'up-up-left',
    },
    {
      speaker: 'Jack',
      color: '#FFF',
      content: 'What?',
      direction: 'up-up-right',
    },
    {
      speaker: 'Ada',
      color: '#FFF',
      content: 'Your canyon.',
      direction: 'up-up-left',
    },
    {
      speaker: 'Jack',
      color: '#FFF',
      content: 'Scary. Hard.',
      direction: 'up-up-right',
      speech: [
        {
          color: '#FFF',
          content: 'Oh.',
          direction: 'up',
          distance: 0.8,
        },
      ],
    },
    {
      speaker: 'Ada',
      color: '#FFF',
      content: "Well, that's why it's not on the route.",
      direction: 'up-up-left',
    },
    {
      speaker: 'Jack',
      color: '#FFF',
      content: 'I did a backflip!',
      direction: 'up-up-right',
      speech: [
        {
          speaker: 'Jack',
          color: '#FFF',
          content: 'I still had fun.',
          direction: 'up',
        },
      ],
    },
    {
      speaker: 'Ada',
      color: '#FFF',
      content: "No, you didn't.",
      direction: 'up-up-left',
    },
    {
      speaker: 'Jack',
      color: '#FFF',
      content: 'Yes I did!',
      direction: 'up-up-left',
      gap: 1,
      length: 2,
    },
    {
      speaker: 'Ada',
      color: '#FFF',
      content: 'Spinning in place is not a backflip.',
      direction: 'up-left',
      length: 4,
      speech: [
        {
          speaker: 'Ada',
          color: '#FFF',
          content: 'Jack… we are ghosts. We can float.',
          direction: 'up-up-left',
        },
      ],
    },
    {
      speaker: 'Jack',
      color: '#FFF',
      content: "You're being negative again.",
      direction: 'up-up-left',
    },
    {
      speaker: 'Ada',
      color: '#FFF',
      content: "It's just the truth!!",
      direction: 'up-left',
      speech: [
        {
          speaker: 'Ada',
          color: '#FFF',
          content: "The truth isn't negative!",
          direction: 'up',
        },
      ],
    },
    {
      speaker: 'Jack',
      color: '#FFF',
      content: 'Are you mad at me?',
      direction: 'up-up-left',
    },
    {
      speaker: 'Ada',
      color: '#FFF',
      content: 'Obviously, yes!',
      direction: 'up-up-left',
      gap: 1,
    },
    {
      speaker: 'Ada',
      color: '#FFF',
      content: 'And probably the race.',
      direction: 'up-up-left',
      speech: [
        {
          speaker: 'Ada',
          color: '#FFF',
          content: 'Your detour cost us time.',
          direction: 'up',
        },
      ],
    },
    {
      speaker: 'Jack',
      color: '#FFF',
      content: "You're right, I'm sorry.",
      direction: 'up-up-right',
    },
    {
      speaker: 'Jack',
      color: '#FFF',
      speakerx: -4,
      content: 'Let me make it up to you. Watch this',
      direction: 'up-up-left',
    },
    {
      speaker: 'Ada',
      color: '#FFF',
      content: '...how is this helping',
      direction: 'up-up-left',
    },
    {
      speaker: 'Jack',
      color: '#FFF',
      content: 'Because it made you smile.',
      direction: 'up-up-left',
    },
    {
      speaker: 'Ada',
      color: '#FFF',
      content: 'You do have a talent for that.',
      direction: 'up-up-left',
    },
  ],
  walkers: [
    {
      name: 'Ada',
      x: -4,
      victoryX: 90,
      asset: 'images.sam_float',
      range: [-6, PINF],
      bobSpeed: 0.918218,
      walkers: {
        name: 'Jack',
        x: -6,
        backflip: [72, 76],
        asset: 'images.jack_float',
      },
    },
  ],
  sprites: [
    {
      asset: 'images.grass_2',
      flipX: true,
      size: 1.4,
      x: -6,
      y: 0,
      offset: [0, 0.5],
      anchored: true,
    },
    {
      asset: 'images.cactus',
      flipX: true,
      size: 1.4,
      x: -5,
      y: 0,
      offset: [0, 0.5],
      anchored: true,
    },
    {
      asset: 'images.grass_2',
      flipX: true,
      drawOrder: LAYERS.foreSprites,
      size: 1,
      x: -4.7,
      y: 0,
      offset: [0, 0],
      anchored: true,
    },
    {
      asset: 'images.grass_2',
      flipX: true,
      drawOrder: LAYERS.foreSprites,
      size: 1.5,
      x: -4.3,
      y: 0,
      offset: [0, 0],
      anchored: true,
    },
    {
      asset: 'images.grass_2',
      flipX: true,
      drawOrder: LAYERS.foreSprites,
      size: 1.5,
      x: 5.3,
      y: 0,
      offset: [0, 0],
      anchored: true,
    },
    {
      asset: 'images.grass_2',
      flipX: true,
      drawOrder: LAYERS.foreSprites,
      size: 1.5,
      x: 5,
      y: 0,
      offset: [0, 0],
      anchored: true,
    },
    {
      asset: 'images.grass_2',
      flipX: true,
      drawOrder: LAYERS.foreSprites,
      size: 1.5,
      x: 5.4,
      y: 0,
      offset: [0, 0],
      anchored: true,
    },
    {
      asset: 'images.grass_2',
      flipX: true,
      drawOrder: LAYERS.foreSprites,
      size: 1.5,
      x: 6,
      y: 0,
      offset: [0, 0],
      anchored: true,
    },
    {
      asset: 'images.tumbleweed',
      flipX: true,
      drawOrder: LAYERS.foreSprites,
      size: 1.1,
      x: 1,
      y: 0,
      offset: [0, 1],
      velocity: [1.4, 0],
      angularVelocity: 0,
      anchored: true,
      sloped: true,
    },
    {
      asset: 'images.cactus',
      flipX: true,
      drawOrder: LAYERS.foreSprites,
      size: 1.7,
      x: 7.2,
      y: 0,
      offset: [0, 0, 5],
      anchored: true,
    },
    {
      asset: 'images.lsys_red_joshua_tree',
      flipX: true,
      drawOrder: LAYERS.foreSprites,
      size: 3,
      x: 14,
      y: 0,
      offset: [0, 0, 5],
      anchored: true,
    },
    {
      asset: 'images.tumbleweed',
      flipX: true,
      size: 1,
      x: -65.4,
      y: 0,
      offset: [0, 1],
      velocity: [1.3, 0],
      angularVelocity: 0,
      anchored: true,
      sloped: true,
    },
    {
      asset: 'images.cactus',
      flipX: true,
      size: 1.4,
      x: 19.5,
      y: 0,
      offset: [0, 0.5],
      anchored: true,
    },
    {
      asset: 'images.desert_tree',
      flipX: true,
      size: 2.4,
      x: 16,
      y: 0,
      offset: [0, 1],
      anchored: true,
    },
    {
      asset: 'images.grass_2',
      flipX: true,
      drawOrder: LAYERS.foreSprites,
      size: 1.4,
      x: 18,
      y: 0,
      offset: [0, 0.5],
      anchored: true,
    },
    {
      asset: 'images.grass_2',
      flipX: true,
      drawOrder: LAYERS.foreSprites,
      size: 1.4,
      x: 20.5,
      y: 0,
      offset: [0, 0.5],
      anchored: true,
    },
    {
      asset: 'images.cactus',
      flipX: true,
      size: 1.4,
      x: 25,
      y: 0,
      offset: [0, 0.5],
      anchored: true,
    },
    {
      asset: 'images.grass_2',
      flipX: true,
      drawOrder: LAYERS.foreSprites,
      size: 2.4,
      x: 24,
      y: 0,
      offset: [0, 0.5],
      anchored: true,
    },
    {
      asset: 'images.grass_2',
      flipX: true,
      size: 2.4,
      drawOrder: LAYERS.foreSprites,
      x: 26,
      y: 0,
      offset: [0, 0.5],
      anchored: true,
    },
    {
      asset: 'images.cactus',
      flipX: false,
      size: 1.4,
      x: 33,
      y: 0,
      offset: [0, 0.5],
      anchored: true,
    },
    {
      asset: 'images.cactus',
      draworder: LAYERS.foreSprites,
      flipX: true,
      size: 0.6,
      x: 29,
      y: 0,
      offset: [0, 0.5],
      anchored: true,
    },
    {
      asset: 'images.tumbleweed',
      drawOrder: LAYERS.foreSprites,
      flipX: true,
      size: 1.2,
      x: -50,
      y: 0,
      offset: [0, 1],
      velocity: [1.5, 0],
      angularVelocity: 0,
      anchored: true,
      sloped: true,
    },
    {
      asset: 'images.blooming_joshua_tree',
      drawOrder: LAYERS.foreSprites,
      flipX: false,
      size: 2.4,
      x: 38.6,
      y: 0,
      offset: [0, 0.77],
      anchored: true,
    },
    {
      asset: 'images.lsys_red_joshua_tree',
      flipX: true,
      size: 3,
      x: 39,
      y: 0,
      offset: [0, 0, 5],
      anchored: true,
    },
    {
      asset: 'images.tumbleweed',
      drawOrder: LAYERS.foreSprites,
      flipX: true,
      size: 1.4,
      x: 45,
      y: 0,
      offset: [0, 0.5],
      anchored: true,
    },
    {
      asset: 'images.grass_2',
      drawOrder: LAYERS.foreSprites,
      flipX: true,
      size: 1.4,
      x: 40,
      y: 0,
      offset: [0, 0.5],
      anchored: true,
    },
    {
      asset: 'images.grass_2',
      drawOrder: LAYERS.foreSprites,
      flipX: true,
      size: 1.4,
      x: 47,
      y: 0,
      offset: [0, 0.5],
      anchored: true,
    },
    {
      asset: 'images.desert_tree',
      drawOrder: LAYERS.foreSprites,
      flipX: true,
      size: 1.4,
      x: 47,
      y: 0,
      offset: [0, 0.1],
      anchored: true,
    },
    {
      asset: 'images.grass_2',
      drawOrder: LAYERS.foreSprites,
      flipX: true,
      size: 1.4,
      x: 48,
      y: 0,
      offset: [0, 0.5],
      anchored: true,
    },
    {
      asset: 'images.grass_2',
      flipX: true,
      size: 1.4,
      x: 49,
      y: 0,
      offset: [0, 0.5],
      anchored: true,
    },
    {
      asset: 'images.lsys_red_joshua_tree',
      flipX: true,
      drawOrder: LAYERS.foreSprites,
      size: 3,
      x: 49,
      y: 0,
      offset: [0, 0, 5],
      anchored: true,
    },
    {
      asset: 'images.grass_2',
      flipX: true,
      size: 1.4,
      x: 50,
      y: 0,
      offset: [0, 0.5],
      anchored: true,
    },
    {
      asset: 'images.cactus',
      flipX: false,
      size: 1.4,
      x: 53,
      y: 0,
      offset: [0, 0.5],
      anchored: true,
    },
    {
      asset: 'images.blooming_joshua_tree',
      drawOrder: LAYERS.foreSprites,
      flipX: true,
      size: 2.4,
      x: 55.2,
      y: 0,
      offset: [0, 0.77],
      anchored: true,
    },
    {
      asset: 'images.cactus',
      flipX: false,
      size: 1.4,
      x: 53,
      y: 0,
      offset: [0, 0.5],
      anchored: true,
    },
    {
      asset: 'images.lsys_red_joshua_tree',
      flipX: true,
      drawOrder: LAYERS.foreSprites,
      size: 3,
      x: 61.3,
      y: 0,
      offset: [0, 0, 5],
      anchored: true,
    },
    {
      asset: 'images.lsys_red_joshua_tree',
      flipX: true,
      drawOrder: LAYERS.foreSprites,
      size: 3,
      x: 61.3,
      y: 0,
      offset: [0, 0, 5],
      anchored: true,
    },
    {
      asset: 'images.blooming_joshua_tree',
      drawOrder: LAYERS.foreSprites,
      flipX: true,
      size: 2.4,
      x: 72,
      y: 0,
      offset: [0, 0.77],
      anchored: true,
    },
    {
      asset: 'images.desert_tree',
      drawOrder: LAYERS.foreSprites,
      flipX: true,
      size: 4.4,
      x: 70,
      y: 0,
      offset: [0, 0.1],
      anchored: true,
    },
    {
      asset: 'images.blooming_joshua_tree',
      drawOrder: LAYERS.foreSprites,
      flipX: true,
      size: 3.4,
      x: 85,
      y: 0,
      offset: [0, 0.77],
      anchored: true,
    },
    {
      asset: 'images.lsys_red_joshua_tree',
      flipX: true,
      size: 3,
      x: 84,
      y: 0,
      offset: [0, 0, 5],
      anchored: true,
    },
    {
      asset: 'images.blooming_joshua_tree',
      drawOrder: LAYERS.foreSprites,
      flipX: false,
      size: 4.4,
      x: 87,
      y: 0,
      offset: [0, 0.77],
      anchored: true,
    },
    {
      asset: 'images.blooming_joshua_tree',
      drawOrder: LAYERS.foreSprites,
      flipX: true,
      size: 3.4,
      x: 79,
      y: 0,
      offset: [0, 0.77],
      anchored: true,
    },
    {
      asset: 'images.lsys_red_joshua_tree',
      flipX: true,
      size: 3,
      x: 77.3,
      y: 0,
      offset: [0, 0, 5],
      anchored: true,
    },
    {
      asset: 'images.cactus',
      drawOrder: LAYERS.foreSprites,
      flipX: true,
      size: 1.4,
      x: 81,
      y: 0,
      offset: [0, 0.5],
      anchored: true,
    },
    {
      asset: 'images.desert_tree',
      drawOrder: LAYERS.foreSprites,
      flipX: true,
      size: 3.4,
      x: 82,
      y: 0,
      offset: [0, 0.77],
      anchored: true,
    },
    {
      asset: 'images.blooming_joshua_tree',
      drawOrder: LAYERS.foreSprites,
      flipX: false,
      size: 3.4,
      x: 84.3,
      y: 0,
      offset: [0, 0.77],
      anchored: true,
    },
    {
      asset: 'images.grass_2',
      drawOrder: LAYERS.foreSprites,
      flipX: true,
      size: 1.4,
      x: 84.3,
      y: 0,
      offset: [0, 0.77],
      anchored: true,
    },
    {
      asset: 'images.blooming_joshua_tree',
      drawOrder: LAYERS.foreSprites,
      flipX: true,
      size: 2.4,
      x: 88,
      y: 0,
      offset: [0, 0.0],
      anchored: true,
    },
    {
      asset: 'images.desert_tree',
      drawOrder: LAYERS.foreSprites,
      flipX: true,
      size: 3.4,
      x: 47,
      y: 0,
      offset: [0, 0.1],
      anchored: true,
    },
    {
      asset: 'images.desert_tree',
      drawOrder: LAYERS.foreSprites,
      flipX: true,
      size: 4,
      x: 80,
      y: 0,
      offset: [0, 1],
      anchored: true,
    },
    {
      asset: 'images.cactus',
      flipX: false,
      size: 1.4,
      x: 85,
      y: 0,
      offset: [0, 0.5],
      anchored: true,
    },
    {
      asset: 'images.grass_2',
      flipX: false,
      size: 2.4,
      x: 84,
      y: 0,
      offset: [0, 0.5],
      anchored: true,
    },
    {
      asset: 'images.grass_2',
      flipX: false,
      size: 2.4,
      x: 86,
      y: 0,
      offset: [0, 0.5],
      anchored: true,
    },
    {
      asset: 'images.desert_tree',
      flipX: false,
      size: 3.4,
      x: -3,
      y: 0,
      offset: [0, 1],
      anchored: true,
    },
    {
      asset: 'images.grass_2',
      drawOrder: LAYERS.foreSprites,
      flipX: true,
      size: 1.4,
      x: 3,
      y: 0,
      offset: [0, 0.0],
      anchored: true,
    },
    {
      asset: 'images.blooming_joshua_tree',
      flipX: false,
      drawOrder: LAYERS.foreSprites,
      size: 3.4,
      x: 3,
      y: 0,
      offset: [0, 0.77],
      anchored: true,
    },
    {
      asset: 'images.blooming_joshua_tree',
      drawOrder: LAYERS.foreSprites,
      flipX: true,
      size: 2.4,
      x: 17,
      y: 0,
      offset: [0, 0.77],
      anchored: true,
    },
    {
      asset: 'images.desert_tree',
      drawOrder: LAYERS.foreSprites,
      flipX: true,
      size: 3.4,
      x: 12.5,
      y: 0,
      offset: [0, 0.0],
      anchored: true,
    },
    {
      asset: 'images.grass_2',
      drawOrder: LAYERS.foreSprites,
      flipX: true,
      size: 1.4,
      x: 54.6,
      y: 0,
      offset: [0, 0.0],
      anchored: true,
    },
    {
      asset: 'images.grass_2',
      drawOrder: LAYERS.foreSprites,
      flipX: true,
      size: 1.4,
      x: 56.6,
      y: 0,
      offset: [0, 0.0],
      anchored: true,
    },
    {
      asset: 'images.cactus',
      drawOrder: LAYERS.foreSprites,
      flipX: true,
      size: 1.4,
      x: 62.9,
      y: 0,
      offset: [0, 0.5],
      anchored: true,
    },
    {
      asset: 'images.grass_2',
      drawOrder: LAYERS.foreSprites,
      flipX: true,
      size: 1.4,
      x: 54.6,
      y: 0,
      offset: [0, 0.0],
      anchored: true,
    },
    {
      asset: 'images.desert_tree',
      drawOrder: LAYERS.foreSprites,
      flipX: true,
      size: 3.4,
      x: 23.1,
      y: 0,
      offset: [0, 0.0],
      anchored: true,
    },
    {
      asset: 'images.blooming_joshua_tree',
      drawOrder: LAYERS.foreSprites,
      flipX: true,
      size: 3.4,
      x: 34.6,
      y: 0,
      offset: [0, 0.77],
      anchored: true,
    },
    {
      asset: 'images.grass_2',
      drawOrder: LAYERS.foreSprites,
      flipX: true,
      size: 1.4,
      x: 34.9,
      y: 0,
      offset: [0, 0.0],
      anchored: true,
    },
    {
      asset: 'images.desert_tree',
      drawOrder: LAYERS.foreSprites,
      flipX: true,
      size: 2.4,
      x: 42,
      y: 0,
      offset: [0, 0.0],
      anchored: true,
    },
    {
      asset: 'images.cactus',
      drawOrder: LAYERS.foreSprites,
      flipX: true,
      size: 1.4,
      x: 44.4,
      y: 0,
      offset: [0, 0.5],
      anchored: true,
    },
    {
      asset: 'images.blooming_joshua_tree',
      drawOrder: LAYERS.foreSprites,
      flipX: true,
      size: 3,
      x: 55,
      y: 0,
      offset: [0, 0.0],
      anchored: true,
    },
    {
      asset: 'images.blooming_joshua_tree',
      drawOrder: LAYERS.foreSprites,
      flipX: true,
      size: 2.4,
      x: 57,
      y: 0,
      offset: [0, 0.0],
      anchored: true,
    },
  ],
  backgroundMusic: {
    asset: 'sounds.music.desert.western_loop',
    volume: 1,
  },
}
