angular.module('resumeProjectApp')
  .factory('PlanetsInfo', function () {
    return {
      'work-experiencitas': {
        name: 'Work Experiencitas',
        percentage: 35,
        template: 'work-experiencitas-modal'
      },
      'educatia': {
        name: 'Educatia',
        percentage: 25,
        template: 'educatia-modal'
      },
      'tecnicus-knowledge': {
        name: 'Tecnicus Knowledge',
        percentage: 20,
        template: 'tecnicus-knowledge-modal'
      },
      'languagia': {
        name: 'Languagia',
        percentage: 6,
        template: 'languagia-modal'
      },
      'projectus': {
        name: 'Projectus',
        percentage: 10,
        template: 'projectus-modal'
      },
      'hobbiens': {
        name: 'Hobbiens',
        percentage: 3,
        template: 'hobbiens-modal'
      },
      'thanks': {
        name: 'Thanks',
        percentage: 0.1,
        template: 'thanks-modal'
      }
    }
  })