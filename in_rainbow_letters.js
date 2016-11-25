var headingID = document.getElementById("title");
var heading = headingID.innerHTML;
var letters = heading.split("");
var newSpan = ""

var IDs = ["l1", "l2", "l3", "l4", "l5",
			   "l6", "l7", "l8", "l9", "l10", "l11"];

var color_ct = 0
console.log(letters.length);

for (var i = 0; i < letters.length; i++) {
	/* Wrap colors */
	if (color_ct == 10) {
		color_ct = 0;
	}

	if (letters[i] == ' ') {
		newSpan += "<span>" + letters[i] + "<\/span>";
		continue;
	}

	newSpan += "<span id=" + IDs[color_ct] + ">" + letters[i] + "<\/span>";
	color_ct += 1;
}

headingID.innerHTML = newSpan;

var headingID = document.getElementById("copyright");
var heading = headingID.innerHTML;
var letters = heading.split("");
var newSpan = ""

var IDs = ["l1", "l2", "l3", "l4", "l5",
			   "l6", "l7", "l8", "l9", "l10", "l11"];

var color_ct = 0
console.log(letters.length);

for (var i = 0; i < letters.length; i++) {
	/* Wrap colors */
	if (color_ct == 10) {
		color_ct = 0;
	}

	if (letters[i] == ' ') {
		newSpan += "<span>" + letters[i] + "<\/span>";
		continue;
	}

	newSpan += "<span id=" + IDs[color_ct] + ">" + letters[i] + "<\/span>";
	color_ct += 1;
}

headingID.innerHTML = newSpan;
