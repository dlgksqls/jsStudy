var mbti = ['INFP','ENFJ','INTJ'];

// console.log(mbti[0]);
// console.log(mbti.length);

// mbti[3] = 'ESFP';
// console.log(mbti[3]);
// console.log(mbti.length);

// mbti[3] = 'ISTJ'
// console.log(mbti[3]);

//push()
console.log(mbti.push('ESFP','ISTJ'));

//스프레드 문법
var newMbti = [...mbti, 'ESFP','ISTJ']; //원본 배열에 추가됨
console.log(newMbti);

//pop()
console.log(mbti.pop());
console.log(mbti);

//unshift() 원본 배열의 앞에 값 추가
var newMbti = ['이엔에프피', '아이에스티제이',...mbti]; //배열 앞에 값 추가
console.log(mbti);
console.log(newMbti);

console.log(mbti.unshift(1,2,3));
console.log(mbti);

//shift()
console.log(mbti.shift());
console.log(mbti)

//slice()
console.log(mbti.slice(0,2));
console.log(mbti.slice());
console.log(mbti.slice(-1));

//join()
console.log(mbti.join('-'));
console.log(mbti.join('|'));

//sort()
console.log(mbti.sort()); //오름차순 기본임
console.log(mbti.reverse()); //내림차순