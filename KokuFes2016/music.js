window.onload = function(){
	window.onscroll = function(){
		document.getElementById("back").style.top = window.scrollY + "px";
		var he = window.innerHeight + 800;
		if(window.scrollY > he){
			document.getElementById("back").style.top = he + "px";
		}else{
			document.getElementById("back").style.top = window.scrollY + "px";
		}
