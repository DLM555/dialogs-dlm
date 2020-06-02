function Wrap(obj){
	this.cls = obj.cls;
	this.w = obj.w;
	this.h = obj.h;
	this.bg = obj.bg;
	this.title = obj.title;
	this.cont = obj.cont;
	this.callback = obj.callback;
	this.body=document.getElementsByTagName("body")[0];
	this.box =document.createElement("div");
	this.box.setAttribute("class","box-header");
	this.box2 =document.createElement("div");
	this.box2.setAttribute("class","box-body");
	this.box3 =document.createElement("div");
	this.box3.setAttribute("class","box-footer");
	this.titlebox =document.createElement("h4");
	this.close =document.createElement("button");
	this.close.setAttribute("class","close");
	this.defaults=document.createElement("button");
	this.defaults.setAttribute("class","btn-default");
	this.primary=document.createElement("button");
	this.primary.setAttribute("class","btn-primary");
	this.addDom();
	this.way();
}
Wrap.prototype.addDom = function(){
	this.dom = document.createElement("div");
	this.dom.setAttribute("class",this.cls);
	this.dom.style.width = this.w + "px";
	this.dom.style.height = this.h + "px";
	this.dom.style.backgroundColor = this.bg;
	this.body.appendChild(this.dom);
	this.dom.appendChild(this.box);
	this.dom.appendChild(this.box2);
	this.dom.appendChild(this.box3);
	this.box.appendChild(this.titlebox);
	this.box.appendChild(this.close);
	this.box3.appendChild(this.defaults);
	this.box3.appendChild(this.primary);
	this.titlebox.innerText = this.title;
	this.box2.innerText = this.cont;
	this.close.innerText = "x";
	this.defaults.innerText = "保存";
	this.primary.innerText = "确认";
};
Wrap.prototype.way = function(){
	console.log(this.dom);
	var that = this;
	this.primary.onclick = function(){
		that.dom.style.display = "none";
		alert("完成!!!");
	};
	this.close.onclick = function(){
		that.dom.style.display = "none";
	};
};