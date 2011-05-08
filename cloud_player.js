// Register the music player
chrome.extension.sendRequest({type: 'register'}, function(response) {
  // Do stuff with response
});

var cloud_player = {};

function click(elementSelector) {
	var element = $(elementSelector)[0];
    	var e = document.createEvent('MouseEvents');
    	e.initEvent( 'click', true, true ); 
    	element.dispatchEvent(e);
}

cloud_player.playpause = function() {
	click(".mp3MasterPlay");
}
cloud_player.next = function() {
	click(".mp3PlayNext");
}
cloud_player.prev = function() {
	click(".mp3PlayPrevious");
}



chrome.extension.onConnect.addListener(function(port) {
  port.onMessage.addListener(function(msg) {
    switch(msg) {
    case 'previous':
      cloud_player.prev();
      break;
    case 'playpause':
      cloud_player.playpause();
      break;
    case 'next':
      cloud_player.next();
      break;
    }
  });
});

