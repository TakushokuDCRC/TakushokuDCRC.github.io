memberObj = new Array;
memberObj.Nakahiko = [
	"http://takushokudcrc.github.io/img/Nakahiko-icon.jpeg",
	"http://takushokudcrc.hatenablog.com/archive/category/Nakahiko",
	"http://takushokudcrc.github.io/Nakahiko/"
];
memberObj.komo91 = [
	"http://takushokudcrc.github.io/img/komo91-icon.png",
	"http://takushokudcrc.hatenablog.com/archive/category/komo91",
	"http://takushokudcrc.github.io/komo91/"
];
var element = document.createElement('aside');
element.id = "testBox"; 
element.innerHTML = "固定テスト";
if ( window.location.toString().match(/entry/)) {　//記事ページの場合
	var writer = document.querySelectorAll(".categories a")[0].innerHTML;
	element.innerHTML= '<p>この記事を書いた人</p>';
	element.innerHTML+='<p>'+writer+'</p>';
	element.innerHTML+='<p><img src="'+memberObj[writer][0]+'" width="80" height="80" ></p>';
	element.innerHTML+='<p><a href="'+memberObj[writer][1]+'">記事一覧</a></p>';
	element.innerHTML+='<p><a href="'+memberObj[writer][2]+'">ホームページ</a></p>';
}
element.style.heigh = '100px'; 
var objBody = document.getElementById("content-inner"); 
objBody.appendChild(element);
$(function($) {
	var tab = $('#testBox'), offset = tab.offset();
	if($(window).scrollTop() > offset.top + 25) {
		tab.addClass("testFixed");
	} else {
		tab.removeClass("testFixed");
	}
	$(window).scroll(function () {
		if($(window).scrollTop() > offset.top + 25) {
			tab.addClass("testFixed");
		} else {
			tab.removeClass("testFixed");
		}
	});
});