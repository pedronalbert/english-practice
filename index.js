var WritingTest = require('./src/WritingTest');
var sget = require('sget');

var initIndex = parseInt(sget('N° Palabra Inicial: ')) - 1;
var finalIndex = parseInt(sget('N° Palabra Final: '));

var Test = new WritingTest('sustantives', initIndex, finalIndex);

do {
  Test.initTest();

  var repeatTest = sget('\nRepetir el test [s/n]:').slice(0, 1)
} while (repeatTest == 's')
