$(document).ready(function() {
    $('#redBtn').on('click', whenIclickTheRedButton);
    $('#blueBtn').on('click', whenIclickTheBlueButton);
    $('#greenBtn').on('click', whenIclickTheGreenButton);
    $('#yellowBtn').on('click', WhenIclickTheYellowButton);
});

let redCount = 0;
function whenIclickTheRedButton() {
    redCount++;
    $('#redCount').text('Red Count: ' + redCount);
    $('#container').append('<div class="box red"></div>');
}



let blueCount = 0;
function whenIclickTheBlueButton() {
    blueCount++;
    $('#blueCount').text('Blue Count: ' + blueCount);
    $('#container').append('<div class="boxer blue"></div>');
}



let greenCount = 0;
function whenIclickTheGreenButton() {
    greenCount++;
    $('#greenCount').text('Green Count: ' + greenCount);
    $('#container').append('<div class="boxes green"></div>');
}



let yellowCount = 0;
function WhenIclickTheYellowButton() {
    yellowCount++;
    $('#yellowCount').text('Yellow Count: ' + yellowCount);
    $('#container').append('<div class="boxed yellow"></div>');
}

console.log(ColorBoxRocks);