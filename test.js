let txt = 'CODESQUAD';
let dir = 'R';
let num = '3';

// pushWord의 값이 기대값과 일치하는 확인하는 함수
function test(txt, dir, num) {
  let data = 'ESQUADCOD';
  let expect = data.split;
  let result = expect === pushWord(txt, dir, num) ? true : false;
  return result;
}

// 테스트 하는 함수
test();

// 1차에서 제출하였던 함수
// 입력값을 받아와서 입력값대로 움직여주는 함수
function pushWord(txt, dir, num) {
  const goLeft = (arr) => arr.push(arr.shift());
  const goRight = (arr) => arr.unshift(arr.pop());
  let wordArr = txt.split('');
  for (let i = 0; i < num; i++) {
    if (dir === 'L') {
      goLeft(wordArr);
    } else if (dir === 'R') {
      goRight(wordArr);
    }
  }
  return wordArr;
}
