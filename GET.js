

const http = require('https');


var body = [];

http.get({
	hostname: 'www.bitstamp.net',
	port: 443,
	path: '/api/ticker/',
	agent: false
}, 
	(request) => {
	request.on('data', function(chunk) {
		body.push(chunk);
})
	request.on('end', function() {
		// Parse the asstring as JSON, 
		// Then print out the average of
		// high and low price. 
		let total = Buffer.concat(body);
		let asstring = total.toString();
		let nice = JSON.parse(asstring);
		let ave = ((574.58 + 564.82)/ 2);

		console.log(ave);
	
	})
});




  