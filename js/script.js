const firstScreen = document.getElementById('firstScreen');
const secondScreen = document.getElementById('secondScreen');
const generateBtn = document.querySelector('.generate-btn');
const allDigitBtn = document.querySelectorAll('.digitBtn');
const matchedText = document.getElementById('matched');
const notMatchedText = document.getElementById('notMatched');
const actionRemain = document.getElementById('actionRemain');

// Pin generating button event
generateBtn.addEventListener('click', function () {
    let count = '';
    for (var i = 0; i < 4; i++) {
        count += Math.round(Math.random() * 9);
    }
    firstScreen.value = count;
})

// All number button event
for (let i = 0; i < allDigitBtn.length; i++) {
    allDigitBtn[i].addEventListener('click', function () {
        let number = allDigitBtn[i].innerText;
        secondScreen.value += number;
    })
}

// All clear button event
const allClearBtn = document.querySelector('.allClear').addEventListener('click', function () {
    secondScreen.value = '';
})
// Backspace button event
const backSpaceBtn = document.querySelector('.backSpace').addEventListener('click', function () {
    let current = secondScreen.value;
    secondScreen.value = current.slice(0, -1);
})

// Submit button event
const submitBtn = document.querySelector('.submit-btn').addEventListener('click', function () {
    let count = parseInt(actionRemain.innerText);

    if (secondScreen.value == '' && count != 0) {
        alert('Please enter generated pin!')
    } else if (secondScreen.value == firstScreen.value && count > 0) {
        matchedText.style.display = 'block';
        notMatchedText.style.display = 'none';
    } else if (count > 0) {
        notMatchedText.style.display = 'block';
        matchedText.style.display = 'none';
        actionRemain.innerText = actionRemain.innerText - 1;
        count--;
    }
    if (count == 0) {
        document.querySelector('.action-left').style.color = 'red';
    }
})