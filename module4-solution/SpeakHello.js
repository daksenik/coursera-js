(function(window) {

	// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
	var speakWord = "Hello";

	var helloSpeaker = {
		speak: function (name) {
  							console.log(speakWord + " " + name);
						}
	};
	window.helloSpeaker = helloSpeaker;
})(window);
