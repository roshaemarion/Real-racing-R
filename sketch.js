var ball;
var database;
var pos;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database = firebase.database();

    var ballref = database.ref('ball/position')
    ballref.on("value",readposition,showerror)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writeposition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writeposition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writeposition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writeposition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
function readposition(data){
    pos=data.val()
    ball.x=pos.x;
    ball.y=pos.y;
}
function showerror(){
    console.log("error");
}
function writeposition(x,y){
    var wriposref = database.ref('ball/position')
    wriposref.set({
        x:pos.x+x,
        y:pos.y+y
    })
}

