/**
 * Created by Tomer on 12-Nov-16.
 */
angular.module('panda.services.registration', ['panda.constants'])
    .service('registrationService', function ($http, config) {

        var self = this;
        self.currentUserInfo = undefined;

        self.sendRegistration = function (name, city, parkingRegion, email, username, password) {

            return $http.post(config.rootUrl + '/register', {
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

        self.setUser = function (name, city, parkingRegion, email, username, password) {
            self.currentUserInfo = {
                name: name,
                city: city,
                parkingRegion: parkingRegion,
                email: email,
                username: username,
                password: password
            };
        };
    });
