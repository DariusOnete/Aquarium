
$(document).ready(function(){

    startMoving("#fish1Id");
    startMoving("#fish2Id");


    $(window).click(function(event) {
        $("#fish1Id").stop(true);
        $("#fish1Id").animate({"left" : event.pageX, "top" : event.pageY}, 2500);
        startMoving("#fish1Id");
    });

    $("#fish1Id").on("dblclick", function(){
        $(this).stop(true);
        current_h = $(this).height();
        current_w = $(this).width();
        $(this).animate({width:(current_w*2), height:(current_h*2)},2000);
        $(this).animate({width:current_w, height:current_h},500);
        startMoving("#fish1Id");
    })

    $("#fish2Id").mouseover(function(){//randomly moving the blue fish on screen
        $(this).stop(true);
        $(this).animate({
            left:(Math.random()*$(window).width()-20),
            top:(Math.random()*$(window).height()-20),  
        });

        startMoving("#fish2Id");

    }); 


    $("#bubble1Id").click(function(){
        $(this).stop();
    });

    $("#bubble2Id").click(function(){
        $(this).stop();
    });

    $("#bubble3Id").click(function(){
        $(this).stop();
    });

    bubbles("#bubble1Id");
    bubbles("#bubble2Id");
    bubbles("#bubble3Id");

});


function startMoving(id){
    var h = $(window).height() - $(id).height();
    var w = $(window).width() - $(id).width();

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    $(id).animate({ top: nh, left: nw }, 3000, function(){
        startMoving(id);
    }); 
}

var windowWidth = $(window).width();
var windowHeight = $(window).height();

function generateRandomLeft() {
    var x = Math.floor(Math.random() * windowWidth);
    return x;
}

function generateRandomTime() {
    var y = Math.floor(Math.random() * 10000);
    while(y < 5000){
        y = Math.floor(Math.random() * 10000);
    }
    return y;
}

function bubbles(id){
    for(i=0; i<100; i++){
        for(var i=0; i<=windowHeight; i++){
            $(id).animate({left: generateRandomLeft()}, 10);
            $(id).animate({top: i-100}, generateRandomTime());
            $(id).animate({top: windowHeight}, 1);       
        }
    }
}

$(document).ready(function(){
    
    startMoving("#myBox");
});

function startMoving(id){
    var h = $(window).height() - $(id).height();
    var w = $(window).width() - $(id).width();

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    $(id).animate({ top: nh, left: nw }, 3000, function(){
        startMoving(id);
    }); 
}
