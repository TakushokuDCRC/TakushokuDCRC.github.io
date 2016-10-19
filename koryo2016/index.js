function changeBgColor( id, color ){
    document.getElementById( id ).style.backgroundColor = color;
}

function ChangeTab(tabname) {

   document.getElementById('tab1').style.display = 'none';
   document.getElementById('tab2').style.display = 'none';
   document.getElementById('tab3').style.display = 'none';
   document.getElementById('tab4').style.display = 'none';
   document.getElementById('tab5').style.display = 'none';

   document.getElementById(tabname).style.display = 'block';
}

function link() {
	document.getElementById(hoge);
}

window.addEventListener("load", function(){
  //youtube player define
  var ytPlayer;
  function youtubeReady(){
    if(YT){
      width = window.innerWidth * 0.8;
      height = width * 9 / 16;
      ytPlayer = new YT.Player(
        "youtube",
        {
          width: width,
          height: height,
          videoId: "QSxvDkKYv_I"
        }
      )
    }else{
      document.getElementById("youtube").innerHTML = "Youtube iframe API が見つかりませんでした";
    }
  }
  youtubeReady();
});
