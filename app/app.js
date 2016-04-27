var sampleApp = angular.module('sampleApp', []);

sampleApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/ShowOrder/:orderId', {
		templateUrl: 'templates/show_order.html',
		controller: 'ShowOrderController'
      });

  	// $locationProvider.html5Mode({
  	// 	enabled: true,
  	// 	requireBase: false
  	// });
}]);


sampleApp.controller('ShowOrderController', function($scope, $routeParams) {

	
	$scope.order_id = $routeParams.orderId;

});
