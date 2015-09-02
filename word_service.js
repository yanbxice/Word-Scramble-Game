var app = angular.module('wordService', []);
app.factory('word', function($http) {
    return {
        getWord: function(callback) {
            return $http.get('http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=4&maxLength=8&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5')
            .success(callback);
        }
    };
});