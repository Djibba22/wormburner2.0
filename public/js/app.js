
/**
 * Created by jarodmoser on 10/13/15.
 */
var t = "top";
var b = "bottom";
var tab = t;
var inning = 1;
var test = tab + inning;
var inningScore = 0;
var teamAScore = 0;
var teamBScore = 0;
var scoreBoardRestore = {};

function gameNew() {
	history.go(0);
	tab = t;
	inning = 1;
	test = tab + inning;
	inningScore = 0;
	teamAScore = 0;
	teamBScore = 0;
	updateScoreBoard();
}

function save() {
	localStorage.setItem("inning", inning);
	localStorage.setItem("test", test);
	localStorage.setItem("teamAScore", teamAScore);
	localStorage.setItem("teamBScore", teamBScore);
	localStorage.setItem("inningScore", inningScore);
	localStorage.setItem("tab", tab);
}

function restore() {
	document.getElementById(test).className = "col-xs-1 table-bordered";
	document.getElementById(tab).className = "col-lg-12";
	tab = localStorage.getItem("tab");
	inning = +localStorage.getItem("inning");
	test = localStorage.getItem("test");
	inningScore = +localStorage.getItem("inningScore");
	teamAScore = +localStorage.getItem("teamAScore");
	teamBScore = +localStorage.getItem("teamBScore");
	document.getElementById(test).className = "col-xs-1 table-bordered highlight";
	document.getElementById(tab).className = "col-lg-12 highlight";
	updateScoreBoard();

}

function inningUp() {
	scoreBoardRestore[test] = inningScore;
	inningScore = 0;
	document.getElementById(test).className = "col-xs-1 table-bordered";
	document.getElementById(tab).className = "col-lg-12";
	var nth;
	var display;
	var ending = function () {
		if (inning === 1) {
			nth = "st";
		} else if (inning === 2) {
			nth = "nd";
		} else if (inning === 3) {
			nth = "rd";
		} else {
			nth = "th";
		}
	};
	if (tab === t) {
		tab = b;
		ending();
		display = tab.replace(/./, "B") + " of the " + inning + nth;
	} else {
		inning++;
		tab = t;
		ending();
		display = tab.replace(/./, "T") + " of the " + inning + nth;
	}
	test = tab + inning;
	document.getElementById(test).className = "col-xs-1 table-bordered highlight";
	document.getElementById(tab).className = "col-lg-12 highlight";
	document.getElementById("inning").innerHTML = display;
}

function inningDown() {
	if (test === "top1") {
		return;
	}
	scoreBoardRestore[test] = inningScore;
	document.getElementById(test).className = "col-xs-1 table-bordered";
	document.getElementById(tab).className = "col-lg-12";
	var nth;
	var display;
	var ending = function () {
		if (inning === 1) {
			nth = "st";
		} else if (inning === 2) {
			nth = "nd";
		} else if (inning === 3) {
			nth = "rd";
		} else {
			nth = "th";
		}
	};
	if (tab === t) {
		tab = b;
		inning--;
		ending();
		display = tab.replace(/./, "B") + " of the " + inning + nth;
	} else {
		tab = t;
		ending();
		display = tab.replace(/./, "T") + " of the " + inning + nth;
	}
	test = tab + inning;
	inningScore = +scoreBoardRestore[test];
	document.getElementById(test).className = "col-xs-1 table-bordered highlight";
	document.getElementById(tab).className = "col-lg-12 highlight";
	document.getElementById("inning").innerHTML = display;
}

function updateScoreBoard() {
	document.getElementById(test).innerHTML = `<h2>${inningScore}</h2>`;
	document.getElementById("scoreA").innerHTML = `<h1>${teamAScore}</h1>`;
	document.getElementById("scoreB").innerHTML = `<h1>${teamBScore}</h1>`;
	document.getElementById("scoreA2").innerHTML = `<h1>${teamAScore}</h1>`;
	document.getElementById("scoreB2").innerHTML = `<h1>${teamBScore}</h1>`;
	save();
};

function scoreUp() {
	inningScore++;
	if (tab === t) {
		teamAScore++;
	} else {
		teamBScore++;
	}

	updateScoreBoard();
}

function scoreDown() {
	if (inningScore === 0) {
		return;
	}
	inningScore--;
	if (tab === t) {
		teamAScore--;
	} else {
		teamBScore--;
	}

	updateScoreBoard();
}
