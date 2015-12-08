angular.module("myApp", [])
  .controller("mainCtrl", function($scope){

    $scope.mealDetail = {};


    $scope.submitForm = function() {
      $scope.mealDetail.base = $scope.mealPrice;
      $scope.mealDetail.tax = ($scope.taxRate / 100).toFixed(2);
      $scope.mealDetail.tipPercent = ($scope.tipPer / 100).toFixed(2);
      console.log($scope.mealDetail);
      $scope.taxTotal();
      $scope.mealPrice = '';
      $scope.taxRate = '';
      $scope.tipPer = '';
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
    };


    //earnings info
    $scope.tipTotal = 0;
    $scope.mealCount = 0;
    // $scope.averageTip = $scope.tipTotal/$scope.mealCount;

  });
