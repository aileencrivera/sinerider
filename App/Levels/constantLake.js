const CONSTANT_LAKE = {
  name: 'Constant Lake',
  nick: 'CONSTANT_LAKE',
  biome: 'westernSlopes',
  axesEnabled: false,
  runAsCutscene: true,
  x: 10,
  y: 10,
  requirements: ['SLOPE_SHALLOWER', 'SLOPE_LOWER'],
  defaultExpression:
    '\\frac{3}{1+e^{-\\frac{x+22}{2}}}-\\frac{5}{1+e^{-\\frac{x-2}{4}}}+\\frac{8}{1+e^{-\\frac{x-22}{5}}}+\\frac{-8}{1+\\frac{1}{e^{x-40}}}',
  directors: [
    {
      type: 'lerp',
      point0: [-18, 0],
      point1: [0, 0],
      state0: {
        position: [-20, 3.5],
        fov: 5,
      },
      state1: {
        position: [2, 8],
        fov: 10,
      },
    },
    {
      type: 'lerp',
      point0: [6, 0],
      point1: [30, 0],
      state0: {
        position: [2, 8],
        fov: 10,
      },
      state1: {
        position: [34, 12],
        fov: 12,
      },
    },
  ],
  texts: [
    {
      x: -20,
      y: -0.5,
      size: 0.6,
      align: 'left',
      // fill: '#fff',
      content: 'Click to move left/right',
    },
  ],
  goals: [],
  sledders: [],
  sky: {
    asset: 'images.western_slopes_background_no_sky',
    margin: 1,
  },
  bubble: {
    sky: {
      asset: 'images.western_slopes_background',
      margin: 1,
    },
  },
  backgroundMusic: {
    asset: 'sounds.music.constant_lake.base',
    volume: 0.2,
  },
  sounds: [
    {
      asset: 'sounds.music.constant_lake.pad_1_loopable',
      loop: true,
      volume: 0.3,
      domain: [-20, 0],
    },
    {
      asset: 'sounds.music.constant_lake.pad_2_loopable',
      domain: [0, 8],
      // fadeOut: 3000,
      loop: true,
      // duration: 33000,
    },
    {
      asset: 'sounds.music.constant_lake.pad_3_loopable',
      domain: [14, 18],
      // fadeOut: 3000,
      // duration: 33000,
      loop: true,
      volume: 1,
    },
    {
      asset: 'sounds.music.constant_lake.pad_swell_1',
      domain: [10, 12],
      // fadeOut: 3000,
      // duration: 20000,
      // loop: true,
      volume: 2,
    },
  ],
  dialogue: [
    {
      speaker: 'Ada',
      content: "We'll never win at this pace",
      direction: 'up-up-left',
      distance: 1.2,
      speech: {
        content: 'We should hurry.',
        direction: 'up',
        x: -0.5,
        y: 1.3,
      },
    },
    {
      speaker: 'Jack',
      content: "I'm just here for the views.",
      direction: 'up-up-left',
      speech: {
        speaker: 'Jack',
        content: "Winning isn't everything!",
        direction: 'up',
        x: -0.6,
        y: 1.3,
        distance: 1.2,
      },
    },
    {
      speaker: 'Jack',
      content: 'And the yous <3',
      direction: 'up-up-right',
      gap: 1,
      length: 2,
    },
    {
      speaker: 'Ada',
      content: 'Sweet but wrong.',
      direction: 'up-up-left',
      gap: 1,
      length: 2,
    },
    {
      speaker: 'Ada',
      content: 'The point of a race is to win.',
      direction: 'up-up-right',
      gap: 1,
      // length: 2,
    },
    {
      speaker: 'Jack',
      content: "I've always wanted to see the north rim.",
      direction: 'up-up-left',
      speech: {
        content: 'Eternal Canyon is coming up…',
        direction: 'up',
        x: -0.6,
        y: 1.3,
        distance: 1.2,
      },
    },
    {
      speaker: 'Ada',
      content: "That's not on the route, Jack.",
      direction: 'up-up-left',
      gap: 0,
    },
    {
      speaker: 'Jack',
      content: 'At a minimum.',
      direction: 'up-up-right',
      speech: {
        content: "Let's stop for the sunset.",
        direction: 'up',
        x: 0.6,
        y: 1.3,
        distance: 1,
      },
    },
    {
      speaker: 'Ada',
      color: '#fff',
      content: 'Very nice. I can see.',
      direction: 'up-up-left',
    },
    {
      speaker: 'Jack',
      color: '#fff',
      content: "It's not good to anger the sun, Ada.",
      direction: 'up-right',
      length: 4,
      gap: 1,
    },
    {
      speaker: 'Ada',
      color: '#fff',
      content: '…',
      direction: 'up-up-left',
      length: 2,
      gap: 1,
    },
    {
      speaker: 'Ada',
      color: '#fff',
      content: "…you're such a dork.",
      direction: 'up-up-left',
      gap: 0,
    },
    {
      speaker: 'Ada',
      color: '#fff',
      content: 'I do love you, though.',
      direction: 'up-up-left',
      gap: 5,
    },
  ],
  walkers: [
    {
      name: 'Ada',
      asset: 'images.sam_float',
      bobSpeed: 0.918218,
      x: -22,
      victoryX: 35,
      range: [-24, 37],
      walkers: {
        name: 'Jack',
        asset: 'images.benny_float',
        x: -24,
      },
    },
  ],
  sprites: [
    {
      asset: 'images.tree_1',
      flipX: false,
      drawOrder: LAYERS.foreSprites,
      size: 4.8,
      x: -8,
      y: 0,
      offset: [0, 0.9],
      anchored: true,
    },
    {
      asset: 'images.bush_2',
      flipX: false,
      size: 3.4,
      x: -7,
      y: 0,
      offset: [0, 0.9],
      anchored: true,
    },
    {
      asset: 'images.tree_3',
      flipX: true,
      size: 4.1,
      x: -4.2,
      y: 0,
      offset: [0, 0.9],
      anchored: true,
    },
    {
      asset: 'images.tree_2',
      flipX: true,
      size: 5.6,
      x: -1.6,
      y: 0,
      offset: [0, 0.9],
      anchored: true,
    },
    {
      asset: 'images.tree_3',
      flipX: true,
      drawOrder: LAYERS.foreSprites,
      size: 4.4,
      x: 3.7,
      y: 0,
      offset: [0, 0.9],
      anchored: true,
    },
    {
      asset: 'images.bush_1',
      flipX: false,
      size: 2.4,
      x: 4.8,
      y: 0,
      offset: [0, 0.7],
      anchored: true,
    },
    {
      asset: 'images.tree_2',
      flipX: false,
      size: 5,
      x: 6.3,
      y: 0,
      offset: [0, 0.9],
      anchored: true,
    },
    {
      asset: 'images.tree_1',
      flipX: true,
      drawOrder: LAYERS.foreSprites,
      size: 5,
      x: 7.4,
      y: 0,
      offset: [0, 0.9],
      anchored: true,
    },
    {
      asset: 'images.bush_2',
      flipX: true,
      drawOrder: LAYERS.foreSprites,
      size: 2.8,
      x: 11,
      y: 0,
      offset: [0, 0.9],
      anchored: true,
    },
    {
      asset: 'images.tree_2',
      flipX: true,
      size: 5.4,
      x: 13.2,
      y: 0,
      offset: [0, 0.9],
      anchored: true,
    },
    {
      asset: 'images.tree_1',
      flipX: false,
      drawOrder: LAYERS.foreSprites,
      size: 4.3,
      x: 15,
      y: 0,
      offset: [0, 0.9],
      anchored: true,
    },
    {
      asset: 'images.rock_2',
      flipX: true,
      drawOrder: LAYERS.foreSprites,
      size: 3,
      x: -3,
      offset: [0, 0.6],
      anchored: true,
    },
    {
      asset: 'images.rock_3',
      flipX: false,
      drawOrder: LAYERS.backSprites,
      size: 3,
      x: 9.1,
      offset: [0, 0.6],
      anchored: true,
    },
    {
      asset: 'images.fox',
      flipX: false,
      drawOrder: LAYERS.backSprites,
      size: 1,
      x: 9.1,
      offset: [0, 2.8],
      anchored: true,
    },
    {
      asset: 'images.tree_1',
      flipX: false,
      drawOrder: LAYERS.backSprites,
      size: 7.3,
      x: -24,
      offset: [0, 1],
      anchored: true,
    },
    {
      asset: 'images.bush_2',
      flipX: false,
      size: 1.4,
      x: -22.7,
      y: 0,
      offset: [0, 0.7],
      anchored: true,
    },
    {
      asset: 'images.bush_1',
      flipX: false,
      size: 3.4,
      x: -21,
      y: 0,
      offset: [0, 0.7],
      anchored: true,
    },
    {
      asset: 'images.rock_2',
      flipX: false,
      drawOrder: LAYERS.backSprites,
      size: 2.3,
      x: -24,
      offset: [0, 0.7],
      anchored: true,
    },
    {
      asset: 'images.tree_1',
      flipX: false,
      drawOrder: LAYERS.backSprites,
      size: 4.3,
      x: -22,
      offset: [0, 0.9],
      anchored: true,
    },
    {
      asset: 'images.rock_3',
      flipX: false,
      drawOrder: LAYERS.backSprites,
      size: 1.3,
      x: -21,
      offset: [0, 0.7],
      anchored: true,
    },
    {
      asset: 'images.tree_2',
      flipX: false,
      drawOrder: LAYERS.backSprites,
      size: 6.3,
      x: -13,
      offset: [0, 0.9],
      anchored: true,
    },
    {
      asset: 'images.rock_2',
      flipX: false,
      drawOrder: LAYERS.backSprites,
      size: 2.3,
      x: -14,
      offset: [0, 0.7],
      anchored: true,
    },
    {
      asset: 'images.rock_3',
      flipX: false,
      drawOrder: LAYERS.backSprites,
      size: 2.3,
      x: -13,
      offset: [0, 0.7],
      anchored: true,
    },
    {
      asset: 'images.bush_1',
      flipX: false,
      size: 2.4,
      x: 21.7,
      y: 0,
      offset: [0, 0.7],
      anchored: true,
    },
    {
      asset: 'images.rock_2',
      flipX: false,
      size: 3.4,
      x: 22,
      y: 0,
      offset: [0, 0.7],
      anchored: true,
    },
    {
      asset: 'images.tree_2',
      flipX: false,
      size: 4.3,
      x: 28,
      y: 0,
      offset: [0, 0.9],
      anchored: true,
    },
    {
      asset: 'images.bush_1',
      flipX: false,
      size: 2.4,
      x: 28.5,
      y: 0,
      offset: [0, 0.7],
      anchored: true,
    },
    {
      asset: 'images.tree_3',
      flipX: false,
      size: 4.3,
      x: 34,
      y: 0,
      offset: [0, 0.9],
      anchored: true,
    },
    {
      asset: 'images.bush_1',
      flipX: false,
      size: 4.4,
      x: 35,
      y: 0,
      offset: [0, 0.7],
      anchored: true,
    },
  ],
  water: {
    x: 38,
    y: 17,
    size: 30,
  },
}
