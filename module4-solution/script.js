(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (nameID in names) {
    var firstLetter = names[nameID].toLowerCase().charAt(0);
    if (firstLetter == 'j') {
       byeSpeaker.speak(names[nameID]);
    } else {
       helloSpeaker.speak(names[nameID]);
    }
  }
})();      