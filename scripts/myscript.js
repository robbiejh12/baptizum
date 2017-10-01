console.log("version 1");
var csvlist = "";
var songarray = [];
var played = [];

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
		var number = 0;
		var len = songarray.length;
		console.log(len);
		do {
			number = Math.floor((Math.random() * len));
		}
		while (played.includes(number));
		console.log(number);
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
	}
}

function clearPlaylist() {
	songarray = [];
	played = [];
}

function buildPlaylist() {
	var rpms = document.getElementsByClassName("rpm");
	var files = [];
	for (i=0;i<rpms.length;i++) {
		if (rpms[i].checked) {
			var file = rpms[i] + '.csv';
			files.push(file);
		}
	}
	loadFiles(files);
}

function loadFiles(files) {
	for (i=0;i<files.length;i++) {
		$.ajax({
			url: files[i],
			method: 'get',
			success: function(data){
				processcsv(data);
			}
		});
	}
}

function processcsv(input) {
//	var songs = $.csv.toObjects(input);
//	songarray += songs;
	console.log(input);
}