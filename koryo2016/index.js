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