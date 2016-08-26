const http = require('http');


http.get({
	hostname:'www.bitstamp.net'
	port: 443,
	path: '/api/ticker/',
	agent: false
}, (res) => {
	console.log(res)
});


