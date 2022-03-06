console.log("ウォーミングアップ");
// const arrayOfObjects = [
//   { name: "alice", favoriteColor: "green" },
//   { name: "bob", favoriteColor: "blue" },
// ];
// function getNames(array){
//   return array.map(function(obj){
//     return obj.name;
//   })
// }
// function getFavoriteColors(color){
//   return color.map(function(obj){
//     return obj.favoriteColor;
//   }) //function(obj){return obj.favoriteColor}  =  obj => obj.favoriteColor
// }
// // getFavoriteColors(color){}
// // ここにコードを書きましょう
// 引数：配列　要素はオブジェクト
// 返り値：配列
// 戻り値を設定
// function getNames(objectArray){
//   const returnArray = [];
//   objectArray.forEach((element) => {
//     returnArray.push(element.name);
//   })
//   return returnArray;
// }
// const getNames = array => array.map(object => object.name);
// test(getNames(arrayOfObjects), ["alice", "bob"]);
// test(getFavoriteColors(arrayOfObjects), ["green", "blue"]);
// function evenArray(array){
//   const result = [];
//   for (const num of array){
//     if(num % 2 === 0){
//       result.push(num);
//     }
//   }
//   return result;
// }
// function evenArray(array){
//   const rArray = [];
//   for (const elm of array) {
//       if (!(elm % 2)) {
//           rArray.push(elm);
//       }
//   }
//   return rArray;
// }
// console.log(evenArray([2,3,4,5,6]));
// function evenArray(array){
//   const result = [];
//   for (const num of array){
//     if(num > 3){
//       result.push(num);
//   }
//   }
//   return result;
// }
// evenArray([2,3,4,5,6]);
console.log("基礎演習1");
// 関数 isMultipleOfTen を宣言してください。関数内で .filter メソッドを使用しては いけません が、テストでは .filter を使用しても構いません。ここでは 必ずしも アロー関数を使用する必要はありません。
/**
 * @param {number} ???
 * @returns {boolean} 与えられた数値が 10 の倍数かどうか
 */
// ここにコードを書きましょう
function isMultipleOfTen(num){
  if (num % 10 === 0){
    return num;
  }
}
const arrayOfNumbers = [2, 4, 6, 8, 10, 15, 20, 30, 66, 89, 100];
test(arrayOfNumbers.filter(isMultipleOfTen), [10, 20, 30, 100]);
test(arrayOfNumbers.slice(6).filter(isMultipleOfTen), [20, 30, 100]);

console.log("基礎演習2");
// 関数 hasAVowel を宣言してください。関数内で .filter メソッドを使用しては いけません が、テストでは .filter を使用しても構いません。ここでは 必ずしも アロー関数を使用する必要はありません。
/**
 * @param {string} ???
 * @returns {boolean} 与えられた文字列に少なくとも 1 つ以上母音 (a, e, i, o, u) があるかどうか
 */
// ここにコードを書きましょう
function hasAVowel(names){
  const result = [];
  const wd = ["a","e","i","o","u"];
  for (const d of wd){
   for (const name of names){
     if(d === name){
      //  console.log(result)
      return result.push(name);
    }
    }
   }
    // return result;
}
const arrayOfStrings1 = ["bat", "ball", "tree", "cow", "bnm"];
const arrayOfStrings2 = ["bhg", "waa", "cvb"];

test(arrayOfStrings1.filter(hasAVowel), ["bat", "ball", "tree", "cow"]);
test(arrayOfStrings2.filter(hasAVowel), ["waa"]);

console.log("基礎演習3");
// 関数 getPositiveNumbers を宣言してください。関数内では .filter メソッドを 使用してください 。また、アロー関数も 使用してください 。アロー関数は getPositiveNumbers 関数の 内部 で使用されます。
/**
 * @param {Array<number>} ???
 * @returns {Array<number>} 与えられた配列の中にある正の数値のみを要素として持つ配列
 */
// ここにコードを書きましょう
function getPositiveNumbers(array){
  return array.filter(element => element > 0)
}
test(getPositiveNumbers([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
test(getPositiveNumbers([0, 1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
test(getPositiveNumbers([1, -2, 3, -4, 5]), [1, 3, 5]);
test(getPositiveNumbers([-2, -4]), []);

// console.log("基礎演習4");
// 関数 getQuestions を宣言してください。関数内では .filter メソッドを 使用してください 。また、アロー関数も 使用してください 。アロー関数は getQuestions 関数の 内部 で使用されます。
/**
 * @param {Array<string>} ???
 * @returns {Array<string>} 与えられた配列の中にある、大文字で始まり、疑問符で終わる文字列のみを要素として持つ配列
 */
// ここにコードを書きましょう
// バリューの最初の文字が大文字か判別するフィルター
// function Bigstr(str){
//   return str.slice(0) === str.toUpperCase()
// }
// // バリューの最後の文字が？か判別するフィルター
// function Question(quest){
//   return quest.slice(quest.length-1) === "?";
// }
// function getQuestions(array){
//   // return array.filter((x) => x[0].startsWith('A-Z', 1));
//   // return array.filter(str => {str.slice(0) === str.slice(0).toUpperCase()})
//   return array.filter(x => x.endsWith('?'));
// }
// const arrayOfStrings3 = [
//   "Hi, there.",
//   "What in the world?",
//   "My name is JavaScript",
//   "Do you want to know a secret?",
// ];
// test(getQuestions(arrayOfStrings3), [
//   "What in the world?",
//   "Do you want to know a secret?",
// ]);
// test(getQuestions(arrayOfStrings3.slice(2)), [
//   "Do you want to know a secret?",
// ]);

console.log("中級演習1");
/**
 * @param {Array<string>} ???
 * @returns {Array<string>} 与えられた配列の中にある、長さが奇数で、文字がすべて大文字の文字列のみを要素として持つ配列
 */
// ここにコードを書きましょう
function getOddLengthCapitalWords(names){
  return names.filter(ele => ele.match(/[A-Z]+$/g))
  .filter(e => e.length %2 === 1);
}
const arrayOfStrings4 = ["SNAKE", "APPLES", "Peaches", "PUMPKINPIES"];
test(getOddLengthCapitalWords(arrayOfStrings4), ["SNAKE", "PUMPKINPIES"]);
test(getOddLengthCapitalWords(arrayOfStrings4.slice(1)), ["PUMPKINPIES"]);

console.log("中級演習2");
// 関数 intersection を宣言してください。ここでは Lodash のメソッドを 使用しないでください。
/**
 * @param {Array<any>} ???
 * @param {Array<any>} ???
 * @returns {Array<any>} 与えられた配列の両方に存在する要素だけが入った配列
 */
//  function intersection(array1,array2){
//   const resultArray = []
//   for(const ar1 of array1){
//       for(const ar2 of array2){
//           if(ar1 === ar2){
//               resultArray.push(ar1)
//           }
//       }
//   }
//   return resultArray
// }
function intersection(array1,array2) {
  return array1.filter(element1 => (array2.filter
    (element2 => element1 === element2).length))//!= 0));
}

// ここにコードを書きましょう
test(intersection([1, 2, 3], [1, 2, 3]), [1, 2, 3]);
test(intersection([1, 2, 3], [2, 3, 4]), [2, 3]);
test(intersection([1, 2, 3], [3, 4, 5]), [3]);
test(intersection([1, 2, 3], [4, 5, 6]), []);

