$(document).ready(function(){
//1. When 'Submit' is clicked, add the contents of the textbox below the button in a h3 element.	
	$("#submitBtn").click(function() {
		var content = $("input:text").val();	
		$(("<h3>")+content+("</h3>")).insertAfter( ".btn" );
    });
	
//2. When the checkbox is clicked, reveal the hidden message...	
	$("input:checkbox").click(function() {
		$("h2").toggleClass("hidden");
	});

//3. Add a new cat to the table.	
	///??? Need Help
	$(".catTable").append($("<tr><td>Cheese</td><td>2</td><td>Hangry</td></tr>"));
	
//4. Make 'hangry' red and 'content' green	
	$("td:contains('Hangry')").css('color', 'red');
	$('td:contains("Content")').css('color', 'green');	
	
// 5.When clicked, only display cats weighing 10+ lbs	
	var catRows = $('#catTable tr');
	$("#HideFatCats").click(function() {
		var fatCats = catRows.filter('tr.fatCat').hide();
	});
	
//6. When clicked, uppercase all cat names
	$("#uppercase").click(function() {
		$('td:nth-child(1)').css('text-transform', 'uppercase');
	});

//7. Show and hide the table with this button.	
	$("#toggleTable").click(function() {
		$('#catTable').toggle();
	});
	
//8.Disable the input field, the checkbox, and the link to Google.
// .prop() will come in handy for the first one. Then, check out .preventDefault() for the link	
	$("input").prop("disabled",true);
	
	
	$('#chkToBePrevented').click(function(){
		return false;
	});
	
	
	$("a").click(function(e) {
		e.preventDefault();
	});
	
//9.Select the third option from the dropdown, and append it to the page. Try using .find() here.
	
	var content = $(".dropdown").find('option:nth-child(3)').text();
		$(("<h3>")+ content +("</h3>")).insertAfter(".dropdown");

		
	
//10. Alert the user how many items are in the list. Let's iterate over those children again. 

	
	
//11. Create buttons that add and remove list items.
		
	var button = $('<button>Add List Items</button>').click(function () {
         $('ul li').add();});
    $(".newButton1").append(button);
	
	var button2 = $('<button>Remove List Items</button>').click(function () {
         $('ul li').add();
    });
    $(".newButton2").append(button2)
	//12. Create a counter that displays the length of the list.
	
});
