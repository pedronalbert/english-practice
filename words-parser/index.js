var EnglishWords = require('./englishWords');
var SpanishWords = require('./spanishWords');
var Ipas = require('./ipas');
var async = require('async');
var fs = require('fs');

async.forEachOf(SpanishWords, (word, index, next) => {
  var text = '{ english: "' + EnglishWords[index] + '", spanish: "' + SpanishWords[index] + '", ipa: "' + Ipas[index] + '" },';

  fs.appendFile('./results.txt', text + '\n');
  next()
}, function done() {
  console.log('Finished!');
});