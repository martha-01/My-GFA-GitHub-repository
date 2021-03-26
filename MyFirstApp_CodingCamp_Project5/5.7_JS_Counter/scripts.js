$('#plus-1').click(() => {
    $('#counter').text(Number($('#counter').text())+1);
});
$('#minus-1').click(() => {
    $('#counter').text(Number($('#counter').text())-1);
});

$('#plus-10').click(() => {
    $('#counter').text(Number($('#counter').text())+10);
});
$('#minus-10').click(() => {
    $('#counter').text(Number($('#counter').text())-10);
});

$('#multiplying-by-2').click (() => {
    let input = Number($('#counter').text());
    $('#counter').text(input*2);
});
$('#dividing-by-2').click(() => {
    let input = Number($('#counter').text());
    $('#counter').text(input/2);
});

$('#multiplying-by-3').click(() => {
    let input = Number($('#counter').text());
    function multiplyingBy3(num) {
        return num*3
    };
    $('#counter').text(multiplyingBy3(input));
});
$('#dividing-by-3').click(() => {
    let input = Number($('#counter').text());
    function dividingBy3(num) {
        return num/3
    };
    $('#counter').text(dividingBy3(input));
});

$('#squaring').click(() => { 
    let input = Number($('#counter').text());    
    function square(num) {
        let result = num**2;
        $('#counter').text(result);
    };
    square(input);
});
$('#square-root').click(() => {
    let input = Number($('#counter').text());
    function squareRoot(num) {
        let result = Math.sqrt(num);
        $('#counter').text(result);
    };
    squareRoot(input);
});

$('#negating').click(() => {
    $('#counter').text(Number($('#counter').text()) * -1);
})

$('#zero').click(() => {
    $('#counter').text('0');
});