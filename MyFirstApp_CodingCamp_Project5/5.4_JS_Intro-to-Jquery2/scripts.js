let color = 'purple';
let number = 10;
let word = 'cool';
$(".first-box").css('background-color', color);
function changeText(num) {
    if (number > 100) {
        $(".second-box").text('wow, de nagy szám');
    }
    else {
        $(".second-box").text('ez csak egy közönséges szám');
    }
}
changeText(number);
function changeText2(w) {
    if(w === 'cool') {
        $(".third-box").text('A DOM ereeje');
    }
    else {
        $(".fourth-box").text('A DOM ereeje');
    }
}
changeText2(word);