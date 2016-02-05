
var balls = [];

window.onload = function(){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext('2d');

	canvas.width = 1200;
	canvas.height = 800;

	for(var i = 0 ; i < 100 ; i ++ ){
		var R = Math.floor( Math.random() * 255);
		var G = Math.floor( Math.random() * 255);
		var B = Math.floor( Math.random() * 255);
		var r = Math.random() * 50 + 20;

		var aball = {
			color : "rgb(" + R + "," + G + "," + B + ")",
			r : r,
			X : Math.random() * (canvas.width - 2*r) + r,
			Y : Math.random() * (canvas.height - 2*r) + r,
			vX: (Math.random() * 5 + 5) * Math.pow(-1 , Math.floor(Math.random()*100)),
			vY: (Math.random() * 5 + 5) * Math.pow(-1 , Math.floor(Math.random()*100))
		}
		balls[i] = aball;

	}
	setInterval(
		function(){
			drawBalls(context);
			updateBalls(canvas.width , canvas.height);
		},50
	)

}

function drawBalls(context){
	var canvas = context.canvas;
	context.clearRect(0 , 0 , canvas.width , canvas.height);
	context.globalCompositeOperation = "xor";
	var len = balls.length;
	for(var i = 0 ; i < len ; i ++ ){

		context.fillStyle = balls[i].color;
		context.beginPath();
		context.arc(balls[i].X , balls[i].Y , balls[i].r , 0 , 2 * Math.PI);
		context.closePath();
		context.fill();

		
	}
}

function updateBalls(Width , Height){
	var len = balls.length;

	for(var i = 0 ; i < len ; i ++){
		balls[i].X += balls[i].vX;
		balls[i].Y += balls[i].vY;

		if(balls[i].X < balls[i].r){
			balls[i].X = balls[i].r;
			balls[i].vX = - balls[i].vX;
		}
		if(balls[i].X + balls[i].r > Width){
			balls[i].X = Width - balls[i].r;
			balls[i].vX = - balls[i].vX;
		}
		if(balls[i].Y < balls[i].r){
			balls[i].Y = balls[i].r;
			balls[i].vY = - balls[i].vY;
		}
		if(balls[i].Y + balls[i].r > Height){
			balls[i].Y = Height - balls[i].r;
			balls[i].vY = - balls[i].vY;
		}
	}
}
