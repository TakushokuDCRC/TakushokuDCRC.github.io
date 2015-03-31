function addMovie(id,option){
    var element = document.createElement('iframe');
    element.id = "youtube";
    element.src = "//www.youtube.com/embed/"+id+"?"+option; 
    var obj = document.getElementById("sec1"); 
    obj.appendChild(element); 
}

//addMovie("APMSn-VhZi0","rel=0&loop=1&iv_load_policy=3&disablekb=1&showinfo=0&controls=0&modestbranding=1&vq=medium&wmode=transparent&"+window.location.search.substring(1));
//&autoplay=1

//modestbranding=1&vq=medium

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'APMSn-VhZi0',
        playerVars:{
            'wmode': 'transparent',
            'loop':'1',
            'showinfo':'0',
            'controls':'0',
            'iv_load_policy':'3',
            'rel':'0',
            'playlist':'APMSn-VhZi0',
            'disablekb':'1'
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}
function onPlayerReady(event) {
    //event.target.mute();
    event.target.setPlaybackQuality('small');
}
function onPlayerStateChange(event) {
}
function startButton(){
    player.playVideo();
    document.getElementById("cotent5").style.display = "none";
}


function setSize(){
    document.getElementsByTagName("body").item(0).style.width=screen.availWidth+"px";
    document.getElementById("sec1").style.height=(screen.availHeight-100)+"px";
    document.getElementById("menue").style.height=screen.availHeight+"px";
    document.getElementById("menue").style.width=(screen.availWidth/5)+"px";
}

setSize();