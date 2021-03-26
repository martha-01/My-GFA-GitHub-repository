//Task 1:

$('#button-No1').click(() => {
    console.log("Igen, most rámkattintottál!");
});

$('#button-No2').click(() => {
    $('#button-No1').html('<p style="font-size: 15px;">Upsz, rossz helyre kattintottál. :-(</p>');
})

$('#button-No3').click(() => {
    $('button').css('background-color', 'green');
});


//Task 2:

$('header').append('<input type="text" value="blue">');
$('input').css({"height": "50px", "margin-top": "100px", "margin-left": "300px", "padding-left": "20px", "font-size": "20px"});

$('#button-No3').one('click', () => {
    let inputValue =  $('input').val();
    $('button#button-No3').css("background-color", inputValue);
});
