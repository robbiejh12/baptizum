var csvlist = "";
var songarray = [];

$(document).ready(function(){
	
	$("#checkbox-play").click(function(){
		hideTab("checkbox");
		buildPlaylist();
	});
	
	$("#player-return").click(function(){
		hideTab("player");
		clearPlaylist();
	});
	
	$("#player-play").click(function(){
		
	});
	
	$("#player-back").click(function(){
		
	});
	
	$("#player-next").click(function(){
		
	});
	
	$("#player-stop").click(function(){
		
	});
	
});

function hideTab(x) {
	if (x == "checkbox") {
		$("#player-tab").removeClass("hidden").addClass("visible");
		$("#checkbox-tab").removeClass("visible").addClass("hidden");
	}
	else if (x == "player") {
		$("#checkbox-tab").removeClass("hidden").addClass("visible");
		$("#player-tab").removeClass("visible").addClass("hidden");
		clearPlaylist();
	}
}

function clearPlaylist() {
	songarray = [];
}

function buildPlaylist() {
	var checkboxes = document.getElementsByTagName("checkbox");
	for (i=0;i<checkboxes.length;i++) {
		if (checkboxes[i].checked) {
			loadDoc(checkboxes[i].id);
		}
	}
}

function loadDoc(doc) {
	var doc = doc + ".csv"
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			pushToArray(this.responseText);
		}
	};
	xhttp.open("GET", doc, true);
	xhttp.send();
}

function pushToArray(input) {
		songarray += $.csv.toObjects(input);
		console.log(songarray);
    }