var app = angular.module('myApp', []);

app.controller('productCtrl', function($scope, $http) {
    // $http.get("data.json").then(function(res) {
          // $scope.products = res.data;
    // });		
	
	$scope.products = [
	{
		model : "iPhone 7s",
		year: "2016",
		price: "120$",
		producer: "Samsung",
		available: 10
	},
	{		
		model : "iPhone 7s",
		year: "2016",
		price: "120$",
		producer: "Samsung",
		available: 10
	},
	{		
		model : "iPhone 7s",
		year: "2016",
		price: "120$",
		producer: "Samsung",
		available: 10
	}
	];
	
	$scope.plushAvailable = function(index) {   	
    	$scope.products[index].available += 1;
    }
    $scope.minsAvailable = function(index) {
    	$scope.products[index].available -= 1;
    }
    $scope.deleteProduct = function(index) {
    	$scope.products.splice(index, 1);
    }  
	
	$scope.addProduct = function() {
    	$scope.products.push({
    		model : $scope.model,
    		year: $scope.year,
    		price: $scope.price,
    		producer: $scope.producer,
    		available: parseInt($scope.available)
    	})
    }
});
