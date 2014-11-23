angular.module('resumeProjectApp')
  .factory('RangesInfo', function () {
    return {
      'level_1': {
        name: 'Amateur Explorer',
        min: 0,
        max: 15,
        next: 'level_2',
        img: 'images/medal0.png'
      },
      'level_2': {
        name: 'Ambitious Explorer',
        min: 16,
        max: 30,
        next: 'level_3',
        img: 'images/medal1.png'
      },
      'level_3': {
        name: 'Freelance Astronaut',
        min: 31,
        max: 60,
        next: 'level_4',
        img: 'images/medal2.png'
      },
      'level_4': {
        name: 'Space Hunter',
        min: 61,
        max: 96,
        next: 'level_5',
        img: 'images/medal3.png'
      },
      'level_5': {
        name: 'Elite Discoverer',
        min: 97,
        max: 99.9,
        next: 'level_6',
        img: 'images/medal4.png'
      },
      'level_6': {
        name: 'Galaxy Owner',
        min: 100,
        max: Infinity,
        img: 'images/medal5.png'
      }
    }
  })