var app = angular.module("myApp", []);

app.directive("noIsolate", function() {
    return {
        restrict: "E",
        template: 'type : <input type="text" ng-model="data"> {{data}}'
    };
});

app.directive("isolate", function() {
    return {
        scope: {},
        restrict: "E",
        template: 'type : <input type="text" ng-model="data"> {{data}}'
    };
});
