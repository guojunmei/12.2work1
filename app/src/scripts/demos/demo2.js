var myApp=angular.module("myApp",[]);

myApp.controller("demo2",["$scope",function($scope){
	//1.链式操作，可以自由添加多个回调
	/*$.ajax("./mock/livelist.json")
		.done(function(data){
			//data就是json里面的值
			//console.log(data)
			console.log("成功")

		})
		.fail(function(){
			console.log("错误")
		})
		.done(function(){
			alert("第二个成功后的回调")
		})*/


	//2.为多个事件指定一个回调函数

	/*$.when($.ajax("./mock/livelist.json"),$.ajax("./mock/login.json"))

		.done(function(data1,data2){
			//console.log(data1)
			//console.log(data2)
			console.log("成功")
		})
		.fail(function(){
			console.log("错误")
		})*/

	//3.他把这一套回调函数接口从ajax操作扩展到所有操作

	//(1)先弹出成功，后弹出你好
	/*var wait=function(){
		var task=function(){
			alert("你好")
		}
		setTimeout(task,2000);
	}
	
	$.when(wait())
		.done(function(){
			alert("成功")
		})
		.fail(function(){
			alert("失败")
		})    */ 

//(2) 弹出 你好

/*var dtd=$.Deferred();
var wait=function(){
		var task=function(){
			alert("你好")
		}
		setTimeout(task,2000);
		return dtd; 

	}
	
	$.when(wait())
		.done(function(){
			alert("成功")
		})
		.fail(function(){
			alert("失败")
		})             
*/


//(3) 你好 成功
/*var dtd=$.Deferred();
var wait=function(){
		var task=function(){
			alert("你好")
			dtd.resolve();  
		}
		setTimeout(task,2000);
		return dtd; 

	}
	

	//dtd.resolve(); //可以被改 
	$.when(wait())
		.done(function(){
			alert("成功")
		})
		.fail(function(){
			alert("失败")
		})    */         




/*var dtd=$.Deferred();
	var wait=function(dtd){
		var task=function(){
			alert("你好");
			//dtd.reject()    //将dtd对象的状态转变为已失败
			dtd.resolve()      //已完成触发done对象
		}
		setTimeout(task,2000);
		return dtd.promise();
	}

	var d=wait(dtd)   

	$.when(d)
		.done(function(){
			alert("成功")
		})
		.fail(function(){
			alert("失败")
		})*/

}])