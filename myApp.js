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

    $rootScope.mealDetail = {};


    $scope.submitForm = function() {
      $scope.mealDetail.base = $scope.mealPrice;
      $scope.mealDetail.tax = ($scope.taxRate / 100).toFixed(2);
      $scope.mealDetail.tipPercent = ($scope.tipPer / 100).toFixed(2);

      $rootScope.mealDetail.base = $scope.mealPrice;
      $rootScope.mealDetail.tax = ($scope.taxRate / 100).toFixed(2);
      $rootScope.mealDetail.tipPercent = ($scope.tipPer / 100).toFixed(2);

      console.log($rootScope.mealDetail);

      $scope.taxTotal();
      $rootScope.mealCount++;
      // $scope.mealCount++;

      $rootScope.mealDetail.base = $scope.mealPrice;

    };

    $scope.taxTotal = function() {
      var total = $scope.mealDetail.base * $scope.mealDetail.tax + $scope.mealDetail.base;
      $scope.tipAndTotal(total);

      $rootScope.taxPlusBase = total;
    };

    $scope.tipAndTotal = function(total) {
      $scope.tip = total * $scope.mealDetail.tipPercent;
      $scope.total = $scope.tip + total;
      $scope.tipTotal+= $scope.tip;
      $scope.mealPrice = 0;
      $scope.taxRate = 0;
      $scope.tipPer = 0;

      $rootScope.tip = total * $scope.mealDetail.tipPercent;
      $rootScope.total = $scope.tip + total;
      $rootScope.tipTotal+= $rootScope.tip;

    };

    //earnings info
    $scope.tipTotal = 0;
    $scope.mealCount = 0;

    $rootScope.tipTotal = 0;
    $rootScope.mealCount = 0;

    // $rootScope.averageTip = $rootScope.tipTotal/$rootScope.mealCount;

  });
