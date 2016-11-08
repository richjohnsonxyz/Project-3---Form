//Give focus to the first text field
$('#name').focus();

/* "Job Role" section of the form: reveal a text field when the 
"Other" option is selected from the "Job Role" drop down menu
Make sure you add an text input field
Use the id of "other-title" for the field
Add placeholder text of "Your Title" for the field */

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

/* "T-Shirt Info" section of the form: for the T-Shirt color menu, only display
 the options that match the design selected in the "Design" menu.
If the user selects "Theme - JS Puns" then the color menu should only display
 "Cornflower Blue," "Dark Slate Grey," and "Gold."
If the user selects "Theme - I ♥ JS" then the color menu should only display 
"Tomato," "Steel Blue," and "Dim Grey."
 */
var color;
 
$(document).ready(function(){ 
	$('#design').on('change', function() {
		color = $('#color').children();
		$(color).show();
			if ($('#design').val() === 'js puns') {
				var a = $(color)[3];
				var b = $(color)[4];
				var c = $(color)[5];
				$(a).hide();
				$(b).hide();
				$(c).hide();			
			} else if ($('#design').val() === 'heart js'){
				var e = $(color)[0];
				var f = $(color)[1];
				var g = $(color)[2];
				$(e).hide();
				$(f).hide();
				$(g).hide();
			}
		})
});

/* "Register for Activities" section of the form:
Some events are at the same time as others. If the user selects a workshop, 
don't allow selection of a workshop at the same date and time -- 
you should disable the checkbox and visually indicate that the workshop 
in the competing time slot isn't available.
When a user unchecks an activity, make sure that competing activities 
(if there are any) are no longer disabled.
As a user selects activities to register for, a running total is listed below 
the list of checkboxes. For example, if the user selects "Main conference" 
then Total: $200 should appear. If they add 1 workshop, the total should change
 to Total: $300.
 */
 
