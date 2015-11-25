_.mixin(s.exports());
var app = angular.module("myApp", []);

app.controller('AppCtrl', function($scope) {
  $scope.existingCreditCard = "1234123412341234";
  $scope.newCreditCard = undefined;
})

app.service('creditcardFormatter', function() {
  var NON_NUMERIC = /[^\d]+/g;
  var MAX_CHARS_INCLUDING_WHITESPACE = 16;

  var self = this;
  this.parse = function(number) {
    return number.replace(NON_NUMERIC, "").substring(0, MAX_CHARS_INCLUDING_WHITESPACE);
  };

  this.format = function(number){
    var numberOnly = self.parse(number),
        splits = _.chop(numberOnly, 4);

    return splits ? splits.join(" ") : "";
  };
});

app.directive('creditcard', ['creditcardFormatter', function(creditcardFormatter) {

  return {
    require: 'ngModel',
    link: function(scope, element, attrs, modelCtrl) {

      var toView = function (val) {
        return creditcardFormatter.format(val || '');
      };

      var toModel = function (val) {
        var parsedValue = creditcardFormatter.parse(val);
        var formattedValue = creditcardFormatter.format(val);

        if (val != formattedValue) {
          modelCtrl.$setViewValue(formattedValue);
          modelCtrl.$render();
        }

        return parsedValue;
      };

      modelCtrl.$formatters.unshift(toView);
      modelCtrl.$parsers.unshift(toModel);
    }
  };
}]);
