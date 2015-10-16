$(document).ready(function(){
resizeDiv();
});

$(window).resize(function() {

$(‘#topJumbotron’).css(‘height’, window.innerHeight+’px’);

});
