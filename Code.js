document.addEventListener("DOMContentLoaded",function(){
    document.getElementById('button1').addEventListener('click', copy);
    document.getElementById('button2').addEventListener('click', plus);
    document.getElementById('button3').addEventListener('click', delet);
    $( "#button4" ).click(sum);
    //ocument.getElementById('button4').addEventListener('click', sum);
    document.getElementById('fff').addEventListener('click', color);
    document.getElementById('button5').addEventListener('click', getbrowser);
    document.getElementById('button6').addEventListener('click', Date1);    
})
function copy(){
   document.getElementById('input0').value;
   document.getElementById('input1').value=document.getElementById('input0').value;
}
function plus(){
    let a=document.getElementById('input3').value+" "+document.getElementById('input2').value;
    alert(a);
}
function delet(){
    document.getElementById('input4').value="";
    document.getElementById('input5').value="";
}
function sum(){
    let b=document.getElementById('input6').value;
    let c=document.getElementById('finput7').value;
    let d=Number(b)+Number(c);
    sessionStorage.setItem("Sum",d);
    console.log(d);
}
function color(){
    document.getElementById('testBlock1').style.background="blue";
}
function getbrowser(){
    document.getElementById('input8').value=navigator.userAgent;
}
function Date1(){
    let e=new Date().toLocaleTimeString();
    document.getElementById('input10').value=e;
}

