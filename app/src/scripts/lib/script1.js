function Animate(name,type){
	this.name=name;
	this.type=type;
}

Animate.prototype.say=function(){
	alert("我是"+this.name)
}

Animate.prototype.sports=function(){
	alert("hello")
}