// 导航地址部分

var box1=document.getElementsByClassName("nav")[0];
var btns1=document.getElementById('btn1');
var pics1=document.getElementById("adress");
btns1.onmouseover=function(){
	pics1.style.display="block";
}
btns1.onmouseout=function(){
	pics1.style.display="none";
}
// 我的京东
var btns2w=document.getElementById('btn2');
var pics2w=document.getElementById("adress1");
btns2w.onmouseover=function(){
	pics2w.style.display="block";
}
btns2w.onmouseout=function(){
	pics2w.style.display="none";
}

// 购物车
var btns4w=document.getElementById('gou');

var pics4w=document.getElementById("che");

btns4w.onmouseover=function(){
	pics4w.style.display="block";
	pics4w.className="shadow";
	btns4w.className="shadow";
}
btns4w.onmouseout=function(){
	pics4w.style.display="none";
	btns4w.className="";
}
// 导航后四个
// var box1w=document.getElementsByClassName("navpicwj")[0];
var navul=box1.getElementsByTagName("ul")[0];
var btns3w=navul.getElementsByTagName("li");
var picsbox=document.getElementsByClassName("navpicwj")[0];
var pics3w=picsbox.getElementsByTagName("img");

for (var i = 5; i < btns3w.length; i++) {
	btns3w[i].index=i;
	btns3w[i].onmouseover=function(){
	pics3w[this.index-3].style.display="block";
	}
}

for (var i = 5; i < btns3w.length; i++) {
	btns3w[i].index=i;
	btns3w[i].onmouseout=function(){
		pics3w[this.index-3].style.display="none";
	}
}


// 竖直导航部分
var btns5w=document.getElementsByClassName("leftnav");
// var btn5wa=btns5w.getElementsByTagName("a");
var pics5w=document.getElementsByClassName("leftpic");
for (var i = 0; i < btns5w.length; i++){
	btns5w[i].indexy=i;
	btns5w[i].onmouseover=function(){
		for (var i = 0; i < btns5w.length; i++) {
			btns5w[i].style.backgroundColor=" #c81623";
			pics5w[i].style.display="none";
		}
		this.style.backgroundColor="white";
		pics5w[this.indexy].style.display="block";
		// btn5wa[this.index].style.color="red";
	}
}
for (var i = 0; i < btns5w.length; i++){
	btns5w[i].indexy=i;
	btns5w[i].onmouseout=function(){
		
			this.style.backgroundColor=" #c81623";
			pics5w[this.indexy].style.display="none";
			// btn5wa[this.index].style.color="white";
	}
}

// 右侧娱乐选项
// var box2=document.getElementsByClassName("righol")[0];
var btns6wul=document.getElementById("rtul");
var btns6w=btns6wul.getElementsByTagName("li");
var div6=document.getElementsByClassName("rtol");

// var pics6w=pics6wol.getElementsByTagName("li");
for (var i = 0; i < 4; i++) {
	btns6w[i].indexd=i;
	btns6w[i].onmouseover=function(){
		this.style.marginTop="-30px";
		div6[this.indexd].style.transitionDuration="1s";
		div6[this.indexd].style.top="30px";
		div6[this.indexd].style.display="block";
		}
	
};

for(var i = 0; i < 4; i++) {
	btns6w[i].indexd=i;
	btns6w[i].onmouseout=function(){
	this.style.marginTop="0px";	
	div6[this.indexd].style.transitionDuration="1s";
	div6[this.indexd].style.top="200px";
	// div6[this.index].style.display="none";

	}
};


// 手动无缝滚动部分
var box7w1=document.getElementsByClassName("divfour")[0];
var box7w=box7w1.getElementsByClassName("right-4")[0];

var btns7w=box7w.getElementsByTagName("span");


var pics7wul=document.getElementById("right-4-1");

var pics7w=pics7wul.getElementsByTagName("li");

// var span7w=document.getElementsByClassName("span4-1");

pics7wul.innerHTML+=pics7wul.innerHTML;
pics7wul.style.width=pics7w.length*pics7w[0].offsetWidth+pics7w.length+"px";

	var speed=1004;

	var timer1=null;

	function wufeng(){
		timer1=setInterval(function(){
			clearInterval(timer1);
		if (pics7wul.offsetLeft>=0) {
			pics7wul.style.left=(-pics7wul.offsetWidth/2)+"px";
		}
		if (pics7wul.offsetLeft<-pics7wul.offsetWidth/2) {
			pics7wul.style.left=0;
		}
		pics7wul.style.left=pics7wul.offsetLeft+speed+"px";

	},1000);

}
	
btns7w[0].onclick=function(){
		speed=-1004;
		wufeng();
	};
btns7w[1].onclick=function(){
		speed=1004;
		wufeng();
	};
box7w.onmouseover=function(){
	btns7w[0].style.display="block";
	btns7w[1].style.display="block";
	
}	

box7w.onmouseout=function(){
	btns7w[0].style.display="none";
	btns7w[1].style.display="none";
	clearInterval(timer1);
	
}	



// 竖直导航右边的轮播图
	
//获取按钮
var btns2ol=document.getElementById("listol");
var btns2=btns2ol.getElementsByTagName("li");
//获取图片
var pics2ul=document.getElementById("listul");
var pics2=pics2ul.getElementsByTagName("li");

var box=document.getElementsByClassName("midden")[0];
var anniu1=box.getElementsByClassName("anniuL")[0];
var anniu2=box.getElementsByClassName("anniuR")[0];

var indexsw=null;
for (var i = 0; i < btns2.length; i++) {
	btns2[i].indexw=i;
	btns2[i].onmouseover=function(){
		indexsw=this.indexw;
		go();
	}
}
function go(){
	for (var i = 0; i < btns2.length; i++) {
			btns2[i].style.backgroundColor="";
			pics2[i].style.opacity="";
		}
		btns2[indexsw].style.backgroundColor="red";
		pics2[indexsw].style.opacity=1;
}
// var box=document.getElementsByClassName("midden")[0];
// var anniu1=box.getElementsByClassName("anniuL")[0];
// var anniu2=box.getElementsByClassName("anniuR")[0];
	anniu1.onclick=function(){
		indexsw--;
		if(indexsw<0){
			indexsw=btns2.length-1;
		}
		go();
	};
	anniu2.onclick=function(){
		indexsw++;
		if(indexsw>btns2.length-1){
			indexsw=0;
		}
		go();
	}
var timer2=null;
function move(){
	clearInterval(timer2);
	timer2=setInterval(function(){
		indexsw++;
		if(indexsw>btns2.length-1){
			indexsw=0;
		}
		go();
	},2000)

}
move();
box.onmouseout=function(){
	move();
	anniu1.style.display="none";
	anniu2.style.display="none";
}
box.onmouseover=function(){
	clearInterval(timer2);
	anniu1.style.display="block";
	anniu2.style.display="block";
}




// 底部选项卡部分
var btn8wol=document.getElementById("btnshoe");
var btn8w=btn8wol.getElementsByTagName("li");
var pic8wul=document.getElementById("change");
var pic8w=pic8wul.getElementsByTagName("li");

var an1=document.getElementsByClassName("mid-5-an1")[0];
var an2=document.getElementsByClassName("mid-5-an2")[0];
 
var indexsc=null;
 
 	for (var i = 0; i < btn8w.length; i++) {
	btn8w[i].index=i;
	btn8w[i].onclick=function(){
		indexsc=this.index;
		shoe();
		
	}
}
function shoe(){
	for (var i = 0; i < btn8w.length; i++) {
			btn8w[i].style.backgroundColor="";

		}
		btn8w[indexsc].style.backgroundColor="red";
		pic8wul.style.left=-438*indexsc+"px";
}
an1.onclick=function(){
	indexsc--;
	if(indexsc<0){
		indexsc=btn8w.length-1;
	}
	shoe();
};
an2.onclick=function(){
	indexsc++;
	if(indexsc>btn8w.length-1){
		indexsc=0;
	}
	shoe();
};
var timers3=null;
function goesmove(){
	clearInterval(timers3);
	timers3=setInterval(function(){
	indexsc++;
	if(indexsc>btn8w.length-1){
		indexsc=0;
	}
	shoe();
},1000);

};
goesmove();

var box8=document.getElementsByClassName("mid-5-2")[0];
box8.onmouseover=function(){
	an1.style.display="block";
	an2.style.display="block";
	clearInterval(timers3);
}
box8.onmouseout=function(){
	an1.style.display="none";
	an2.style.display="none";
	goesmove();
}



// 大图选项卡部分

var box9=document.getElementsByClassName("shoes-right");
var btn9wul=document.getElementById("shoeul");
var btn9w=btn9wul.getElementsByTagName("li");



for (var i = 0; i < btn9w.length; i++) {
	btn9w[i].indexj=i;
	btn9w[i].onmouseover=function(){
		for (var i = 0; i < btn9w.length; i++) {
			box9[i].style.display="none";
		}
		// this.className="shoebtncolor0";
		// this.className="shoebtncolor";
		box9[this.indexj].style.display="block";
	}
}

// 右侧固定窗口选项卡

var btn10wul=document.getElementById("extraul");
var btn10w=btn10wul.getElementsByTagName("li");

var box10wol=document.getElementById("extraol");
var box10w=box10wol.getElementsByTagName("li");

for (var i = 0; i < btn10w.length; i++) {
	btn10w[i].indexwj=i;
	btn10w[i].onmouseover=function(){
		for (var i = 0; i < btn10w.length; i++) {
			box10w[i].style.left=200+"px";
		}
		this.style.backgroundColor="rgb(159,27,16)";
		box10w[this.indexwj].style.left=115+"px";
		box10w[this.indexwj].style.transitionDuration="1s";
	
} 
		btn10w[i].onmouseout=function(){
		this.style.backgroundColor="rgb(102,91,91)";
		box10w[this.indexwj].style.left=200+"px";
		box10w[this.indexwj].style.transitionDuration="0.5s";
}

}


//小圆动画
// var circle=document.getElementById("circle");
// var ta;

// 	circle.onmouseover=function(){
// 		var t=0;
// 		var b=0;
// 		var c=1000;
// 		var d=30;
// 		clearInterval(ta);
// 		ta=setInterval(function(){
// 			t++;
// 			if(t>=d){
// 				clearInterval(ta);
// 			}
// 			circle.style.marginLeft=Tween.cubic.easeIn(t,b,c,d)+"px";
// 		},30)



// 	}















