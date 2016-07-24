app.controller('RPSCtrl', function($scope) {
	//Init scores and scope
	$scope.player = 0;
	$scope.computer = 0;
	$scope.result = "";
	let plays = ['rock', 'paper', 'scissors'];

	$scope.playRock = function() {
		$scope.result = compare(getComputerPlay(), plays.indexOf('rock'));
	};

	$scope.playPaper = function() {
		$scope.result = compare(getComputerPlay(), plays.indexOf('paper'));
	};

	$scope.playScissors = function() {
		$scope.result = compare(getComputerPlay(), plays.indexOf('scissors'));
	};

	var mod = function(a, b) {
    c = a % b;
    return (c < 0) ? c + b : c;
	};

	var compare = function(computer, player) {
		if (computer === player){
			return "tie :|";
		}
		if (mod((computer - player), plays.length) < plays.length / 2) {
			$scope.computer++;
			return "Computer win with " + plays[computer] + " :(";
		}
		$scope.player++;
		return "You win ! Computer played with " + plays[computer] + " :)";
	};

	var getComputerPlay = function() {
		return Math.floor(Math.random() * plays.length);
	};

});
