const DESERT = {
  name: 'Desert',
  nick: 'DESERT',
  colors: Colors.biomes.arches,
  axesEnabled: false,
  x: 5,
  y: -20,
  camera: {
    x: 2,
    y: -2,
    fov: 7,
  },
  requirements: ['SIN_SCALE_X_Y'],
  defaultExpression: '\\frac{1}{3}\\sin\\left(\\frac{x}{10}\\right)+\\frac{1}{4}\\sin\\left(\\frac{x}{20}+\\frac{\\pi}{3}\\right)+\\frac{1}{2}\\sin\\left(\\frac{x}{53}+3\\frac{\\pi}{6}\\right)',
  directors: [{
    type: 'lerp',
    point0: [-1, 0],
    point1: [10, 0],
    state0: {
      position: [-2, 3.5],
      fov: 5,
    },
    state1: {
      position: [25, 10],
      fov: 12,
    },
  }],
  goals: [],
  sky: {
    asset: 'images.sinusoidaldesertbiome_2',
    margin: 1
  },
  walkers: [{
    x: -4,
    victoryX: 42,
    asset: 'images.benny_float',
    range: [NINF, 42],
    backflip: [32, 36],
    
    speech: [{
      color: "#FFF",
      speakerx: -4,
      content: 'Scary. Hard.',
      direction: 'up-up-left',
      domain: [-1, 1],
      distance: [1.5],
      color:'#FFFFFF'
    },
    {
      color: "#FFF",
      speakerx: -4,
      content: 'I still had fun.',
      direction: 'up-up-left',
      x: -1,
      y: 1.18,
      domain: [5, 7],
      distance: [1.1], 
      color:'#FFFFFF'
    },
    {
      color: "#FFF",
      speakerx: -4,
      content: 'I did a backflip!',
      direction: 'up-left',
      domain: [5, 7],
      distance: [1.5], 
      color:'#FFFFFF'
    },
    {
      color: "#FFF",
      speakerx: -4,
      content: 'Yes I did!',
      direction: 'up-up-left',
      domain: [11, 13],
      distance: [1.5], 
      color:'#FFFFFF'
    },
    {
      color: "#FFF",
      speakerx: -4,
      content: 'Why you gotta be so negative?',
      direction: 'up-up-left',
      domain: [17, 18],
      distance: [1.5], 
      color:'#FFFFFF'
    },
    {
      color: "#FFF",
      speakerx: -4,
      content: 'Are you mad at me?',
      direction: 'up-up-left',
      domain: [23, 24],
      distance: [1.5], 
      color:'#FFFFFF'
    },
    {
      color: "#FFF",
      speakerx: -4,
      content: 'You\'re right, I\'m sorry.',
      direction: 'up-up-left',
      x: -0.5,
      y: 1.2,
      domain: [30, 32],
      distance: [1.2], 
      color:'#FFFFFF'
    },
    {
      color: "#FFF",
      speakerx: -4,
      content: 'Let me make it up to you. Watch this',
      direction: 'up-up-left',
      domain: [30, 32],
      distance: [1.3], 
      color:'#FFFFFF'
    },
    {
      color: "#FFF",
      speakerx: -4,
      content: 'Because it made you smile.',
      direction: 'up-up-left',
      domain: [37, 38],
      distance: [1.5], 
      color:'#FFFFFF'
    },

    ],
    walkers: {
      x: -6,
      asset: 'images.sam_float',
      bobSpeed: 0.918218,
      speech: [{
        color: "#FFF",
        speakerx: -0.4,
        content: 'How was the canyon?',
        direction: 'up-up-left',
        domain: [-4,-2],
        distance: [1.5],
        color:'#FFFFFF'
      },
      {
        color: "#FFF",
        speakerx: -0.4,
        content: 'Well, that\'s why it\'s not on the route.',
        direction: 'up-up-left',
        domain: [2, 4],
        distance: [1.5],
        color:'#FFFFFF'
      },
      {
       speakerx: -0.4,
       content: 'No you didn\'t.',
       direction: 'up-up-left',
       domain: [8, 10],
       distance: [1.5],
       color:'#FFFFFF'
      },
      {
        color: "#FFF",
        speakerx: -0.4,
        content: 'We\'re ghosts, Jack. We float.',
        direction: 'up-up-left',
        x: -1,
        y: 1.18,
        domain: [14, 16],
        distance: [1.3],
        color:'#FFFFFF'
      },
      {
        color: "#FFF",
        speakerx: -0.4,
        content: 'Spinning in place is not a backflip.',
        direction: 'up-left',
        domain: [14, 16],
        distance: [1.5],
        color:'#FFFFFF'
      },
      {
        color: "#FFF",
        speakerx: -0.4,
        content: 'The truth isn\'t negative!',
        direction: 'up-up-left',
        domain: [19, 21],
        x: -1,
        y: 1.2,
        distance: [1.3],
        color:'#FFFFFF'
      },
      {
        color: "#FFF",
        speakerx: -0.4,
        content: 'It\'s just the truth!!',
        direction: 'up-left',
        domain: [19, 21],
        distance: [1.5],
        color:'#FFFFFF'
      },
      {
        color: "#FFF",
        speakerx: -0.4,
        content: 'A little, yeah!',
        direction: 'up-up-left',
        x: -1,
        y: 1.19,
        domain: [26, 28],
        distance: [1.1],
        color:'#FFFFFF'
      },
      {
        color: "#FFF",
        speakerx: -0.4,
        content: 'Your "shortcut" cost us time',
        direction: 'up-left',
        domain: [26, 28],
        distance: [1.5],
        color:'#FFFFFF'
      },
      {
        color: "#FFF",
        speakerx: -0.4,
        content: '...how is this helping',
        direction: 'up-up-left',
        domain: [35, 36],
        distance: [1.5],
        color:'#FFFFFF'
      },
      {
        color: "#FFF",
        speakerx: -0.4,
        content: 'You do have a talent for that.',
        direction: 'up-up-left',
        domain: [39, 40],
        distance: [1.5],
        color:'#FFFFFF'
      },
      ],
    },
  }],
  sprites: [],
  sounds: [],
}