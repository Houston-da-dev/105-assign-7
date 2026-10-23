
































var colorValue = [];
let x = 0;

function applycolor(arry){
    for(i = 1; i <=12; i++){
        let button = document.getElementById(`box${i}`)
        let b = i-1;
        button.style.backgroundColor = arry[b];
    }
}

function startingcolor(){
    for(i=0; i <= 12; i++){
        x = Math.floor(Math.random()*6) + 1;
        if(x == 1){
            colorValue.push("green")
        }
        else if(x == 2){
            colorValue.push("blue")
        }
        else if(x == 3){
            colorValue.push("red")
        }
        else if(x == 4){
            colorValue.push("aliceblue")
        }
        else if(x == 5){
            colorValue.push("hotpink")
        }
        else{
            colorValue.push("aquamarine")
        }
    }
    applycolor(colorValue);
}

function random(){
    let tempvalue = [];
    for(i=0; i <= 12; i++){
        x = Math.floor(Math.random()*6) + 1;
        if(x == 1){
            tempvalue.push("green")
        }
        else if(x == 2){
            tempvalue.push("blue")
        }
        else if(x == 3){
            tempvalue.push("red")
        }
        else if(x == 4){
            tempvalue.push("aliceblue")
        }
        else if(x == 5){
            tempvalue.push("hotpink")
        }
        else if(x == 6){
            tempvalue.push("aquamarine")
        }
    }
    applycolor(tempvalue);
}

function blue(){
    for(i = 1; i <=12; i++){
        let button = document.getElementById(`box${i}`)
        button.style.backgroundColor = "blue";
    }
}

function red(){
    for(i = 1; i <=12; i++){
        let button = document.getElementById(`box${i}`)
        button.style.backgroundColor = "red";
    }
}

function green(){
    for(i = 1; i <=12; i++){
        let button = document.getElementById(`box${i}`)
        button.style.backgroundColor = "green";
    }
}

startingcolor()