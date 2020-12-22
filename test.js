let txt = 'CODESQUAD';
let dir = 'R';
let num = '3';
let arr = txt.split('');

function test(txt, dir, num) {
  let expect = 'ESQUADCOD';
  let result = expect === pushWord(txt, dir, num) ? true : false;
  return result;
}

function pushWord(txt, dir, num) {
  const goLeft = (arr) => arr.push(arr.shift());
  const goRight = (arr) => arr.unshift(arr.pop());
  let wordArr = txt.split('');
  for (let i = 0; i < num; i++) {
    if (dir === LEFT) {
      goLeft(wordArr);
    } else if (dir === RIGHT) {
      goRight(wordArr);
    }
  }
  return wordArr;
}

test();
