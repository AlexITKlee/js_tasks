//Задача #1
// Реализуйте и экспортируйте по умолчанию функцию, которая 
// меняет в строке регистр каждой буквы на противоположный. 
// Функция должна возвращать полученный результат

// Примеры:

// invertCase('Hello, World!'); // hELLO, wORLD!
// invertCase('I loVe JS');     // i LOvE js
// Подсказки
// Чтобы узнать длину строки, используйте свойство length:
// 'welcome'.length; // 7
// Чтобы получить строку (или отдельный символ) в верхнем регистре,
//  используйте метод toUpperCase():
// 'foo'.toUpperCase(); // 'FOO';
// 'f'.toUpperCase();   // 'F';
// Чтобы получить строку (или отдельный символ) в нижнем регистре,
//  используйте метод toLowerCase():
// 'BAR'.toLowerCase(); // 'bar';
// 'b'.toLowerCase();   // 'b';

//Решение:
const toInvertCase = (str) =>{
    let result = '';
    for(let i = 0; i<str.length; i++){
        if(str[i] === str[i].toUpperCase()){
            result = `${result}${str[i].toLowerCase()}`;
        }else if(str[i] === str[i].toLowerCase()){
            result = `${result}${str[i].toUpperCase()}`
        }
    }
    return result;
}
console.log(toInvertCase('heLLO'));
export {toInvertCase };


//Задача #2
// Реализуйте и экспортируйте по умолчанию функцию, которая выводит (console.log) 
// в терминал числа в диапазоне от begin до end. При этом:

// Если число делится без остатка на 3, то вместо него выводится слово Fizz
// Если число делится без остатка на 5, то вместо него выводится слово Buzz
// Если число делится без остатка и на 3, и на 5, то вместо числа выводится слово 
// FizzBuzz
// В остальных случаях выводится само число
// Функция принимает два параметра (begin и end), определяющих начало и конец 
// диапазона (включительно). Для простоты считаем, что эти параметры являются 
// целыми числами больше нуля. Если диапазон пуст (в случае, когда begin > end),
// то функция просто ничего не печатает.

// Вызов функции:

// fizzBuzz(11, 20);
// Вывод в терминале:

// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Это задание крайне часто задают на собеседованиях.

// //Решение:
const nextRangeValue = (begin, end) =>{
    if(begin > end) return ; 
    for(let i = begin; i <= end; i++){
        if(i % 3 === 0 && i % 5 === 0){ // (i % 15 === 0)
        console.log(`FizzBuzz`);
        }else if(i % 3 === 0){ 
            console.log(`Fizz`);
        }else if(i % 5 === 0){
           console.log(`Buzz`);
        }else{
            console.log(i);
        }
}
}
nextRangeValue(14, 20);
export default nextRangeValue;

