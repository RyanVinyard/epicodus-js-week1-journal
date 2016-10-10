var Entry = require('./../js/journal.js').journalModule;

$(document).ready(function() {
  $('#count-button').click(function(event) {
    event.preventDefault();
    var body = $('#body').val();
    var journalEntry = new Entry(title, body);
    var output = journalEntry.numberOfWords(body);
    $('#count').text(output);


    // console.log(body);
    // $('#count').text(body.numberOfWords());


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
