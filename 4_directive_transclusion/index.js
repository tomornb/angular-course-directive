var app = angular.module("myApp", []);
app.directive("container", function() {
    return {
        restrict: "E",
        transclude: true,
        template: '<div class="panel" ng-transclude>' +
        'default message</div>'
    };
});
