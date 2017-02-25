/**
 * Created by ZhouTing on 2017/2/17.
 */
var myApp = angular.module('App', ['ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/message");
    $stateProvider
        .state('menu', {
            url: "/menu",
            templateUrl: "html/menu.html"
        })

        .state('message',{
            url:"/message",
            templateUrl:"html/message.html",
            controller:'message'
        })

        .state('address',{
            url:"/address",
            templateUrl:"html/address.html"
        })

        .state('find',{
            url:"/find",
            templateUrl:"html/find.html"
        })

        .state('my',{
            url:"/my",
            templateUrl:"html/my.html"
        })
}]);

myApp.controller('message',['$scope', '$http', function($scope, $http){
    $scope.msg="1111";
}]);

myApp.controller('controllerAddress',['$scope', '$http', function($scope, $http){

}]);

myApp.controller('controllerFind',['$scope', '$http', function($scope, $http){

}]);

myApp.controller('controllerMy',['$scope', '$http', function($scope, $http){

}]);