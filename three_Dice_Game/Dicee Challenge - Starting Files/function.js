// dice-left
var dice_no_one = (Math.floor((Math.random()*6)))+1;
var random_image_one = "images/dice" + dice_no_one + ".png";
document.querySelectorAll(".dice-img")[0].setAttribute("src",random_image_one);

// dice-right
var dice_no_two = (Math.floor((Math.random()*6)))+1;
var random_image_two = "images/dice" + dice_no_two + ".png";
document.querySelectorAll(".dice-img")[1].setAttribute("src",random_image_two);

// Printing the answer
if(dice_no_one>dice_no_two){
    document.querySelector(".crown-img-one").style.visibility="visible";
    document.querySelector("h2").innerHTML="Player 1 &nbsp; WINS!!!!!";
}
else if(dice_no_one<dice_no_two){
    document.querySelector(".crown-img-two").style.visibility="visible";
    document.querySelector("h2").innerHTML="Player 2 &nbsp; WINS!!!!!";
}
else{
    document.querySelector("h2").innerHTML="DRAWW!!!!!";
}