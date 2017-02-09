enchant();

window.onload = function() {

	var game_ = new Game(320,320);
	game_.fps = 24;
	game_.preload('./img/ball.png','./img/dai.png','./img/img65236149.png','./img/ball2.png','./img/illust421.png','./img/2e6c0d59.png');

	game_.onload = function() {

		var createStartScene = function(){
			var scene = new Scene();
			scene.backgroundColor ='#dfffff';

			var title = new Label('Let’s make Snowman!');
			title.textAlign = 'center';
			title.color = '#00aa00';
			title.x = 0;
			title.y = 96;
			title.font = '28px sans-serif';
			scene.addChild(title);

			var startImage = new Label('- START! -');
			startImage.textAlign = 'center';
			startImage.color = '#f70f1f';
			startImage.x = 0;
			startImage.y = 196;
			startImage.font = '30px sans-serif';
			scene.addChild(startImage);


			var brituxen = new Sprite(266,220);
			brituxen.image =game_.assets['./img/2e6c0d59.png'];
			brituxen.x = 130;
			brituxen.y = 160;
			brituxen.scaleX = 0.5;
			brituxen.scaleY = 0.5;
			scene.addChild(brituxen);



			startImage.addEventListener(Event.TOUCH_START, function(e) {

				game_.replaceScene(createGameScene());
			});

			return scene;

		};

		var createGameScene = function() {

			var scene = new Scene();
			scene.backgroundColor = '#dfffff';

			var tree = new Sprite(391,590);
			tree.image = game_.assets['./img/illust421.png'];
			tree.x = -100;
			tree.y = -100;
			tree.scaleX = 0.5;
			tree.scaleY = 0.5;
			scene.addChild(tree);

			var asiba = new Sprite(125,100);
			asiba.image = game_.assets['./img/dai.png'];
			asiba.x = 100;
			asiba.y = 270;
			asiba.scaleX = 1;
			asiba.scaleY = 1;
			scene.addChild(asiba);


			var bottomball = new Sprite(200,200);
			bottomball.image = game_.assets['./img/ball.png'];
			bottomball.x = -25;
			bottomball.y = -50;
			bottomball.scaleX = 0.5;
			bottomball.scaleY = 0.5;
			scene.addChild(bottomball);

			var topball = new Sprite(200,200);
			topball.image = game_.assets['./img/ball2.png'];
			topball.x = -400;
			topball.y = -400;
			topball.scaleX = 0.5;
			topball.scaleY = 0.5;
			scene.addChild(topball);


			var orafu = new Sprite(332,526);
			orafu.image = game_.assets['./img/img65236149.png'];
			orafu.x = 1000;
			orafu.y = 1000;
			orafu.scaleX = 0.5;
			orafu.scaleY = 0.5;
			scene.addChild(orafu);

			var gamenn = new Sprite(320,320);
			gamenn.x = 0;
			gamenn.y = 0;
			gamenn.scaleX = 1;
			gamenn.scaleY = 1;
			scene.addChild(gamenn);


			var kakudo = 0;
			var addkakudo = 1;
			var alreadytap = 0;
			var kasokusouchi = 0;
			var toptonosa = 0;
			var zettaichi = 0;
			var clear = 0;
			var yoinn = 0;
			var grade = 1;
			var addy1 = 0;
			var addy2 = 0;
			var hyouzizumi = 0;
			var idoutyuu = 0;

	/*		if(kakudo == 0){
				addkakudo = addkakudo * -1;
			}
			if(kakudo == 180){
				addkakudo = addkakudo * -1;
			}*/

			kakudo = kakudo + addkakudo;

		//	var kasokusouchi = Math.sin(kakudo * (Math.PI / 180));

			scene.addEventListener(Event.ENTER_FRAME, function(){



		//	bottomball.x = 60;
		//	topball.x = 60;



			/*	if(kakudo == 0){
					addkakudo = addkakudo * -1;
				}
				if(kakudo == 180){
					addkakudo = addkakudo * -1;
				}*/






				if(yoinn >= 40&&clear == 1){
                  			  game_.replaceScene(createGameoverScene(grade));
				}

				if(clear >= 1){
					yoinn = yoinn + 1;
				}


				if(alreadytap == 0){

				kakudo = kakudo + addkakudo;
				kasokusouchi = Math.sin(kakudo * (Math.PI / 180));
				kakudo = kakudo + addkakudo;
				}

				bottomball.x += kasokusouchi*3;

				if(alreadytap >= 1){
					addy1 = addy1 + 1;
					bottomball.y = bottomball.y + addy1/10;
				}


				if (bottomball.y >= 120&&bottomball.x >= 0&&bottomball.x <= 125){
					bottomball.y = 120;
					bottomball.x -= kasokusouchi*3;
				}

				if(bottomball.x >= 175||bottomball.x <= -50){
					bottomball.x -= kasokusouchi*3;
				}


				if(bottomball.y >= 120&&bottomball.x >= 0&&bottomball.x <= 125&&hyouzizumi == 0){
					topball.x = -25;
					topball.y = -50;
					kakudo = 0;
					kasokusouchi = 0;
					hyouzizumi = 1;
					idoutyuu = 0;

				}

				if(bottomball.y >= 260){
					clear = 1;
				}

				if(alreadytap == 1&&bottomball.y==120){

					kakudo = kakudo + addkakudo;
					kasokusouchi = Math.sin(kakudo*10 * (Math.PI / 180));
					kakudo = kakudo + addkakudo;

				}

				topball.x += kasokusouchi*3;

				toptonosa = bottomball.x - topball.x;

				if( toptonosa >= 0){
					zettaichi = toptonosa;
				}else{
					zettaichi = 0 - toptonosa;
				}



				if(alreadytap == 2){

					addy2 = addy2 + 1;
					topball.y = topball.y + addy2/10;
				}

				if (topball.y >= 40&&alreadytap >= 1){

				//	topball.x -= kasokusouchi*3;


					if(zettaichi <= 1&&yoinn >= 5){
					topball.x -= kasokusouchi*3;
						topball.x = 1000;

						scene.backgroundColor = '#ffff33';


						orafu.x = bottomball.x - 60 ;


						orafu.y = -115;
						clear = 2;
						grade = 4;
						bottomball.x = -1000;

					}else if( zettaichi <= 8){
						topball.x -= kasokusouchi*3;
						topball.y = 40;
						clear = 1;
						grade = 3;
					}else if( zettaichi <= 25){
						topball.x -= kasokusouchi*3;
						topball.y = 40;
						clear = 1;
						grade = 2;
					}else if( zettaichi <= 50){

						topball.x -= kasokusouchi*3;
						topball.y = 40;
						grade = 2;
						clear = 1;
					}else if (topball.y >= 120&&topball.x >= 0&&topball.x <= 125){
						topball.y = 120;
						topball.x -= kasokusouchi*3
						clear = 1;
					}
					if(topball.y >= 260){
						clear = 1;
					}







				}

				if(topball.x >= 175||topball.x <= -50&&alreadytap >= 1){
					topball.x -= kasokusouchi*3;
				}



			});

			gamenn.addEventListener(Event.TOUCH_START, function(e) {
				if(alreadytap == 0&&idoutyuu == 0){
					alreadytap = 1;
					idoutyuu = 1;
				}


				if(alreadytap == 1&&idoutyuu == 0){
					alreadytap = 2;
				}
			});

/*
			topball.addEventListener(Event.TOUCH_START, function(e) {
					alreadytap = 2;
			});

*/
			return scene;
		};


		var createGameoverScene = function(grade){

			var scene = new Scene();
			scene.backgroundColor = '#303030';

		var tree = new Sprite(391,590);
			tree.image = game_.assets['./img/illust421.png'];
			tree.x = 30;
			tree.y = -50;
			tree.scaleX = 0.3;
			tree.scaleY = 0.3;
			scene.addChild(tree);


			var hyouka1 = new Label('見習い級');
			hyouka1.textAlign = 'center';
			hyouka1.color = '#ffffff';
			hyouka1.x = 1000;
			hyouka1.y = 1000;
			hyouka1.font = '40px sans-serif';
			scene.addChild(hyouka1);

			var hyouka2 = new Label('アマチュア級');
			hyouka2.textAlign = 'center';
			hyouka2.color = '#c47222';
			hyouka2.x = 1000;
			hyouka2.y = 1000;
			hyouka2.font = '40px sans-serif';
			scene.addChild(hyouka2);

			var hyouka3 = new Label('プロ級');
			hyouka3.textAlign = 'center';
			hyouka3.color = '#c0c0c0';
			hyouka3.x = 1000;
			hyouka3.y = 1000;
			hyouka3.font = '40px sans-serif';
			scene.addChild(hyouka3);

			var hyouka4 = new Label('魔法の\n雪だるま級');
			hyouka4.textAlign = 'center';
			hyouka4.color = '#ffd700';
			hyouka4.x = 1000;
			hyouka4.y = 1000;
			hyouka4.font = '30px sans-serif';
			scene.addChild(hyouka4);



			scene.addEventListener(Event.ENTER_FRAME, function(){
				if( grade == 1 ){
					hyouka1.x = 0;
					hyouka1.y = 60;
				}else if( grade == 2 ){
					hyouka2.x = 0;
					hyouka2.y = 60;
				}else if( grade == 3 ){
					hyouka3.x = 0;
					hyouka3.y = 60;
				}else if( grade == 4 ){
					hyouka4.x = 0;
					hyouka4.y = 60;
				}
			});




		            var retryLabel = new Label('タイトルに戻る');
		            retryLabel.color = '#ffffff';
		            retryLabel.x = 0;
		            retryLabel.y = 300;
		            retryLabel.font = '20px sans-serif';
		            scene.addChild(retryLabel);


		            retryLabel.addEventListener(Event.TOUCH_START, function(e) {

		                game_.replaceScene(createStartScene());
		            });


			return scene;
		};









		game_.replaceScene(createStartScene());

	}

	game_.start();
};
