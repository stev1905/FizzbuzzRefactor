$(document).ready(function(){

function getnum(){

num = $('#text').val();

	for (game=1; game<=num; game++){
		if((game % 3 === 0) && (game % 5 === 0)){
			$('body').append('<font color="red"> fizz</font> <font color="green">buzz</font>  <br>');
		}
		else if (game % 5 === 0){
			$('body').append('<font color="red">fizz</font> <br>');
		}
			else if (game % 3 === 0){
		$('body').append('<font color="green">buzz</font> <br>');
		}	
		else{
		$('body').append(game + '<br>');
		}	
	}
	$('#text').val(' ');
}

$('#submit').click(function(){

		return getnum();

	});	
	$('#text').keypress(function(e){
      	if(e.which == 13){  
      	return getnum();
  	}
});
});