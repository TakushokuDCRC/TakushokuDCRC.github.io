var sY = 0;
var lock = false;
window.addEventListener("load", function(){
	sY = window.scrollY;
	window.addEventListener("scroll", function(e){
		if(lock){
			window.scrollTo(0, sY);
		}else{
			sY = window.scrollY;
			getE("menu").style.top = window.scrollY + "px";
		}
	});
});
function menu_vis(){
	var m = getE("menu");
	m.style.display = "block";
	m.style.top = window.scrollY + "px";
	m.style.left = window.scrollX + "px";
	lock = true;
	document.documentElement.style.overflow = "hidden";
	setTimeout(function(){
		m.style.opacity = 1;
	}, 20);
}
function menu_hid(){
	var m = getE("menu");
	m.style.opacity = 0;
	setTimeout(function(){
		m.style.display = "none";
		lock = false;
		document.documentElement.style.overflow = "visible";
	}, 1000);
}
function getE(id){
	return document.getElementById(id);
}
function scrollElm(ele){
	lock = false;
	menu_hid();
	window.scroll(0, ele.offsetTop);
}