
var app = angular.module("myApp", []);

app.directive("superhero", function() {
    return {
        restrict: "E",
        scope: {},
        link: function(scope, element) {
          element.bind("mouseenter", function() {
            console.log(scope.abilities);
          })
        },
        controller: function($scope) {
          $scope.abilities = [];

          this.addStrength = function() {
            $scope.abilities.push("strength");
          };

          this.addSpeed = function() {
            $scope.abilities.push("speed");
          };

          this.addFlight = function() {
            $scope.abilities.push("flight");
          };
        }
  };
});

app.directive("strength", function() {
    return {
        restrict: "A",
        require: "superhero",
        link: function(scope, element, attrs, superheroCtrl) {
            superheroCtrl.addStrength();
        }
    };
});

app.directive("speed", function() {
    return {
        restrict: "A",
        require: "superhero",
        link: function(scope, element, attrs, superheroCtrl) {
            superheroCtrl.addSpeed();
        }
    };
});

app.directive("flight", function() {
    return {
        restrict: "A",
        require: "superhero",
        link: function(scope, element, attrs, superheroCtrl) {
            superheroCtrl.addFlight();
        }
    };
});
