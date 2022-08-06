    var output = document.getElementById("output");
    var start = document.getElementById("start");
    var stop = document.getElementById("stop");
    var speechRecognition = speechRecognition || webkitSpeechRecognition;
    var recognizer = new speechRecognition();

    recognizer.lang = 'ar';
     start.onchange = function() {
        recognizer.lang = start.value;
    }

    start.onclick = function() {
        recognizer.start();
    }
    stop.onclick = function() {
        recognizer.stop();
    }
    recognizer.onspeechend = function() {
        stop.click();
    }
    recognizer.onresult = function(event) {
        var Textbox = event.results[0][0].transcript;
        output.value = Textbox;
        getCommand();
    }