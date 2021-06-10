function image (src, imageTitle, caption) {
    this.src = src;
    this.imageTitle = imageTitle;
    this.caption = caption;
};
let images = [
    new image("images/desert.jpg", "Desert", "I cared for you in the wilderness, the dry desert where no water was.  - Hosea 13,5"),
    new image("images/cross.JPG", "Cross", "He has destroyed what was against us, a certificate of indebtedness expressed in decrees opposed to us. He has taken it away by nailing it to the cross.  - Col 2,14"),
    new image("images/horse.JPG", "Horse", "Do not be like an unintelligent horse or mule, which will not obey you unless they are controlled by a bridle and bit.  - Psalm 32,9"),
    new image("images/frostPatterns.JPG", "Frost Patterns", "The breath of God produces ice, and the breadth of the waters freeze solid.  - Job 37,10"),
    new image("images/lamp.JPG", "Lamp", "Your word is a lamp to walk by, and a light to illumine my path.  - Psalm 119,105"),
    new image("images/raindrops.JPG", "Raindrops", "My teaching will drop like the rain, my sayings will drip like the dew, as rain drops upon the grass, and showers upon new growth.  - Deut 32,2"),
    new image("images/river.JPG", "River"),
    new image("images/creek.JPG", "Creek", "If anyone is thirsty, let him come to me, and the one who believes in me drink. Just as the scripture says, 'From within him will flow rivers of living water'. - John 7,37-38"),
    new image("images/red_field.JPG", "Red Field"),
    new image("images/swan.JPG", "Swan"),
    new image("images/tower.JPG", "Tower"),
    new image("images/yellowFlower.JPG", "Yellow Flower"),
    new image("images/door.jpg", "Door", "Listen! I am standing at the door and knocking! If anyone hears my voice and opens the door I will come into his home and share a meal with him, and he with me. - Rev 3,20")
];

//Here we dray the small white triangle that appears above the thumbnail of the current image:
function draw() {
    for(let i=0; i<13; i++){
        let canvas = document.getElementById("canvas"+i);
        if (canvas.getContext) {
            let ctx = canvas.getContext("2d");
            ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
            ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
            ctx.beginPath();
            ctx.moveTo(50, 13);
            ctx.lineTo(42, 25);
            ctx.lineTo(58, 25);
            ctx.fill();
        }
    }
}

let indexOfCurrentImage = 0;

let pic = document.getElementById("pic");

function loadPhoto(i){
    indexOfCurrentImage = i;
    pic.src = images[i].src;
    document.getElementById("imageTitle").innerHTML = images[i].imageTitle;
    document.getElementById("caption").innerHTML = images[i].caption;
    [...document.querySelectorAll("div#thumbnails > span > img")].map(elem => elem.classList.remove("active_thumbnail"));
    document.getElementById(i).classList.add("active_thumbnail");
    [...document.getElementsByTagName("canvas")].map(elem => elem.style.visibility="hidden");
    document.getElementById("canvas"+i).style.visibility="visible";
    console.log(indexOfCurrentImage);
}

//Here we make the 13 thumbnail-images visible and clickable:
for(let a=0; a<images.length; a++){
    document.getElementById(a).src = images[a].src;
    document.getElementById(a).addEventListener("click", function(){
        loadPhoto(a);
    });
    document.getElementById("thumbnail"+a).style.position = "relative";
    document.getElementById("title"+a).innerHTML = images[a].imageTitle;
    document.getElementById("title"+a).style.visibility = "hidden";
    document.getElementById(a).addEventListener("mouseenter", function() {
        document.querySelector("#title"+a).style.visibility = "visible";
    });
    document.getElementById(a).addEventListener("mouseleave", function() {
        document.querySelector("#title"+a).style.visibility = "hidden";
    });
};


let navigation_right = document.querySelector("#navigation_right");
navigation_right.addEventListener("click", function(){
    if(indexOfCurrentImage<0 || indexOfCurrentImage>=images.length-1)
        loadPhoto(0);
    else
        loadPhoto(indexOfCurrentImage+1);
});

let navigation_left = document.querySelector("#navigation_left");
navigation_left.addEventListener("click", function(){
    if(indexOfCurrentImage<=0 || indexOfCurrentImage>images.length-1)
        loadPhoto(images.length-1);
    else
        loadPhoto(indexOfCurrentImage-1);
});