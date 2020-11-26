var ball;
var database;
var position;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    console.log(database);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballposition=database.ref("ball/position");
    console.log(ballposition);
    ballposition.on("value", readPosition, showError)
}

function draw(){
    background("black");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
//   ball.x = ball.x + x;
// ball.y = ball.y + y;
database.ref("ball/position").set({
x:position.x + x,
y:position.y+y
});
}

function readPosition(data){
position=data.val();
console.log(position);
ball.x=position.x;
ball.y=position.y;
}
function showError(){

}



