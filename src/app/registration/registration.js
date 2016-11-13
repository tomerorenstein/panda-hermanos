/**
 * Created by Tomer on 12-Nov-16.
 */

angular.module( 'panda.registration', [
    'ui.router',
    'plusOne',
    'panda.services.registration'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
    .config(function config( $stateProvider ) {
        $stateProvider.state( 'registration', {
            url: '/',
            views: {
                "main": {
                    controller: 'RegCtrl',
                    templateUrl: 'registration/registration.tpl.html'
                }
            },
            data:{ pageTitle: 'Home' }
        });
    })

    /**
     * And of course we define a controller for our route.
     */
    .controller( 'RegCtrl', function HomeController( $location, $scope, registrationService, $http ) {

        $scope.company = "PANDAS HERMANOS";
        $scope.name = "";
        $scope.city = "";
        $scope.parkingRegion = "";
        $scope.email = "";
        $scope.username = "";
        $scope.password = "";
        $scope.error = "1";

            $scope.send = function () {
            registrationService.sendRegistration($scope.name, $scope.city, $scope.parkingRegion,
                                                 $scope.email, $scope.username, $scope.password)
                .success(function () {
                    $location.path('/someNewPath');
                }).error(function (err) {
                    if (err !== undefined && err.code == 310) {
                        $scope.error = "User already exists";
                    }
            });
        };
    })

;

