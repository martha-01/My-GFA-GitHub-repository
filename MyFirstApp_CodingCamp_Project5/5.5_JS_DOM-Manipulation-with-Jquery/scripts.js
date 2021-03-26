$('main').append(
    '<h3>Hello World!</h3>'
);

let names = ['Kati', 'Emese', 'Márti', 'Eszter'];
$('main').append('<ul></ul>');
names.forEach((name) => {
    $('ul:last ').append('<li></li>');
    $('li:last').text(name);
});
$('ul:nth-of-type(2) li:nth-of-type(3)').css('font-weight', 'bold');

let additionalBlock = {
    title: "Beillesztve JavaScripttel",
    text: "Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Király!"
}

$('main').append('<h1></h1><p></p>');
$('h1:last').text(additionalBlock['title']);
$('p:last').text(additionalBlock['text']);