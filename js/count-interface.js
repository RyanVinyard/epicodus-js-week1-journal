var Entry = require('./../js/journal.js').journalModule;

$(document).ready(function() {
  $('#count-button').click(function(event) {
    event.preventDefault();
    var body = $('#body').val();
    var journalEntry = new Entry(title, body);
    var output = journalEntry.numberOfWords(body);
    var outputVowels = journalEntry.vowelsCount(body);
    var outputConsonants = journalEntry.consonantsCount(body);
    $('#count').text(output);
    $('#number-of-vowels').text(outputVowels);
    $('#number-of-consonants').text(outputConsonants);
  });
});
