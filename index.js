var WritingTest = require('./src/WritingTest');
var sget = require('sget');
var clear = require('clear');

clear();
var test = createNewTest()
test.initTest()

do {
  console.log('\nSeleccione una opcion: \n'.bold);
  console.log('1) Repetir el mismo test');
  console.log('2) Crear un nuevo test');
  console.log('3) Salir');

  var option = parseInt(sget('').slice(0, 1));

  if(option == 1) {
    test.initTest();
  } else if (option == 2) {
    clear()
    test = createNewTest();
    test.initTest()
  }
} while (option != 3);

function createNewTest () {
  var initIndex = parseInt(sget('N° Palabra Inicial: ')) - 1;
  var finalIndex = parseInt(sget('N° Palabra Final: '));

  var test = new WritingTest('sustantives', initIndex, finalIndex);
  return test;
}