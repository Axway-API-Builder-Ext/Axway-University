'use strict';

var express = require('express'),
	// restify = require('restify'),
	Logger = require('appc-logger');

var expressApp = express(),
	expressLogger = Logger.createHttpLogger(expressApp, 'express');

expressApp.get('/', function(req, res) {
	expressLogger.info('Hello world from Axway ARS logger.');
	res.send('Welcome to Axway AMPLIFY Runtime Services!');
});
expressApp.get('/hello/:world', function(req, res) {
	expressLogger.info('Hello world from Axway ARS logger. Hello ' + req.params.world + '!');
	res.send('Welcome to Axway AMPLIFY Runtime Services! Hello ' + req.params.world + '!');
});
expressApp.get('/arrowPing.json', function(req, res) {
	res.send({
		ping: true
	});
});

var expressServer = expressApp.listen(process.env.PORT || 8080, function() {
	var host = expressServer.address().address;
	var port = expressServer.address().port;
	console.log('Axway ARS server is listening at http://%s:%s', host, port);
});

// var restifyServer = restify.createServer({
// 		name: 'Axway ARS Server',
// 		version: '1.0.0'
// 	}),
// 	restifyLogger = Logger.createHttpLogger(restifyServer, 'restify');

// restifyServer.get('/', function(req, res, next) {
// 	restifyLogger.info('Hello world from Axway ARS logger.');
// 	res.send('Welcome to Axway AMPLIFY Runtime Services!');
// 	return next();
// });
// restifyServer.get('/hello/:world', function(req, res, next) {
// 	restifyLogger.info('Hello world from Axway ARS logger. Hello ' + req.params.world + '!');
// 	res.send('Welcome to Axway AMPLIFY Runtime Services! Hello ' + req.params.world + '!');
// 	return next();
// });
// restifyServer.listen(process.env.PORT || 8080, function() {
// 	console.log('%s is listening at %s', restifyServer.name, restifyServer.url);
// });
