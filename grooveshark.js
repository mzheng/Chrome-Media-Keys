// Register the music player
chrome.extension.sendRequest({type: 'register'}, function(response) {
  // Do stuff with response
});

var grooveshark = {};

function click(elementSelector) {
	var element = $(elementSelector)[0];
    	var e = document.createEvent('MouseEvents');
    	e.initEvent( 'click', true, true ); 
    	element.dispatchEvent(e);
}

grooveshark.playpause = function() {
	click("#player_play_pause");
}
grooveshark.next = function() {
	click("#player_next");
}
grooveshark.prev = function() {
	click("#player_previous");
}



chrome.extension.onConnect.addListener(function(port) {
  port.onMessage.addListener(function(msg) {
    switch(msg) {
    case 'previous':
      grooveshark.prev();
      break;
    case 'playpause':
      grooveshark.playpause();
      break;
    case 'next':
      grooveshark.next();
      break;
    }
  });
});

