angular.module("myApp", [])
  .controller("mainCtrl", function($scope){

    $scope.mealDetail = {};



    $scope.sumbitForm = function () {

      $scope.mealDetail.base = $scope.mealPrice;
      $scope.mealDetail.tax = $scope.taxRate;
      $scope.mealDetail.tipPercent= $scope.tipPer;
      console.log($scope.mealDetail);
      $scope.mealPrice = '';
      $scope.taxRate = '';
      $scope.tipPer = '';
    };

    $scope.taxTotal = function() {
      $scope.mealDetail.base * $scope.mealDetail.tax + $scope.mealDetail.base;

    };

    $scope.calcTip = function () {
      $scope.taxTotal() * $scope.tipPercent + $scope.taxTotal();
    };

    $scope.totalCharges = function () {
      $scope.mealDetail.base + calcTip();
    }


    //earnings info
    $scope.mealCount = 2;
    $scope.tipTotal = 2;
    // $scope.avg = $scope.tipTotal / $scope.mealCount;

  });
