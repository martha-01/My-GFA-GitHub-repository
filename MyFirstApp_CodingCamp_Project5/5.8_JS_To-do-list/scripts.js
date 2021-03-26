$('label').click(() => {
    let newItem = $('input').text();
    $('ul').append('<li></li>');
    $('li:last').text(newItem);
    $('input').text('');
});