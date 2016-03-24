var accountSid = 'AC6845041f3df4eab95251c8010abbeda8';
var authToken = "31488dc23e3f00ddc6f967946d32e29d";
var client = require('twilio')(accountSid, authToken);
 
client.calls.create({
    url: "http://demo.twilio.com/docs/voice.xml",  // have to create a custom Twimil application for modifying voices
    to: "+919677671572",  
    from: "+15673914116"
}, function(err, call) {
    process.stdout.write(call.sid);
});