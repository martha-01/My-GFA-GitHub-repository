let names = ["Zsuzsi", "Gyula", "Márti", "Péter", "Edit"];

names.forEach((name) => {
    $("ul").append("<li>name</li>");
    $("li:last").html(name);
});

let additionalBlock = {
    title: "Beillesztve JavaScripttel",
    text: "Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Király!"
  };

$("main").append("<h1 id='title'></h1>");
$("#title").html(additionalBlock.title);
$("main").append("<p>" + additionalBlock.text + "</p>");
