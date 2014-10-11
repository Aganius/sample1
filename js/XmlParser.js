var temp; //temporary variable to help find and save the xml tags in the hierarchy tree
var rbId = 1;
var cbId = 1;

$(document).ready(function(){


	function parse(document){
		$(document).find("MediaItem").each(function(){
			//temp = $(this).children().context.children;
			//console.log(temp.context.children[0].tagName); //Show the name of the tag. i.e: text from <text>This is a sample text</text>
			//console.log(temp.context.children[0].textContent); //Show the text of the childrens. i.e: This is a sample text from <text>This is a sample text</text>
			var name;
			temp = $(this).children().context.children;
			name = temp[0].tagName
			if (name === "text") { // finds the text tags in the xml file
				//console.log("text: " + temp[0].tagName);
					$("#content").append(
						'<div class="radiobutton">' +
						'<span class = "label label-info">' +
						temp[0].textContent +
						'</span>' +
						'</div>'
					);
			}
			else if (name === "radiobutton") { // finds the radiobutton tags in the xml file
				//console.log("radiobutton: " + temp[0].tagName);
				if (temp[1].textContent==="true") {
					$("#content").append(
						'<div class="radiobuttons">' +
						'<label for="RB' + rbId +'">' +
						'<input type="radio" name="radio-choice" value="' + rbId +'" id="RB' + rbId +'" checked="checked">' +
						temp[0].textContent +
						'</label>' +
						'</div>'
					);
				}
					else if (true) {
						$("#content").append(
							'<div class="radiobuttons">' +
							'<label for="RB' + rbId +'">' +
							'<input type="radio" name="radio-choice" value="' + rbId +'" id="RB' + rbId +'">' +
							temp[0].textContent +
							'</label>' +
							'</div>'
						)	
					};
				rbId++;
			}
			else if (name === "checkbox") { // finds the checkbox tags in the xml file
				//console.log("checkbox: " + temp[0].tagName);
				if (temp[1].textContent==="true") {
					$("#content").append(
						'<div class="checkboxes">' +
						'<label for="CB' + cbId +'">' +
						'<input type="checkbox" name="check-choice" value="' + cbId +'" id="CB' + cbId +'" checked="checked">' +
						temp[0].textContent +
						'</label>' +
						'</div>'
						);
				}
				else if (true) {
					$("#content").append(
						'<div class="checkboxes">' +
						'<label for="CB' + cbId +'">' +
						'<input type="checkbox" name="check-choice" value="' + cbId +'" id="CB' + cbId +'">' +
						temp[0].textContent +
						'</label>' +
						'</div>'
						);
				};
				cbId++;
				};
		});
	}
$.ajax({
		url: 'sample2.xml', // name of the file to parse
		dataType: "xml",
		success: parse,
		error: function(){alert("Error: Something went wrong");}
	});
});

$('#buttonSubmit').click(function() { //button that submits the selected options and says the selected items in an alert
	var selectedCBs;
	var selectedRB;
	var string = "";
	selectedRB = $("input:radio[name='radio-choice']:checked");
	string = string + $("label[for='" + selectedRB.attr('id') + "']").text() + "\n";
	selectedCBs = $("input[type=checkbox]:checked").toArray();
	for (var i = 0; i <= selectedCBs.length - 1; i++) {
		string = string + $("label[for='" + selectedCBs[i].id + "']").text() + "\n";
	};
	//console.log($("input:radio[name='radio-choice']:checked").attr('id'));
alert("You have selected: \n" + string);
});