const firstScreen = document.getElementById('firstScreen');
const secondScreen = document.getElementById('secondScreen');
const generateBtn = document.querySelector('.generate-btn');
const allDigitBtn = document.querySelectorAll('.digitBtn');

generateBtn.addEventListener('click', function(){
   let count = '';
   for(var i = 0; i < 4; i++)
   {
       count += Math.round(Math.random()*9);
    }
    firstScreen.value = count;
})

for(let i = 0; i < allDigitBtn.length; i++){
    allDigitBtn[i].addEventListener('click', function(){
        let number = allDigitBtn[i].innerText;
        secondScreen.value += number;
    })
}
const allClearBtn = document.querySelector('.allClear').addEventListener('click', function(){
    secondScreen.value = '';
})
const backSpaceBtn = document.querySelector('.backSpace').addEventListener('click', function(){
    let current = secondScreen.value;
    secondScreen.value = current.slice(0,-1);
})