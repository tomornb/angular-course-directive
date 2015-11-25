var app = angular.module("myApp", []);

app.directive("noIsolate", function() {
    return {
        restrict: "E",
        template: 'type : <input type="text" ng-model="data"> {{data}}'
    };
});

app.directive("isolate", function() {
    return {
        scope: {
        	click: "&",
        	m: "=",
        },
        restrict: "E",
        template: 'type : <input type="text" ng-model="data">' +
        '<button ng-click="click({y: data})">{{ info }} {{ m }}</button>',
		controller: function($scope){
			$scope.info = 'hello tomorn';
			//debugger;
		}        
    };
});

app.controller('AppCtrl', function($scope){
	$scope.register = function (data) {
		alert("Registered!" + data);
	}
	$scope.user = "a user"
})