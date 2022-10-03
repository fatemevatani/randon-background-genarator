let rRange = document.querySelector('#r-range');
let gRange = document.querySelector('#g-range');
let bRange = document.querySelector('#b-range');
let setBody = document.querySelector('body')

rRange.addEventListener('input' , function(){
    let RedValue = rRange.value;
    let GreenValue = gRange.value;
    let BlueValue = bRange.value;
    setBody.style.backgroundColor = "rgb("+RedValue+" ,"+GreenValue+" ,"+BlueValue+")";
})


gRange.addEventListener('input' , function(){
    let RedValue = rRange.value;
    let GreenValue = gRange.value;
    let BlueValue = bRange.value;
setBody.style.backgroundColor = "rgb("+RedValue+" ,"+GreenValue+" ,"+BlueValue+")";
})


bRange.addEventListener('input' , function(){
    let RedValue = rRange.value;
    let GreenValue = gRange.value;
    let BlueValue = bRange.value;
    setBody.style.backgroundColor = "rgb("+RedValue+" ,"+GreenValue+" ,"+BlueValue+")";

})

let randomBtn= document.querySelector('.random')
randomBtn.addEventListener('click', function(){

     let random='RGB:'+ rRange.value +',' +gRange.value +','+ bRange.value;
    let randomNumber1= Math.floor(Math.random() * 255) + 1;
    let randomNumber2= Math.floor(Math.random() * 255) + 1;
    let randomNumber3= Math.floor(Math.random() * 255) + 1;
    
    setBody.style.backgroundColor = "rgb("+randomNumber1+" ,"+randomNumber2+" ,"+randomNumber3+")";

    rRange.value=randomNumber1;
    gRange.value=randomNumber2;
    bRange.value=randomNumber3;
})


