angular.module('resumeProjectApp')
  .factory('RangesInfo', function () {
    return {
      'level_1': {
        name: 'Amateur Explorer',
        min: 0,
        max: 15,
        next: 'level_2',
        img_sm: 'images/medal0-small.png',
        img: 'images/medal0.png'
      },
      'level_2': {
        name: 'Ambitious Explorer',
        min: 16,
        max: 30,
        next: 'level_3',
        img_sm: 'images/medal1-small.png',
        img: 'images/medal1.png',
        description: 'Sweet! When you started this mission you weren\'t sure what to expect nor you didn\'t know if you were even going to find something. Now you just found MUD!, is not much but your guts tell you there might actually be something valuable out there. Is hard to control your equipment and you miss your house but your ambition can take you far!.'

      },
      'level_3': {
        name: 'Freelance Astronaut',
        min: 31,
        max: 60,
        next: 'level_4',
        img_sm: 'images/medal2-small.png',
        img: 'images/medal2.png',
        description: 'You found PLANTS!. That is amazing. They will give you all the oxygen you need while you are in space, no need to go back to Earth to recharge your oxygen tank anymore. You are learning how other species live and interact with them so they teach you how to survive in space. You are not a weird specimen for them anymore, you can be one of them. Keep it up!'
      },
      'level_4': {
        name: 'Space Hunter',
        min: 61,
        max: 96,
        next: 'level_5',
        img_sm: 'images/medal3-small.png',
        img: 'images/medal3.png',
        description: 'Your equipment is not a problem anymore, you found FIRE!. Fire helps you to keep you warm so you don\'t need a heavy space suit to survive the crazy low temperatures. Now you can breath and move freely, you are fast and smart. Your adaptation skills are making your spaceship pretty useless, you can almost survive by yourself without it.'
      },
      'level_5': {
        name: 'Elite Discoverer',
        min: 97,
        max: 99.9,
        next: 'level_6',
        img_sm: 'images/medal4-small.png',
        img: 'images/medal4.png',
        description: 'Just when you thought it couldn\'t get any better, you found a source of WATER!. You can totally survive by yourself now, you don\'t miss home anymore, water even tastes better here. The other creatures respect you, their higher ranges pay you for going on missions with them. You are important and they promoted you to be sitting with them now. Congratulations!!'
      },
      'level_6': {
        name: 'Galaxy Owner',
        min: 100,
        max: Infinity,
        img_sm: 'images/medal5-small.png',
        img: 'images/medal5.png',
        description: 'You found a source of GOLD! And it\'s all yours! Who would have known gold makes you rich in space too?. You are the Galaxy Owner now, you have your own people who love you and you control all space commercial routes, you have your own business going on there now, you are definitely not going to live just on Earth anymore, you can live wherever you want.',
        goodbye: 'Story aside, thank you very much for going through all of my mini project! I had fun doing it and I hope I could make your recruiting day a little bit different. You are awesome! Thank you!'
      }
    }
  })
