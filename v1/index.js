const { RTMClient } = require('@slack/rtm-api');
var token = 'xoxb-817693863459-829168103264-pCRSJKrD10lXuSSZiVzOTN7A';

var rtm = new RTMClient(token);
rtm.start();

rtm.on('message', function (message) {
	var channel = message.channel;
	var text = message.text;

	if (text == '안녕') {
		rtm.sendMessage('헬로', channel);
	} else {
		rtm.sendMessage('응?', channel);
	}
});
