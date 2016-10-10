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

var Entry = require('./../js/journal.js').journalModule;

$(document).ready(function() {
  $('#entry-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Entry(title, body);
    $('#journal-entry-title').text(newEntry.title);
    $('#journal-entry-body').text(newEntry.body);
  });
});

var Entry = require('./../js/journal.js').journalModule;

$(document).ready(function() {
  $('#count-button').click(function(event) {
    event.preventDefault();
    var body = $('#body').val();
    var journalEntry = new Entry(title,body);
    var output = journalEntry.getTeaser(body).join(" ") + "...";
    $('#first-sentence').text(output);
  });
});
