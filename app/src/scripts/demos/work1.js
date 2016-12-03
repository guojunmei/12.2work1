var myApp=angular.module("myApp",[]);

myApp.controller("work1",["$scope",function($scope){
	var infor=[
		{
			FirstName:"FANG",
			LastName:"vane",
			Gender:"Male",
			Salary:"12,333,50",
			Salary:"12,333,5",
			Birthday:"2007-07-11"
		},
		{
			FirstName:"AAM",
			LastName:"hot",
			Gender:"Male",
			Salary:"66,333,50",
			Salary:"66,333,5",
			Birthday:"2007-08-11"
		},
		{
			FirstName:"SARA",
			LastName:"rose",
			Gender:"Female",
			Salary:"12,333,40",
			Salary:"12,333,4",
			Birthday:"2007-06-11"
		},
		{
			FirstName:"MARK",
			LastName:"bear",
			Gender:"Male",
			Salary:"11,333,50",
			Salary:"11,333,5",
			Birthday:"2007-03-11"
		}
	]
	$scope.infor=infor;
	

	//模糊匹配
	$scope.con1="";
	$scope.con2="";
	$scope.search=function(val){
		/*console.log(val)*/
		if($scope.con1!=""){
			if(val.FirstName.toLowerCase().indexOf($scope.con1.toLowerCase())!==-1){
				return true
			}else{
				return false
			}
		}else{
			return true;
		};	
	}

	$scope.search2=function(vals){
		/*console.log(val)*/
		if($scope.con2!=""){
			if(vals.LastName.toLowerCase().indexOf($scope.con2.toLowerCase())!==-1){
				return true
			}else{
				return false
			}
		}else{
			return true;
		};	
	}

//隐藏与显示
//$scope.isshow=false;

//点击效果排序
	$scope.toggle=function(event){
		$scope.value=event;
	}
//点击显示隐藏
	$("span").hide();
	$("b").hide();
	$(".last").show();
	$("th").on("click",function(){
		$(this).find("span").show();
		$(this).find("b").hide();
		$(this).siblings().find("span").hide();
		$(this).siblings().find("b").hide();
	})

	$("span").on("click",function(){
		$(this).hide();
		$(this).siblings().show();
	})


}])