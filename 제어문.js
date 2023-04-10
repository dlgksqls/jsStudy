//if 문

var a = 0;

//if .. else 

if(a>2){
    console.log('go');
}
else{
    console.log('a<=2');
}

// if .. else if .. else

if(a>2){
    console.log('go');
}
else if(a==2){
    console.log('a==2');
}
else if(a == 0){
    console.log('a = 0');
}
else if(a<2){
    console.log('a<2');
}

//switch
var mbti = 'infp';

switch (mbti) {
    case 'infp' :console.log('infp');
    case 'enfp' :;
    case 'istj' :;
    default :console.log('유효한 값이 아니다');
}