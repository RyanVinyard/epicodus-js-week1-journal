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
