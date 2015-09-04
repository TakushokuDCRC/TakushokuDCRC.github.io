var ATScroll = function(vars) {
	//コンストラクタ
	var _self = this;
	var _timer;

	//デフォルトオプション
	var options = {
		noScroll : 'noSmoothScroll',
		setHash : false,
		duration : 800,
		interval : 10,
		animation : 'liner',
		callback : function(){}
	};

	//オプションの上書き設定
	this.config = function(property) {
		for (var i in property) {
			//設定されていない時は上書きしない
			if (!vars.hasOwnProperty(i)) {
				continue;
			}
			options[i] = property[i];
		}
	}

	//ブラウザチェック
	var browser = {
		ua : function() {
			return navigator.userAgent;
		},
		//IE
		ie : function() {
			return browser.ua.indexOf('MSIE') >= 0;
		},
		//IE6
		ie6 : function() {
			return browser.ua.indexOf('MSIE 6') >= 0;
		},
		//標準モード
		ieStandard : function() {
			return (document.compatMode && document.compatMode == 'CSS1Compat');
		}
	};

	//スクロール位置の取得
	var scroll = {
		top : function() {
			return (document.documentElement.scrollTop || document.body.scrollTop);
		},
		left : function() {
			return (document.documentElement.scrollLeft || document.body.scrollLeft);
		},
		width : function() {
			if (browser.ie && !browser.ieStandard) {
				return document.body.scrollWidth;
			}
			//モダンブラウザ
			else {
				return document.documentElement.scrollWidth;
			}
		},
		height : function() {
			if (browser.ie && !browser.ieStandard) {
				return document.body.scrollHeight;
			}
			//モダンブラウザ
			else {
				return document.documentElement.scrollHeight;
			}
		}
	};

	//ウインドウのサイズ取得
	var inner = {
		width : function() {
			//モダン
			if (window.innerWidth) {
				return window.innerWidth;
			}
			//IE
			else if (browser.ie) {
				//IE6 && 標準モード
				if (browser.ie6 && browser.ieStandard) {
					return document.documentElement.clientWidth;
				}
				//IE6互換モード && 他IE
				else {
					//IE6以下
					if (!document.documentElement.clientWidth) {
						return document.body.clientWidth;
					}
					//IE6以上
					else {
						return document.documentElement.clientWidth;
					}
				}
			}
		},
		height : function() {
			//モダン
			if (window.innerHeight) {
				return window.innerHeight;
			}
			//IE
			else if (browser.ie) {
				//IE6 && 標準モード
				if (browser.ie6 && browser.ieStandard) {
					return document.documentElement.clientHeight;
				}
				//IE6互換モード && 他IE
				else {
					//IE6以下
					if (!document.documentElement.clientHeight) {
						return document.body.clientHeight;
					}
					//IE6以上
					else {
						return document.documentElement.clientHeight;
					}
				}
			}
		}
	};

	//オブジェクト位置の取得
	this.getElementPosition = function(ele) {
		var obj = new Object();
		obj.x = 0;
		obj.y = 0;

		while(ele) {
			obj.x += ele.offsetLeft || 0;
			obj.y += ele.offsetTop || 0;
			ele = ele.offsetParent;
		}
		return obj;
	}


	//イベント追加
	this.addEvent = function(eventTarget, eventName, func) {
		// モダンブラウザ
		if(eventTarget.addEventListener) {
			eventTarget.addEventListener(eventName, func, false);
		}
		// IE
		else if(window.attachEvent) {
			eventTarget.attachEvent('on'+eventName, function(){func.apply(eventTarget);});
		}
	}

	//イベントキャンセル
	this.eventCancel = function(e) {
		//for IE
		if (!e) e = window.event;

		if (e.preventDefault) {
			e.preventDefault()
		}
		else{
			e.returnValue = false;
		}
	}

	this.setSmoothScrollY = function(e) {
		_self.eventCancel(e);
		clearTimeout(_timer);
		var hash = this.hash;
		var idName = hash.replace('#', '');
		var targetId = document.getElementById(idName);

		//var toX = _self.getElementPosition(targetId).x;
		var toY = _self.getElementPosition(targetId).y;

		//リンク先が範囲外時
		var limitH = scroll.height() - inner.height();
		if (limitH < toY) {
			toY = limitH;
		}
		if (toY < 0) {
			toY = 0;
		}

		if (options.setHash) {
			options.callback = function(){
				window.location.hash = hash;
			}
		}
		_self.scroll(toY);
	}

	var easing = {
		/*
		time = 現在秒 (現在
		begin = 最初の値
		change = 変動する値
		duration = 何秒かけて動くか
		*/
		liner : function(t, b, c, d) {
			return c * t / d + b;
		},
		quinticIn : function(t, b, c, d) {
			t /= d;
			return c * t * t * t * t * t + b;
		},
		quinticOut : function(t, b, c, d) {
			t /= d;
			t = t - 1;
			return -c * (t * t * t * t - 1) + b;
		}
	};

	this.scroll = function(toY) {
		var now = new Date();
		var fromY = scroll.top();
		var run = function() {
			var time = new Date() - now;
			var next = easing[options.animation](time, fromY, toY - fromY, options.duration);

			if (time < options.duration - options.interval) {
				window.scrollTo(scroll.left(), parseInt(next));
				_timer = setTimeout(function(){run()}, options.interval);
			}
			else {
				clearTimeout(_timer);
				window.scrollTo(scroll.left(), parseInt(toY));
				options.callback();
			}
		}
		run();
	}

	this.load = function() {
		//コンストラクタ
		this.config(vars);

		this.addEvent(window, 'load', function() {
			var allLinks = document.links;

			//ページ内リンク
			for (var i = 0; i < allLinks.length; i++) {
				var a = allLinks[i]
				var hash = a.href.split('#')[1];

				if (a.className.indexOf(options.noScroll) >= 0) {
					continue;
				}
				if (a.href.match('#') && document.getElementById(hash)) {
					_self.addEvent(a, 'click', _self.setSmoothScrollY);
				}
			}
		});
	}
};

var atscroll = new ATScroll({
	noScroll : 'noSmoothScroll',
	setHash : false,
	duration : 800,
	interval : 10,
	animation : 'quinticOut'
});
atscroll.load();