angular.module("myApp", ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl : 'home.html',
      controller : 'mainCtrl'
    })

    .when('/newmeal', {
      templateUrl : 'newmeal.html',
      controller : 'mainCtrl'
    })

    .when('/myearnings', {
      templateUrl : 'myearnings.html',
      controller : 'mainCtrl'
    })

    .otherwise('/');
  }])
  .controller("mainCtrl", function($scope, $rootScope) {
    console.log("hello");

    $scope.mealDetail = {};

    $scope.mealPrice = 0;
    $scope.taxRate = 0;
    $scope.tipPer = 0;


    $scope.submitForm = function() {
      $scope.mealDetail.base = $scope.mealPrice;
      $scope.mealDetail.tax = ($scope.taxRate / 100).toFixed(2);
      $scope.mealDetail.tipPercent = ($scope.tipPer / 100).toFixed(2);
      console.log($scope.mealDetail);
      $scope.taxTotal();
      $scope.mealCount++;
    };

    $scope.taxTotal = function() {
      var total = $scope.mealDetail.base * $scope.mealDetail.tax + $scope.mealDetail.base;
      $scope.tipAndTotal(total);
    };

    $scope.tipAndTotal = function(total) {
      $scope.tip = total * $scope.mealDetail.tipPercent;
      $scope.total = $scope.tip + total;
      $scope.tipTotal+= $scope.tip;
      $scope.mealPrice = 0;
      $scope.taxRate = 0;
      $scope.tipPer = 0;

    };

    //earnings info
    $scope.tipTotal = 0;
    $scope.mealCount = 0;
    // $scope.averageTip = $scope.tipTotal/$scope.mealCount;

  });
