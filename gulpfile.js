//2.引入gulp
var gulp=require("gulp");

//3.引入合并插件
var concat=require("gulp-concat");

//5.引入压缩文件
var uglify=require("gulp-uglify");

//6.引入启动服务文件

var webserver=require("gulp-webserver");

//7.引入sass编译
var sass=require("gulp-sass");

//8.引入压缩css
var minify=require("gulp-minify-css");

//9.引入js
	var webpack=require("gulp-webpack");
	var named=require("vinyl-named");
// 引入版本控制插件
var rev = require("gulp-rev");

// 引入自动替换文件名
var revCollector = require("gulp-rev-collector");

// 引入url
var url = require("url");

// 引入fs 
var fs = require("fs");


//下面所有的操作都是基于gulp完成的

//2.构建一个拷贝文件的任务
gulp.task("copy-index",function(){ //copy-index 任务的名称
	//拷贝文件
	gulp.src('./index.html')       //要拷贝的文件
		.pipe(gulp.dest('./app'))  //将拷贝的文件放到app文件夹里 执行的时候 gulp copy-index
		//dest目标
})

//3.构建一个合并文件的任务
gulp.task("concat",function(){
	gulp.src(["./app/src/scripts/lib/script1.js","./app/src/scripts/lib/script2.js"])
			.pipe(concat("script.js"))   //concat是个方法  //合并后的文件名
			.pipe(gulp.dest('./app/dist')) //存放合并后的文件的文件夹
})



//5.构建压缩文件
	gulp.task("uglify",function(){
		gulp.src("./app/src/scripts/lib/iscroll.js")   //要压缩的文件
		.pipe(uglify())									//压缩的方法
		.pipe(gulp.dest('./app/dist/iscroll.min'))      //压缩后的存放文件夹
	})


//6.启动服务
gulp.task("webserver",function(){
	gulp.src("./")     //起服务起到当前目录
		.pipe(webserver({
			/*port:80,*/    //端口不能用   配置端口
			directoryListing:{  //显示当前目录
				enable:true,
				path:"./"      //具体目录下的路径
				
			},
			livereload:true,   //页面保存，浏览器自动刷新
			// mock数据
            middleware:function(req,res,next){
                var urlObj = url.parse(req.url,true);
                switch(urlObj.pathname){
                	case '/api/getLivelist.php':
                	res.setHeader("Content-type","application/json");
                	fs.readFile('./mock/livelist.json','utf-8',function(err,data){
                        res.end(data);
                	});
                	return;
                	case '/api/getLivelistmore.php':
                	res.setHeader("Content-type","application/json");
                	fs.readFile('./mock/livelist-more.json','utf-8',function(err,data){
                        res.end(data);
                	});
                    return;
                }
                next();
            }
		}))
})


//7.编译sass
 var sassFiles=["./app/src/styles/**/*.scss"]; //所有文件夹下面的所有scss文件
 	gulp.task("sass",function(){
 		gulp.src(sassFiles)      //要编译的文件
 			.pipe(sass())		//编译的方法
 			.pipe(minify())     //压缩的方法
 			.pipe(gulp.dest("./app/prd/styles"));  //编译后存放的路径（线上）
 	})

 //8.编译css
 	var cssFiles=["./app/src/styles/**/*.css"];
 		gulp.task("css",function(){
 			//console.log("done");
 			gulp.src(cssFiles)
 				.pipe(minify())
 				.pipe(gulp.dest('./app/prd/styles'));
 		})

 //9.js模块化
 	var jsFiles=["./app/src/scripts/app.js"];  //要编译的主入口
 	gulp.task("packjs",function(){   //packjs任务的名称
    gulp.src(jsFiles)
        .pipe(named())
        .pipe(webpack({
        	output:{
        		filename:'[name].js'
        	},
        	modules:{
        		loaders:[
                  {
                  	test:/\.js$/,
                  	loader:'imports?define=>false'
                  }
        		]
        	}
        }))
        .pipe(uglify().on("error",function(e){
           console.log("\x07",e.lineNumber,e.message);
            return this.end();
        }))
        .pipe(gulp.dest("./app/prd/scripts"));  //dest目标  上线的路径
})

 	// 版本控制
		var cssDistFiles = ["./app/prd/styles/app.css"]; //生成md5之前的css路径 
		var jsDistFiles = ["./app/prd/scripts/app.js"];  //生成md5之前的js路径
		gulp.task("ver",function(){
		    gulp.src(cssDistFiles)
		        .pipe(rev())   //rev()方法就是让生成name-md5文件
		        .pipe(gulp.dest("./app/prd/styles"))   //压缩前文件夹
		        .pipe(rev.manifest())                  //压缩
		        .pipe(gulp.dest("./app/ver/styles"))  //压缩后文件夹
		    gulp.src(jsDistFiles)
		        .pipe(rev())   // 生成name-md5文件
		        .pipe(gulp.dest("./app/prd/scripts"))
		        .pipe(rev.manifest())
		        .pipe(gulp.dest("./app/ver/scripts"))
		})

		// 让html文件自动将入口文件的文件名替换为md5加密之后的名称
		gulp.task("html",function(){
			gulp.src(["./app/ver/**/*.json","./*.html"]) //根据json里的内容来替换html的内容
			    .pipe(revCollector())    //替换文件名的方法
			    .pipe(gulp.dest("./"));   //替换后保存文件的文件夹路径
		})

		gulp.task("min",["ver","html"]); 


//4.构建检测内容
	gulp.task("watch",function(){
		gulp.watch('./index.html',['copy-index']);
		gulp.watch('./app/src/scripts/*.js',['concat']);
		gulp.watch(sassFiles,['sass']);
		gulp.watch(cssFiles,['css']);
		gulp.watch("./app/src/scripts/**/*.js",['packjs']);
	}) 


//设置默认的任务
gulp.task("default",["copy-index","concat","watch","uglify","webserver"]);  //只要执行gulp，就会执行中括号里所有文件   //执行的时候 gulp

										
