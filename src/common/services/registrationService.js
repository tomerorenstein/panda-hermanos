/**
 * Created by Tomer on 12-Nov-16.
 */
angular.module('panda.services.registration', [])
    .service('registrationService', function ($http) {

        var self = this;
        var rootUrl = 'http://10.0.0.10:3000';

        self.sendRegistration = function (name, city, parkingRegion, email, username, password) {

            return $http.post(rootUrl + '/register', {
                params: {
                    name: name,
                    city: city,
                    parkingRegion: parkingRegion,
                    email: email,
                    username: username,
                    password: password
                }
            });
        };
    });
