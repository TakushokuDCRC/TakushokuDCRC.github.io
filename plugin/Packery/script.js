var pckry = new Packery( '.grid', {
  // options
  itemSelector: '.grid-item',
  gutter: 10
});

function changeMember(className){
  var elements = document.getElementsByClassName("member");
  for(var i = 0 ; i < elements.length; i++){
    elements[i].style.display = "none";
  }
  if(className == "check-all"){
    for(var i = 0 ; i < elements.length; i++){
      elements[i].style.display = "block";
    }
  }else{
    elements = document.getElementsByClassName(className.replace("check-",""));
    for(var i = 0 ; i < elements.length; i++){
      elements[i].style.display = "block";
    }
  }
	pckry.layout();
}

window.onload = function(){
  changeMember("check-all");
}
