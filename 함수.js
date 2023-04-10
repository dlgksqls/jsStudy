// function multiply(a,b){
//     return a * b;
// }

// mul = multiply(10,20);
// console.log(mul);

// console.log(multiply(20,30));

// var multiply = function(a,b){
//     return a*b;
// };

// console.log(multiply(50,60));

// var a=10;

// while(true){ //블록영역 벗어나서도 변수 변경 가능
//     var a=1000;
//     break;
// }

// console.log(a);

//호이스팅
// console.log(word);

// word = "happy";

// console.log(word);

// var word;

// //let(호이스팅이 일어나지 않게....)

// console.log(word);

// word = "happy";

// console.log(word);

// let word;

let a=10;

while(true){
    let a=1000;
    break;
}

console.log(a);


//const로 선언했을떄는 값을 덮어쓸 수 없음

const b=2;
console.log(b);

const PI = 3.14;

const student={
    grade :1,
    class :3
}
student.grade=2; //가능

student={ //객체 키 이름 변경 불가능
    num: 20222,
    grade:2
}


