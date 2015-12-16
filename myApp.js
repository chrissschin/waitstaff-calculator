angular.module("myApp", ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl : 'home.html',
      // controller : 'mainCtrl as home'
    })

    .when('/newmeal', {
      templateUrl : 'newmeal.html',
      controller : 'secondCtrl as scc'
    })

    .when('/myearnings', {
      templateUrl : 'myearnings.html',
      // controller : 'mainCtrl as earn'
    })

    .otherwise('/');
  }])
  .controller("mainCtrl", function() {
    console.log("hello");
    var self = this;

    this.tipTotal = 0;
    this.mealCount = 0;
    this.mealDetail = {};




    this.submitForm = function() {
      self.mealDetail.base = self.mealPrice;
      self.mealDetail.tax = (self.taxRate / 100).toFixed(2);
      self.mealDetail.tipPercent = (self.tipPer / 100).toFixed(2);



      console.log(self.mealDetail);

      self.taxTotal();

      self.mealCount++;



    };

    this.taxTotal = function() {
      var total = self.mealDetail.base * self.mealDetail.tax + self.mealDetail.base;
      self.tipAndTotal(total);

      self.taxPlusBase = total;
    };

    this.tipAndTotal = function(total) {
      self.tip = total * self.mealDetail.tipPercent;
      self.total = self.tip + total;
      self.tipTotal+= self.tip;
      self.mealPrice = 0;
      self.taxRate = 0;
      self.tipPer = 0;
      self.averageTip = self.tipTotal/(self.mealCount + 1);

    };





  })
  .controller("secondCtrl", function(){
    this.mealPrice = 50;

  });
