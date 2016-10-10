function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.numberOfWords = function(body) {
  return body.split(' ').length;
};

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
};

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
};

Entry.prototype.getTeaser = function(body) {
  var splitPeriod = body.split('.');
  var splitWord = splitPeriod[0].split(' ');
  var firstSentence = [];
  console.log(splitPeriod);
  console.log(splitWord);
  if (splitWord.length <= 8) {
    firstSentence = splitWord;
  } else {
    firstSentence = splitWord.slice(9);
  }
  firstSentence.join(" ");
  return firstSentence;
};

exports.journalModule = Entry;
