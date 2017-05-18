/*
function addMovie(id,option){
    var element = document.createElement('iframe');
    element.id = "youtube";
    element.src = "https://www.youtube.com/embed/"+id+"?"+option; 
    element.frameborder=0;
    var obj = document.getElementById("sec1"); 
    obj.appendChild(element); 
}

addMovie("2NrPrFURjNY","rel=0&loop=1&iv_load_policy=3&disablekb=1&showinfo=0&controls=0&modestbranding=1&vq=medium&wmode=transparent&autoplay=1"+window.location.search.substring(1));
*/

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'HUjOUpBxwkE',
        playerVars:{
            'wmode': 'transparent',
            'loop':'1',
            'showinfo':'0',
            'controls':'0',
            'iv_load_policy':'3',
            'rel':'0',
            'playlist':'HUjOUpBxwkE',
            'disablekb':'1',
            'autoplay':'1'
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}
function onPlayerReady(event) {
    player.mute()
    event.target.setPlaybackQuality(small);
    player.playVideo();

}
function onPlayerStateChange(event) {
}
