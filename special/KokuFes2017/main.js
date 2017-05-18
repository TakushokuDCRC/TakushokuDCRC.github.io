window.addEventListener("load", function(){
    let canvas = document.getElementById("word_art");
    canvas.width = 500;
    canvas.height = 300;
    let ctx = canvas.getContext("2d");
    let img = new Image();
    let timer, rnd;
    function drawRotatedImage(i, x, y, r){
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.translate(x, y);
        ctx.rotate(r);
        ctx.drawImage(i, 0, 0, img.width, img.height, -i.width / 4, -i.height / 4, i.width / 2, i.height / 2);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
    img.addEventListener("load", function(){
        timer = setInterval(function(){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            rnd = (((Math.random() * 31) | 0) - 15) * Math.PI / 180;
            drawRotatedImage(img, canvas.width / 2, canvas.height / 2, rnd);
        }, 1000 / 30);
    });
    img.src = "img/working.png";
});