let color = "purple";
let number = 10;
let word = "cool";
$(".redBackground",).css("background", color);
if(number>100){
    $(".yellowBackground").text("wow, de nagy szám");
}
else{
    $(".yellowBackground").text("ez csak egy közönséges szám");
}
if(word="cool"){
    $(".lightBlueBackground").text("A DOM Ereje");
}
else{
    $(".mediumBlueBackground").class("A DOM Ereje");
}
$(".redBackground").html("Ez a <em>lila</em> hátterű elem.");
$('main').prepend('<p class="redBackground whiteFonts">North</p>');