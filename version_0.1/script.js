 'use strict';

// Функции
const isNumber = function( n ){
  return !isNaN(parseFloat( n )) && isFinite( n );
};

const conditionEquality = function( number ){
  if ( number   >= true ){
    checksNumber();

} else if ( number   >= false ){
  alert( "Конец игры" );
  amountSum = 0;
}
};

const checksNumber = function( ){
 
const guessedNumber = prompt( "Угадай число от 1 до 100" );
if ( guessedNumber === null ){
  alert( "Конец игры" );
} else {
  
  if (!isNumber( guessedNumber )){
    const numberError = confirm( "Введи число! Хотите ввести новый вариант ?" );
    
    conditionEquality( numberError );

  } else if (isNumber( guessedNumber ) ){
    amountSum = 0;
    amountSum  += Number( guessedNumber );
    mysteriousNumber();
  } 
}
   return amountSum ;
};

const mysteriousNumber = function( ){
  let mysterNumber = 35;

  const  responseoptSteps  = function( ){

  if( amountSum < mysterNumber  ){
    const numberBig = confirm( "Загаданное число больше, хотите ввести новый вариант ?" );
    conditionEquality( numberBig );
  
  } else if ( amountSum > mysterNumber ){
    const numberMin = confirm( "Загаданное число меньше, хотите ввести новый вариант ?" );
    conditionEquality(  numberMin );
  }  

  };
  responseoptSteps();
 };


//Переменные
let amountSum = 0;  
//Вывод
checksNumber();
console.log(typeof amountSum  + "/" + amountSum );
