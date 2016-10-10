function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.numberOfWords = function(body) {
  return body.split(' ').length;
}

Entry.prototype.vowelsCount = function(body) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var ourVowels = [];
  var splitBody = body.split('');

  for (var i = 0; i < splitBody.length; i++) {
    if (vowels.indexOf(splitBody[i]) !== -1) {
      ourVowels.push(splitBody[i]);
    }
  }

  return ourVowels.length;


}

Entry.prototype.consonantsCount = function(body) {
  var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'z', 'w', 'y'];
  var ourConsonants = [];
  var splitBody = body.split('');

  for (var i = 0; i < splitBody.length; i++) {
    if (consonants.indexOf(splitBody[i]) !== -1) {
      ourConsonants.push(splitBody[i]);
    }
  }

  return ourConsonants.length;

}

exports.journalModule = Entry;
