var ever = angular.module("myApp", ["ngRoute", "firebase"]);

//If error then sens back to log in page
ever.run(["$rootScope", "$location", function($rootScope, $location){
    $rootScope.$on("$routeChangeError", function(event, next, previous, error){
        if(error == "AUTH_REQUIRED") {
            $rootScope.message = "Sorry, you must log in to acces the page";
            $location.path("/login")
        }
    })
}])

ever.config(["$routeProvider", function($routeProvider){
    $routeProvider.
        when("/login", {
            templateUrl: "views/login.html",
            controller: "RegistrationController"
        }). 
        when("/register", {
            templateUrl: "views/register.html",
            controller: "RegistrationController"
        }).
        when("/success", {
            templateUrl: "views/success.html",
            controller: "SuccessController",
            //Can't wander into pages
            resolve : {
                currentAuth: function(Authentication){
                    return Authentication.requireAuth();
                }
            }
        }).
        otherwise({
            redirectTo: "/login"
        });
}])