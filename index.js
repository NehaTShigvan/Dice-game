var randomNumber1 = Math.floor(Math.random()*6) ;
var randomNumber2 = Math.floor(Math.random()*6) ;

var imgList = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png",];

var image1 = imgList[randomNumber1];  //instead of list , can use concatenation for selecting img
document.querySelector(".img1").setAttribute("src",image1);

var image2 = imgList[randomNumber2];
document.querySelector(".img2").setAttribute("src",image2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "Player 1 wins!"
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent = "Player 2 wins!"
}
else{
    document.querySelector("h1").textContent = "Draw!"
}
