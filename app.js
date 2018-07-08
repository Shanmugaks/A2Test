//var request = require('request');
//request('http://www.google.com', function (error, response, body) {
//  console.log('error:', error); // Print the error if one occurred
//  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//  console.log('body:', body); // Print the HTML for the Google homepage.
//});


exports.handler = function(event, context, callback) 
{
    var error = null;
    var NoError = null;
	
	var resultBody = MyLambdaFunction ();
	
	var result = {
    statusCode: 200,
    body: resultBody,
    headers: {'content-type': 'text/html'}
  };
	callback(NoError, result);
}
 
function MyLambdaFunction () 
{
	// MyLambdaFunction logic here
	var Result = 'My Lambda Tester - A2TestNode';
	return Result;
}
