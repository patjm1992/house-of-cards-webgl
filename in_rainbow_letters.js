/* var h1_ID = document.getElementById("big-title"); */
var h2_ID = document.getElementById("little-title");
var heading = h2_ID.innerHTML;
var letters = heading.split("");
var newSpan = ""

var IDs = ["l1", "l8", "l4", "l3", "l5", "l10",
			   "l6", "l1", "l8", "l4"];

var color_ct = 0


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
	console.log(newSpan);
	color_ct += 1;
}

/* h1_ID.innerHTML = newSpan; */
h2_ID.innerHTML = newSpan;

