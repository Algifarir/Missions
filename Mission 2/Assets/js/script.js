const ilust = document.querySelector('.ilustration');
const line = document.querySelector('.line');
const line2 = document.querySelector('.line2');

let degree = 1;
let shake = true;
let up = 0;

const lineWidth = 600;
let len = 1;
let lenB = true;
let lineCon = 0;
document.addEventListener('DOMContentLoaded', function(){
    setInterval(shake_image, 40);
    setInterval(move_line, 20);
    setInterval(move_line2, 20);
});

function shake_image(){
    if(shake)degree++;
    else degree--;
    if(degree>=10){
        shake=false;
    }else if(degree<=-10){
    shake=true;
    }
    if(degree>0)up++;
    else up--;
    ilust.style.top = up+'px';
    ilust.style.left = degree+'px';
    console.log(degree);
};

function move_line(){
    if(lenB) len=len+5;
    else len=len-5;
    if(len>lineWidth){
        lenB = false;
        lineCon++;
    }else if(len<=0){
        lenB = true;
        lineCon++;
    }
    if(lineCon>3) lineCon = 0;

    if(lineCon==0){
        line.style.width = len+'px';
    }else if(lineCon==1){
        line.style.width = len+'px';
        line.style.marginLeft = lineWidth-len+'px';
    }else if(lineCon==2){
        line.style.marginLeft = lineWidth-len+'px';
        line.style.width = len+'px';
    }else if(lineCon==3){
        line.style.width = len+'px';
    }
};

function move_line2(){
    if(lineCon==0){
        line2.style.width = len+'px';
        line2.style.marginLeft = lineWidth-len+'px';
    }else if(lineCon==1){
        line2.style.width = len+'px';
    }else if(lineCon==2){
        line2.style.width = len+'px';
    }else if(lineCon==3){
        line2.style.marginLeft = lineWidth-len+'px';
        line2.style.width = len+'px';
    }
};


