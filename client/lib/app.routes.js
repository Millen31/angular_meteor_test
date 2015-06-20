angular.module("AngularMeteorApp").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
      .state('parties', {
        templateUrl: 'client/app/images_test/images.ng.html',
        url: '/images_test',
        controller: 'imagesController'
      })

      $urlRouterProvider.otherwise("/images_test");
}]);