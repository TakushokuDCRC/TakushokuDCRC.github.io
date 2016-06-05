var vis;
window.onload = function(){
	vis = false;
	if(window.innerWidth <= 480){
		youtubeReady("movie_smart");
		deleteElement("movie_switch");
		deleteElement("movie_frame");
	}
};
window.onscroll = function(){
	if(vis){
		window.scrollTo(sx, sy);
	}else{
		sx = window.scrollX;
		sy = window.scrollY;
	}
}
function youtubeReady(div_id){
	if(typeof(YT) != "undefined"){
		var wi;
		var he;
		if(window.innerWidth > window.innerHeight){
			if(window.innerHeight < window.innerWidth * 9 / 16){
				he = window.innerHeight * 0.9;
				wi = he * 16 / 9;
			}else{
				wi = window.innerWidth * 0.8;
				he = wi * 9 / 16;
			}
		}else{
			wi = window.innerWidth * 0.9;
			he = wi * 9 / 16;
		}
		ytPlayer = new YT.Player(
			div_id,
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
	youtubeReady("movie_div");
}
function setHidden(){
	vis = false;
	document.body.style.overflow = "visible";
	deleteElement("movie_div");
	document.getElementById("movie_td").innerHTML += "<div id='movie_div'></div>";
	document.getElementById("movie_frame").style.display = "none";
}
function deleteElement(id){
	var element = document.getElementById(id);
	var parent = element.parentNode;
	parent.removeChild(element);
}