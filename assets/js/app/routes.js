angular
  .module('HotSwingers', ['ionic', 'angular-svg-round-progress'])
  .config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider.
    state('home', {
      url: '/',
      templateUrl: 'templates/splash.html',
      controller: 'SplashController',
    }).
    state('conversation', {
      url: '/conversation',
      templateUrl: 'templates/conversation.html',
      controller: 'ConversationController',
    }).
    state('fullprofile', {
      url: '/fullprofile',
      templateUrl: 'templates/fullprofile.html',
      controller: 'FullProfileController',
    }).
    state('side-menu', {
      url: '/side-menu',
      templateUrl: 'templates/side-menu.html',
      controller: 'SideMenuController',
    }).
    state('featured-profile', {
      url: '/featured-profile',
      templateUrl: 'templates/featured-profile.html',
      controller: 'FeaturedProfileController',
    }).
    state('help', {
      url: '/help',
      templateUrl: 'templates/help.html',
      controller: 'HelpController',
    }).
    state('terms', {
      url: '/terms',
      templateUrl: 'templates/terms.html',
      controller: 'TermsController',
    }).
    state('register-success', {
      url: '/register-success',
      templateUrl: 'templates/register-ok.html',
      controller: 'RegisterSuccessController',
    }).
    state('couple-videos', {
      url: '/couple-videos',
      templateUrl: 'templates/couple-videos.html',
      controller: 'CoupleVideosController',
    }).
    state('couple-album', {
      url: '/couple-album',
      templateUrl: 'templates/couple-album.html',
      controller: 'CoupleAlbumController',
    }).
    state('couple-data', {
      url: '/couple-data',
      templateUrl: 'templates/couple-data.html',
      controller: 'CoupleDataController',
    }).
    state('new-account', {
      url: '/new-account',
      templateUrl: 'templates/new-account.html',
      controller: 'NewAccountController',
    }).
    state('register', {
      url: '/register',
      templateUrl: 'templates/register.html',
      controller: 'RegisterController',
    }).
    state('get-hot-code', {
      url: '/get-hot-code',
      templateUrl: 'templates/get-hot-code.html',
      controller: 'GetHotcodeController',
    }).
    state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginController',
    }).
    state('forgot', {
      url: '/forgot',
      templateUrl: 'templates/forgot.html',
      controller: 'ForgotController',
    }).
    state('hot-code', {
      url: '/hot-code',
      templateUrl: 'templates/hot-code.html',
      controller: 'HotcodeController',
    });
    state('config', {
      url: '/config',
      templateUrl: 'templates/config.html',
      controller: 'ConfigController',
    });
    // $urlRouterProvider.otherwise('/');
}])
