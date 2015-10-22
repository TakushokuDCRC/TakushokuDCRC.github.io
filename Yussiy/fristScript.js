function ChangeTab(tabname) {
	   // タブメニュー実装
	   document.getElementById('tab1').style.display = 'none';
	   document.getElementById('tab2').style.display = 'none';
	   document.getElementById('tab3').style.display = 'none';
	   // タブメニュー実装
	   document.getElementById(tabname).style.display = 'block';
	}
myWeek=new Array("Sun","Mon","Tue","Wed","Thu","Sun","Sat");
function myTime(){
     myDate=new Date();
     myMsg = myDate.getFullYear() + "/";
     myMsg += ( myDate.getMonth() + 1 ) + "/";
     myMsg += myDate.getDate() + "/";
     myMsg += myWeek[myDate.getDay()] + " ";
     myMsg += myDate.getHours() + ":";
     myMsg += myDate.getMinutes() + ":";
     myMsg += myDate.getSeconds();
     document.getElementById("myIDdate").innerHTML = myMsg;
}

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
