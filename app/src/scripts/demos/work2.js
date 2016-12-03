var myApp = angular.module('myApp',[]);

	myApp.controller('myCtrl',['$scope',"$filter",function ($scope,$filter){
		
		var information = [
			{
				firstName:'Jack',
				lastName:'mea',
				birthday:'1992-10-20',
				age:'24',
				email:'Jack@163.com'
			},
			{
				firstName:'Lili',
				lastName:'wei',
				birthday:'1994-09-12',
				age:'22',
				email:'Lili@sohu.com'
			},
			{
				firstName:'Tom',
				lastName:'hack',
				birthday:'1995-11-10',
				age:'21',
				email:'Tom@163.com'
			},
			{
				firstName:'Bob',
				lastName:'yiyi',
				birthday:'1982-06-20',
				age:'34',
				email:'Bob@sohu.com'
			},
			{
				firstName:'luxi',
				lastName:'yilishabai',
				birthday:'1998-02-20',
				age:'18',
				email:'luxi@163.com'
			}
		]
		$scope.information = information;
		$scope.search = "";
		
		//排序
		$scope.tmp = $scope.information;
		console.log($scope.tmp );
		
			$scope.bool = false;
		$scope.order = function (arg){
			$scope.bool = !$scope.bool;
			$scope.tmp = $filter("orderBy")($scope.tmp,arg,$scope.bool);
		}
		
	}]);
