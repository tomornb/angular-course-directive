var app = angular.module("myApp", []);
app.directive("container", function() {
    return {
        restrict: "E",
        template: '<div class="panel">default message</div>'
    };
});
