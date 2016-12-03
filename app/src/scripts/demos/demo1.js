//angular的模块，所有的anglur都是基于模块
//如果myApp后面没有中括号，表示获取模块，如果有中括号，即是中括号里面是模块注入
//引入公共js
/*var commonUtil=require("../common/common");
console.log(commonUtil)*/

//引入html

//定义一个myApp的模块   var myApp=可以省略
var myApp=angular.module("myApp",[]);  //controller是绑定到myApp模块上的

	//解决压缩问题的方法就是放到中括号里
	myApp.controller("demo1",["$scope",function($scope){
		var user=
		[
			{
				name:"lucy",
				age:18
			},
			{
				name:"lili",
				age:19
			}
		]
		$scope.user=user; //$scope是作用域   将user暴露给$scope，将这个对象暴露出去给user
		$scope.isshow=false;
		$scope.name="your name";
		$scope.counter=0;
		$scope.add=function(){
			this.counter++;
		}

		//将文本框的值放入数组里
		
		$scope.arr=[];
		$scope.tet=function(event){
			//console.log(event)
			//console.log(event.keyCode)
			if(event.keyCode=="13"){
				$scope.arr.unshift($scope.love);
				$scope.love=""	
			}
			
		}

	$scope.limit = 4;
    $scope.books = [
       {
           name:"JavaScript高级程序设计",publite:false,updated:1480574804538
       },
       {
           name:"Angular权威指南",publite:true,updated:1470574804525
       },
       {
           name:"Vue实战",publite:true,updated:1480374804538
       },
       {
           name:"Node全栈开发",publite:false,updated:1480271504538
       }
    ]

    $scope.price = 199.98;



		/*$scope.price=198;
		$scope.animals=[
			{
				name:"小猫",type:"cat",time:1480574804538
			},
			{
				name:"小狗",type:"dog",time:1490574804535
			},
			{
				name:"兔子",type:"rab",time:1460574804536
			}
		]*/

		$scope.tables=[
			{
				name:"小红",
				age:"18",
				tel:"15635399827"
			},
			{
				name:"小白",
				age:"17",
				tel:"15635389827"
			},
			{
				name:"小梅",
				age:"16",
				tel:"15666399827"
			},
			{
				name:"小强",
				age:"16",
				tel:"15635300827"
			}

		]

		//方法一
		//$scope.con="";

		//方法二
		$scope.con="";  //先让文本框的值为空
		$scope.search=function(vals){
			//console.log(vals)
			if($scope.con != ""){
				if(vals.name.toLowerCase().indexOf($scope.con.toLowerCase())!=-1 || vals.age.toLowerCase().indexOf($scope.con.toLowerCase())!=-1 || vals.tel.toLowerCase().indexOf($scope.con.toLowerCase())!=-1){
					return true;
				}else{
					return false;
				}

			}else{
				return true;
			}
		}


	}])
