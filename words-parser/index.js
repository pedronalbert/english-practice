var EnglishWords = require('./englishWords');
var SpanishWords = require('./spanishWords');
var Ipas = require('./ipas');
var async = require('async');
var fs = require('fs');

async.forEachOfSeries(SpanishWords, (word, index, next) => {
  var text = '{ number: ' + (index+1) + ', english: "' + EnglishWords[index] + '", spanish: "' + SpanishWords[index] + '", ipa: "' + Ipas[index] + '" },';

  fs.appendFile('./results.txt', text + '\n', () => {
    next()
  });
}, function done() {
  console.log('Finished!');
});