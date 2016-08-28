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
		let total = Buffer.concat(body)
		let asstring = total.toString()
		console.log(asstring);
	
	})
});




  