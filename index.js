var WritingTest = require('./WritingTest');
var sget = require('sget');

var initIndex = parseInt(sget('initIndex: '));
var finalIndex = parseInt(sget('finalIndex: '));

var Test = new WritingTest('sustantives', initIndex, finalIndex);
Test.initTest();
