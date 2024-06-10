function addition(){
    let x=0;
    x= document.getElementById("input").value;
    if ( x == true){ 
        alert ("num 1  connot be Empty");
      }
    let z=0;
    z= document.getElementById("input1").value;
    if  ( z == false ){ 
        alert ("num2 connot be Empty");
      }
    ans1= Number(x)+Number(z);
    document.getElementById("input2").value = ans1;

  
    
}
function subraction(){
    let n=0;
    n= document.getElementById("input3").value;
    if ( n == true){ 
        alert ("num1 connot be Empty");
      }
    let i=0;
    i= document.getElementById("input4").value;
    if ( i == true){ 
        alert ("num1 connot be Empty");
      }
    ans2= Number(n)-Number(i);
    document.getElementById("input5").value = ans2;
}
function multiplication(){
    let c=0;
    c= document.getElementById("input6").value;
    if ( c == true){ 
        alert ("num1 connot be Empty");
      }
    let o=0;
    o= document.getElementById("input7").value;
    if ( o == true){ 
        alert ("num2 connot be Empty");
      }
    ans3= Number(c)*Number(o);
    document.getElementById("input8").value = ans3;
}
function division(){
    let l=0;
    l= document.getElementById("input9").value;
    if ( l == true){ 
        alert ("num1 connot be Empty");
      }
    let a=0;
    a= document.getElementById("input10").value;
    if ( a == true){ 
        alert ("num2 connot be Empty");
      }
    ans4= Number(l)/Number(a);
    document.getElementById("input11").value = ans4;
}

function div(){ 
let age= prompt (" How old are you", 100);
alert(age);


    let isboss= confirm ("Are you the boss?");
    if (isboss == true){
        alert (" welcome boss");
    }
    else { alert ( " get lost!");

    }
}
