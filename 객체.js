/* 객체 (object)
 - 속성의 모음으로 이루어진 데이터ㅏ
 - 속성에는 어떤 데이터 타입이라도 할당 가능
 - 속성의 구분은 ,
 - 속성의 정의 속성명(key) : 속성 값 
 */

var student ={
    grade: 1,
    school: "Lion school"
};

// 객체의 값 호출
var info = student.grade;
console.log(info);

 // 객체의 키 호출
var infoKey = Object.keys(student)[0]
console.log(infoKey);

// 객체에 속성 추가
student.class = 3;
console.log(student);

console.log(student['class'])
console.log(student.class)

// 비어있는 객체 생성
var teacher = new Object();
var teache = {

};

//symbol
var name1 = Symbol("김멋사");
var name2 = Symbol("김멋사");

console.log(name1 == name2);

var myClass ={
    [Symbol("이테킷")] : 1,
    [Symbol("이테킷")] : 2
};




