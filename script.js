const data1 = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0];

// function dataReverse(data) {
//     let array = [[]];
//     let i = 0;
//     for (let j = 0; j < data.length; j++) {
//       array[i].push(data[j]);
//       if ((j + 1) % 8 === 0) {
//         i++;
//       }
//     }
//     console.log(array);
// }

function dataReverse(data) {
    let array = [];
    
    while (data.length !== 0) {
        array.unshift(...data.splice(0, 8));
    }
    
    return array;
}
// console.log(data1.splice(0));
dataReverse(data1);

// -------------------------------------------------------------

const arr1 = [1,3,5,7,9,11,12];
const arr2 = [1,2,3,4,5,10,12];

// function mergeArrays(arr1, arr2) {
//     let result = [];
//     if (arr1.length === 0 && arr2.length === 0) {
//       return [];
//     } else {
//         if (arr1.length > arr2.length) {
//           for (let i = 0; i < arr1.length; i++) {
//             result.push(arr1[i]);
//             if (!result.includes(arr2[i])) {
//                 result.push(arr2[i]);
//             }
//         }
//     } else {
//           for (let i = 0; i < arr2.length; i++) {
//             result.push(arr1[i]);
//             if (!result.includes(arr2[i])) {
//               result.push(arr2[i]);
//             }
//         }
//       }
//     }
//     console.log(result);
// }

function compareNumbers(a, b) {
    return a - b;
}

function mergeArrays(arr1, arr2) {
    let array = [];
    let result = [];
    if (arr1.length === 0 && arr2.length === 0) {
      return [];
    } else {
        array.push(...arr1, ...arr2);
        // console.log(array);
        for (let i = 0; i < array.length; i++) {
            if (!result.includes(array[i])) {
                result.push(array[i]);
            }
        }
    }
    // console.log(result.sort(compareNumbers));
    return result.sort(compareNumbers);
}

mergeArrays(arr1, arr2);

const str = 'A#fPO".Eee6uo~AOo")lIEOu aYXix';

function vowelOne(s){
    let str = s.toLowerCase();
    let vowels = "aeiou";
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        result += 1;
      } else {
        result += 0;
      }
    }
    // console.log(result);
    return result;
}

vowelOne(str);

var test = [[1,2,3,4,5,6,7,8,9,10],[71,-548,12.3,83,-47,-1.7,-892,58,31415,2718,-38]];

var Sum = sum = function(arr){ 
  return arr.reduce((previousValue, currentValue) => previousValue + currentValue); 
}; 

// console.log(sum[test[0]]);
sum(test[1]);

function add(num1, num2) {
  let result = [];
  let str1 = num1.toString();
  let str2 = num2.toString();
  let length1 = str1.length;
  let length2 = str2.length;

  if (length1 > length2) {
    for (let i = 1; i <= length1; i++){
      if (str1[length1-i] && str2[length2-i]){
        result.unshift(Number(str1[length1-i]) + Number(str2[length2-i]));
      } else {
        result.unshift(Number(str1[length1-i]));
      }
    }
  } else {
    for (let i = 1; i <= length2; i++){
      if (str1[length1-i] && str2[length2-i]){
        result.unshift(Number(str1[length1-i]) + Number(str2[length2-i]));
      } else {
        result.unshift(Number(str2[length2-i]));
      }
    }
  }
  // console.log(result.join(''));

  return Number(result.join(''));
}

add(232,14323);

function colourAssociation(array){
  let length = array.length;
  let result = [];

  for (let i = 0; i < length; i++){
    let obj = {};
    let key = array[i][0];
    obj[key] = array[i][1];
    result.push(obj);
  }
  
  return result;
}

colourAssociation([["white", "goodness"], ["blue", "tranquility"]]);

function solution(questions){
  questions.map((element) =>{
    element.usersAnswer = null;
    // if (element.usersAnswer === null){
    //   console.log("yes");
    // }
  })
  // console.log(questions); 
}

solution([{
  question: "What's the currency of the USA?",
  choices: ["US dollar", "Ruble", "Horses", "Gold"],
  corAnswer: 0
}, {
  question: "Where was the American Declaration of Independence signed?",
  choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
  corAnswer: 0
}]);

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }

function combine() {
  let result = {};

  for (let i = 0; i < arguments.length; i++){
    for (let key in arguments[i]){
      if (key in result){
        result[key] += arguments[i][key];
      } else {
        result[key] = arguments[i][key];
      }
    }
  }

  return result;
}

combine(objA, objB);

function nbDig(n, d) {
  let k = 0;

  for (let i = 0; i <= n; i++){
    let str = Math.pow(i, 2).toString();
    for (let j = 0; j < str.length; j++){
      if (str[j] == d) {
        k++;
      }
    }
  }

  return k;
}

nbDig(5750, 0);

function findMissing(arr1, arr2) {
  let currentLength = arr1.length;

  if (arr1.length === 1) {
    return arr1[0];
  } else {
    while (arr1.length !== 1){
      for (let j = 0; j < arr2.length; j++){
        if (arr1[0] === arr2[j]){
          arr1.splice(0, 1);
          arr2.splice(j, 1);
          break;
        }
      }
      
      if (currentLength === arr1.length){
        return arr1[0];
      } else {
        currentLength = arr1.length;
      }
    }
  
    return arr1[0];
  }
}

findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]);
findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]);

function nicknameGenerator(name){
  let vowels = "aeiou";
  
  if (name.length < 4) {
    return "Error: Name too short";
  } else {
    if (vowels.includes(name[2])){
      return name.slice(0, 4);
    } else {
      return name.slice(0, 3);
    }
  }
}

nicknameGenerator("Jimmy");

function getDecimal(n){
  let str = n.toString();
  str = '0' + str.slice(str.indexOf('.'));
  n = parseFloat(str);
  // console.log(n);
  return n; // fix me 
}

getDecimal(4.5);

// const regex1 = /\w+/;
// console.log(regex1);


function isIsogram(str){
  str = str.toLowerCase();
  for(let i = 0; i < str.length; i++){
    
    for(let j = i + 1; j < str.length; j++){
      // console.log(str[j]);
      if(str[i] === str[j]){
        console.log('false');
        return false;
      }
    }
  }
  // console.log('true');
  return true;
}

isIsogram("avd");

let omg;
let omg2;
let omg3;
let omg4;
let omggggggggggg;