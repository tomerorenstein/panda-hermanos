/**
 * Created by Tomer on 13-Nov-16.
 */
/**
 * Created by Tomer on 12-Nov-16.
 */

angular.module( 'panda.home', [
    'ui.router',
    'panda.services.registration'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
    .config(function config( $stateProvider ) {
        $stateProvider.state( 'home', {
            url: '/home',
            views: {
                "main": {
                    controller: 'HomeCtrl',
                    templateUrl: 'home/home.tpl.html'
                }
            },
            data:{ pageTitle: 'Home' }
        });
    })

    /**
     * And of course we define a controller for our route.
     */
    .controller( 'HomeCtrl', function HomeController( $location, $scope, $http, registrationService ) {
        $scope.name = registrationService.currentUserInfo.name;
    })

;

