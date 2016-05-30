var vis;
window.onload = function(){
	vis = false;
}
window.onscroll = function(){
	if(vis){
		window.scrollTo(sx, sy);
	}else{
		sx = window.scrollX;
		sy = window.scrollY;
	}
}
function youtubeReady(){
	if(typeof(YT) !=  "undefined"){
		var wi = window.innerWidth * 0.6;
		var he = 9 / 16 * wi;
		document.getElementById("batsu").style.top = (he * -1) + "px";
		ytPlayer = new YT.Player(
			"movie_div",
			{
				width: wi,
				height: he,
				videoId: "QSxvDkKYv_I"
			}
		);
	}else{
		document.getElementById("movie_div").innerHTML = "YouTube iframe APIが見つかりません";
	}
}
function setVisible(){
	vis = true;
	document.body.style.overflow = "hidden";
	var player = document.getElementById("movie_frame");
	player.style.top = window.scrollY + "px";
	player.style.left = window.scrollX + "px";
	player.style.display = "block";
	youtubeReady();
}
function setHidden(){
	vis = false;
	document.body.style.overflow = "visible";
	deleteElement("movie_div");
	deleteElement("batsu");
	document.getElementById("movie_td").innerHTML += "<div id='movie_div'></div><a href='javascript:void(0)' id='batsu'><span>×</span></a>";
	document.getElementById("movie_frame").style.display = "none";
}
function deleteElement(id){
	var element = document.getElementById(id);
	var parent = element.parentNode;
	parent.removeChild(element);
}