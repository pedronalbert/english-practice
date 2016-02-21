var WritingTest = require('./WritingTest');
var sget = require('sget');

var initIndex = parseInt(sget('N° Palabra Inicial: '));
var finalIndex = parseInt(sget('N° Palabra Final: '));

var Test = new WritingTest('sustantives', initIndex, finalIndex);
Test.initTest();
