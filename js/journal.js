function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.numberOfWords = function(body) {
  var count = 0;
  count = body.split(' ').length;
  return count;
}

exports.journalModule = Entry;
