var app = angular.module('WordScrambleApp', ['wordService']);
app.controller('wordCtrl', function($scope, word) {
    $scope.input = {text: ''};
    $scope.isCorrect = 0;
    $scope.points = 0;
    function getNewWord() {
        word.getWord(function(data) {
            $scope.word = data.word;
            $scope.scrambled = scramble(data.word);
        });
    }
    
    getNewWord();

    $scope.checkWord = function($event) {
        var text = $scope.input.text;
        var keyCode = $event.keyCode;
        if(keyCode == 13) {
            if(text == $scope.word) {
                $scope.isCorrect = 1;
                setTimeout(function(){
                    $scope.input.text = '';
                    getNewWord();
                    $scope.isCorrect = 0;
                    $scope.points++;
                    $scope.$apply();
                }, 1000);
            }
            else {
                $scope.isCorrect = -1;
            }
        }
        else if(keyCode == 8) {
            $scope.isCorrect = 0;
        }
    }
});

var scramble = function(word) {
    var letters = word.split("");
    for(var i = letters.length-1; i >= 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i+1));
        var letterAtIndex = letters[randomIndex];
        letters[randomIndex] = letters[i];
        letters[i] = letterAtIndex;
    }
    return letters.join("");
}