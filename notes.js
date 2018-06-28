var show1 = true;
var show2 = true;
var show3 = true;
var show4 = true;
var show5 = true;

console.log("kausygdifh");

$(".panel-heading1").click(function() {
	if(show1){
		show1 = false;
		$(".note1").slideUp(1000);
	} else {
		show1 = true;
		$(".note1").slideDown(1000);
	}
});

$(".panel-heading2").click(function() {
	if(show2){
		show2 = false;
		$(".note2").slideUp(1000);
	} else {
		show2 = true;
		$(".note2").slideDown(1000);
	}
});

$(".panel-heading3").click(function() {
	if(show3){
		show3 = false;
		$(".note3").slideUp(1000);
	} else {
		show3 = true;
		$(".note3").slideDown(1000);
	}
});

$(".panel-heading4").click(function() {
	if(show4){
		show4 = false;
		$(".note4").slideUp(1000);
	} else {
		show4 = true;
		$(".note4").slideDown(1000);
	}
});

$(".panel-heading5").click(function() {
	if(show5){
		show5 = false;
		$(".note5").slideUp(1000);
	} else {
		show5 = true;
		$(".note5").slideDown(1000);
	}
});