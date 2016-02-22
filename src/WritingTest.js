'use strict';

var SustantivesDB = require('./words/sustantives')
var sget = require('sget');
var clear = require('clear');
var colors = require('colors');
var _ = require('lodash');

class WritingTest {
  constructor(testWordsType, initIndex, finalIndex) {
    this.testWordsType = testWordsType;

    if (testWordsType == 'sustantives') {
      this.testWords = _.slice(SustantivesDB, initIndex, finalIndex)
    }
  }


  initTest () {
    clear();
    
    this.testWords = _.shuffle(this.testWords);
    this.correctWordsCount = 0;
    this.incorrectWordsCount = 0;
    this.errors = [];
    this.leftWords = this.testWords.length;

    this.testWords.forEach(word => {
      this.printProgress();

      console.log('\nEspañol:'.cyan.bold);
      console.log(word.number + ' - ' + word.spanish + '\n')

      let englishInput = sget('English:'.cyan.bold).slice(0,-2);

      if(englishInput === word.english) {
        console.log('\nRespuesta: '.bold + 'Correcta'.bold.green);
        this.correctWordsCount++;
      } else {
        console.log('\nRespuesta: '.bold + 'Incorrecta'.bold.red);
        this.incorrectWordsCount++
        this.errors.push(word.number + ' - Spanish: '.bold + word.spanish + ' English: '.bold + word.english + word.ipa + ' Input: '.bold.red + englishInput);
      }

      console.log('Word: '.bold + word.english + ' ' + word.ipa);

      sget('');

      this.leftWords--;

      clear();

    });

    this.printProgress();
    console.log('\n');

    if(this.incorrectWordsCount > 0) {
      this.printErrors();
    } else {
      console.log('Test finalizado, Todas las respuestas han sido correctas'.bold);
    }
  }

  printProgress() {
    console.log('Correctas: '.bold + this.correctWordsCount.toString().bold.green + ' Incorrectas: '.bold + this.incorrectWordsCount.toString().bold.red + ' Restantes: ' + this.leftWords.toString().bold);
  }

  printErrors() {
    if(this.errors.length > 0 ) {
      this.errors.forEach(error => {
        console.log(error);
      })
    }
  }
}

module.exports = WritingTest