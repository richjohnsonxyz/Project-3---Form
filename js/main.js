//This Script is Organized Based on the Top of the Webpage Downwards

//-------------------Basic Info----------------
//Give focus to the first text field
$('#name').focus();

//----------------Job Role---------------------
//Hide "Other" option
$('#other-title').hide();
//Event listener if "Other" is selected - show it
$('#title').on('change', function() {
	if ($('#title').val() === 'other') {
		$('#other-title').show();
	} else {
		$('#other-title').hide();
	}
});

//-----------------T-Shirt Info----------------

//Hide the T-Shirt color until user selects a design 
var color;
$('#colors-js-puns').hide();

//Show T-Shirt colors based on which design theme was selected
$(document).ready(function(){ 
	$('#design').on('change', function() {
		var empty = $(color)[0];
		color = $('#color').children();
		$(color).show();
			if ($('#design').val() === 'js puns') {
				$('#colors-js-puns').show();
				var a = $(color)[4];
				var b = $(color)[5];
				var c = $(color)[6];
				$(empty).hide();
				$(a).hide();
                $(b).hide();
                $(c).hide();
				//reset value
                $('#color').val('cornflowerblue');			
			} else if ($('#design').val() === 'heart js'){
				$('#colors-js-puns').show();
				var e = $(color)[1];
				var f = $(color)[2];
				var g = $(color)[3];
				$(empty).hide();
				$(e).hide();
                $(f).hide();
                $(g).hide();
                //reset value
                $('#color').val('tomato');
			} else {
				$('#colors-js-puns').hide();
				$('#color').val('empty');
			}
			
		});
});

//----------------------Activities---------------------

var total = 0;
 // Event Listener Function - Checks if activities are selected or not 
 // and if so add the price of the activity to the total
 // also don't the user from registering for activities that conflict in time
$(document).ready(function(){ 
	$('.activities input[type="checkbox"]').on('change', function() {
	  var a = this.name;
	  var b = this.checked;
	  //Main Conference
	  if ( a == 'all' && b === true) {
		total += 200;
	  } else if (a == 'all' && b === false) {
		total -= 200;
	  }
	  //JS Frameworks
	  if ( a == 'js-frameworks' && b === true) {
		total += 100;
		$('.activities input[name="express"]').prop('disabled', true).parent().addClass('disabled');
	  } else if (a == 'js-frameworks' && b === false) {
		total -= 100;
		$('.activities input[name="express"]').prop('disabled', false).parent().removeClass('disabled');
	  }
	  //JS Libraries
	  if ( a == 'js-libs' && b === true) {
		total += 100;
		$('.activities input[name="node"]').prop('disabled', true).parent().addClass('disabled');
	  } else if (a == 'js-libs' && b === false) {
		total -= 100;
		$('.activities input[name="node"]').prop('disabled', false).parent().removeClass('disabled');
	  }
	  //Express
	  if ( a == 'express' && b === true) {
		total += 100;
		$('.activities input[name="js-frameworks"]').prop('disabled', true).parent().addClass('disabled');
	  } else if (a == 'express' && b === false) {
		total -= 100;
		$('.activities input[name="js-frameworks"]').prop('disabled', false).parent().removeClass('disabled');
	  }
	  //Node.js
	  if ( a == 'node' && b === true) {
		total += 100;
		$('.activities input[name="js-libs"]').prop('disabled', true).parent().addClass('disabled');
	  } else if (a == 'node' && b === false) {
		total -= 100;
		$('.activities input[name="js-libs"]').prop('disabled', false).parent().removeClass('disabled');
	  }
	  //Build tools
	  if ( a == 'build-tools' && b === true) {
		total += 100;
	  } else if (a == 'build-tools' && b === false) {
		total -= 100;
	  }
	  //NPM
	  if ( a == 'npm' && b === true) {
		total += 100;
	  } else if (a == 'npm' && b === false) {
		total -= 100;
	  }
	  //Display the Total Amount
	  $('#total').remove();
	  $('.activities').append('<h2 id="total">Total: $' + total + '</h2>');
	});
});

//----------------Payment Info-----------------------

//Show credit card info. - hide other payment options
$('#credit-card').nextAll().hide();

$(document).ready(function(){ 
	$('#payment').on('change', function() {
		var a = $('#credit-card');
		//show only paypal option
		if ($('#payment').val() === 'paypal') {
			$(a).hide();
			$(a).next().show();
			$(a).siblings(':last').hide();
		//show only bitcoin option
		} else if ($('#payment').val() === 'bitcoin'){
			$(a).hide();
			$(a).next().hide();
			$(a).siblings(':last').show();
		//show default value - credit card option 
		} else if ($('#payment').val() === 'credit card'){
			$(a).show();
			$(a).next().hide();
			$(a).siblings(':last').hide();
		} else {
			$(a).show();
			$(a).next().hide();
			$(a).siblings(':last').hide();
		}
	}); 
});	

//-----------------Form Validation----------------------//

//Credit Card Information

//Only numbers can be entered
 function numbersOnly (e) {
	//Only allow numbers
	if (e.which != 8 && e.which !== 0 && (e.which < 48 || e.which > 57)) {
		return false;
	} 	
 }
 
 //Set a max length of characters for Credit Card, Zip Code, CVV
$('#cvv').attr('maxlength', '3');
$('#zip').attr('maxlength', '5');
$('#cc-num').attr('maxlength', '16');
	  
//Event listeners for Credit Card Information - Only Allow Numbers
$('#cvv, #zip, #cc-num').keyup(numbersOnly).keypress(numbersOnly).focus(numbersOnly);

//Validation Function - Name, Email, T-Shirt Color, Activities, Payment, Credit Card Info
$(document).ready(function() {
	$('button[type="submit"]').click(function() {
		var error = false;
		//hide error message
		$(".error").hide();
		//Check name field
		if ($('#name').val().length <= 2) {
			$('label[for="name"]').after('<span class="error invalid">Please enter your name.</span>').addClass('invalid');
			error = true;
		} else {
			$('label[for="name"]').removeClass('invalid');
		}
		
		//Check email is present and valid		
		var emailReg =  /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		var email = $('#email').val();
		
		if ( email === '') {
			$('label[for="email"]').after('<span class="error invalid">Please enter your email address.</span>').addClass('invalid');
			error = true;
			
		}  else if (!emailReg.test(email)) {
			$('label[for="email"]').after('<span class="error invalid">Please enter a valid email address.</span>').addClass('invalid');
			error = true;
		} else {
			$('label[for="email"]').removeClass('invalid');
		}
		
		//Check if a T-Shirt Color was selected
		if ($('#color').val() === 'empty') {
			$('.shirt legend').append('<p class="error invalid msg" ">Please select a design</p>').addClass('invalid');
			error = true;
		} else {
			$('.shirt legend').removeClass('invalid');
		}
		
		//Check at least one activity is selected
		if ($('.activities input[type="checkbox"]').prop('checked') === false) {
			$('.activities legend').append('<p class="error invalid msg">Please register for at least one activity</p>').addClass('invalid');
			error = true;
		} else {
			$('.activities legend').removeClass('invalid');
		}
		
		//Check if a payment option is selected
		if ($('#payment').val() === 'select_method') {
			$('label[for="payment"]').prev().append('<p class="error invalid msg">Please select a payment option.</p>').addClass('invalid');
			error = true;
		} else {
			$('label[for="payment"]').prev().removeClass('invalid');
		}
		
		//Check credit card information
		if ($('#payment').val() === 'credit card' || $('#payment').val() === 'select_method') {
			if ($('#cc-num').val().length != 16) {
				$('label[for="cc-num"]').addClass('invalid');
				error = true;
			} else {
				$('label[for="cc-num"]').removeClass('invalid');
			}
			
			if ($('#zip').val().length != 5) {
				$('label[for="zip"]').addClass('invalid');
				error = true;
			} else {
				$('label[for="zip"]').removeClass('invalid');
			}
			
			if ($('#cvv').val().length != 3) {
				$('label[for="cvv"]').addClass('invalid');
				error = true;
			} else {
				$('label[for="cvv"]').removeClass('invalid');
			}
		}
		//If the form has any errors prevent the button from submitting
		if (error === true) {
			event.preventDefault();
			return false;
		}
			
	});
});




 

