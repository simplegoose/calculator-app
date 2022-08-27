const sliders = document.querySelectorAll('.theme-slider--overlays'),
themeNumberWrapper = document.querySelector('.theme-number-wrapper'),
themeNumbers = themeNumberWrapper.querySelectorAll('span'),
calcScreen = document.querySelector('.calc-screen'),
btn_0 = document.querySelector('.zero'),
btn_1 = document.querySelector('.one'),
btn_2 = document.querySelector('.two'),
btn_3 = document.querySelector('.three'),
btn_4 = document.querySelector('.four'),
btn_5 = document.querySelector('.five'),
btn_6 = document.querySelector('.six'),
btn_7 = document.querySelector('.seven'),
btn_8 = document.querySelector('.eight'),
btn_9 = document.querySelector('.nine'),
btn_period = document.querySelector('.period'),
btn_dash = document.querySelector('.dash'),
btn_plus = document.querySelector('.plus'),
btn_slash = document.querySelector('.slash'),
btn_ex = document.querySelector('.ex'),
btn_del = document.querySelector('.del__'),
btn_reset = document.querySelector('.calc--reset'),
btn_equal = document.querySelector('.calc--equal'),
prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
let firstVariable = null,
secondVariable = null,
sum = 0,
operatorEngaged = 0,
currentOperator,
subtractionFlag = 0,
multiplicationFlag = 0;

if (prefersDarkScheme.matches) {
    if(document.body.classList.contains('theme__1')) {
        document.body.classList.remove('theme__1');
    } else if(document.body.classList.contains('theme__2')) {
        document.body.classList.remove('theme__2');
    }
    localStorage.setItem('calc_theme', 'theme__3');
    document.body.classList.add(localStorage.getItem('calc_theme'));
}

sliders.forEach((div, index) => {
    div.addEventListener('click', () => {
        if (index === 0) {
            if(document.body.classList.contains('theme__3')) {
                document.body.classList.remove('theme__3');
            } else if(document.body.classList.contains('theme__2')) {
                document.body.classList.remove('theme__2');
            }
            localStorage.setItem('calc_theme', 'theme__1');
            document.body.classList.add(localStorage.getItem('calc_theme'));
        } else if( index === 1) {
            if(document.body.classList.contains('theme__1')) {
                document.body.classList.remove('theme__1');
            } else if(document.body.classList.contains('theme__3')) {
                document.body.classList.remove('theme__3');
            }
            localStorage.setItem('calc_theme', 'theme__2');
            document.body.classList.add(localStorage.getItem('calc_theme'));
        } else if(index === 2) {
            if(document.body.classList.contains('theme__1')) {
                document.body.classList.remove('theme__1');
            } else if(document.body.classList.contains('theme__2')) {
                document.body.classList.remove('theme__2');
            }
            localStorage.setItem('calc_theme', 'theme__3');
            document.body.classList.add(localStorage.getItem('calc_theme'));
        }
    })
})

themeNumbers.forEach((div, index) => {
    div.addEventListener('click', () => {
        if (index === 0) {
            if(document.body.classList.contains('theme__3')) {
                document.body.classList.remove('theme__3');
            } else if(document.body.classList.contains('theme__2')) {
                document.body.classList.remove('theme__2');
            }
            localStorage.setItem('calc_theme', 'theme__1');
            document.body.classList.add(localStorage.getItem('calc_theme'));
        } else if( index === 1) {
            if(document.body.classList.contains('theme__1')) {
                document.body.classList.remove('theme__1');
            } else if(document.body.classList.contains('theme__3')) {
                document.body.classList.remove('theme__3');
            }
            localStorage.setItem('calc_theme', 'theme__2');
            document.body.classList.add(localStorage.getItem('calc_theme'));
        } else if(index === 2) {
            if(document.body.classList.contains('theme__1')) {
                document.body.classList.remove('theme__1');
            } else if(document.body.classList.contains('theme__2')) {
                document.body.classList.remove('theme__2');
            }
            localStorage.setItem('calc_theme', 'theme__3');
            document.body.classList.add(localStorage.getItem('calc_theme'));
        }
    })
})

const editCalcScreen = number => {
    if (operatorEngaged === 1) {
        operatorEngaged = 0;
        calcScreen.textContent = number;
        firstVariable = parseFloat(calcScreen.textContent);
    } else {
        calcScreen.textContent += number;
        firstVariable = parseFloat(calcScreen.textContent);
    }
}

const doCalculation = operand => {
    if (firstVariable === null ) {
        return; 
    }

    switch (operand) {
        case '+':
            if (currentOperator === 'sub') {
                sum = sum - firstVariable;
                calcScreen.textContent = sum;
                currentOperator = null;
                operatorEngaged = 1;
                return;
            }

            if (currentOperator === 'multiply') {
                sum = sum * firstVariable;
                calcScreen.textContent = sum;
                currentOperator = null;
                operatorEngaged = 1;
                return;
            }

            if (currentOperator === 'divide') {
                sum = sum / firstVariable;
                calcScreen.textContent = sum;
                currentOperator = null;
                operatorEngaged = 1;
                return;
            }
        
            subtractionFlag = 1;
            currentOperator = 'add';
            operatorEngaged = 1;
            sum += firstVariable;
            calcScreen.textContent = sum;
            break;
        case '-':
            if (currentOperator === 'add') {
                sum = sum + firstVariable;
                calcScreen.textContent = sum;
                currentOperator = null;
                operatorEngaged = 1;
                return;
            }
        
            if (currentOperator === 'divide') {
                sum = sum / firstVariable;
                calcScreen.textContent = sum;
                currentOperator = null;
                operatorEngaged = 1;
                return;
            }

            if (currentOperator === 'multiply') {
                sum = sum * firstVariable;
                calcScreen.textContent = sum;
                currentOperator = null;
                operatorEngaged = 1;
                return;
            }

            if (subtractionFlag === 0) {
                sum = firstVariable;
                subtractionFlag = 1;
                operatorEngaged = 1;
                currentOperator = 'sub';
                return;
            }

            currentOperator = 'sub';
            operatorEngaged = 1;
            sum -= firstVariable;
            calcScreen.textContent = sum;
            break;
        case 'x':
            if (currentOperator === 'sub') {
                sum = sum - firstVariable;
                calcScreen.textContent = sum;
                currentOperator = null;
                operatorEngaged = 1;
                return;
            }

            if (currentOperator === 'add') {
                sum = sum + firstVariable;
                calcScreen.textContent = sum;
                currentOperator = null;
                operatorEngaged = 1;
                return;
            }

            if (currentOperator === 'divide') {
                sum = sum / firstVariable;
                calcScreen.textContent = sum;
                currentOperator = null;
                operatorEngaged = 1;
                return;
            }
        
            subtractionFlag = 1;
            currentOperator = 'multiply';
            operatorEngaged = 1;
            sum = (sum === 0 ? 1 : sum )* firstVariable;
            calcScreen.textContent = sum;
            firstVariable = null;
            break;
        case '/':
            if (currentOperator === 'sub') {
                sum = sum - firstVariable;
                calcScreen.textContent = sum;
                currentOperator = null;
                operatorEngaged = 1;
                return;
            }

            if (currentOperator === 'add') {
                sum = sum + firstVariable;
                calcScreen.textContent = sum;
                currentOperator = null;
                operatorEngaged = 1;
                return;
            }

            if (currentOperator === 'multiply') {
                sum = sum * firstVariable;
                calcScreen.textContent = sum;
                currentOperator = null;
                operatorEngaged = 1;
                return;
            }

            if (multiplicationFlag === 0) {
                sum = firstVariable;
                multiplicationFlag = 1;
                operatorEngaged = 1;
                currentOperator = 'divide';
                return;
            }   
            subtractionFlag = 1;
            currentOperator = 'divide';
            operatorEngaged = 1;
            sum = sum / firstVariable;
            calcScreen.textContent = sum;
            firstVariable = null;
            break;
        case '=':
            if (currentOperator === 'sub') {
                sum = sum - firstVariable;
                calcScreen.textContent = sum;
                operatorEngaged = 1;
                firstVariable = 0
                return;
            }

            if (currentOperator === 'add') {
                sum = sum + firstVariable;
                calcScreen.textContent = sum;
                operatorEngaged = 1;
                firstVariable = 0;
                return;
            }

            if (currentOperator === 'multiply') {
                sum = sum * firstVariable;
                calcScreen.textContent = sum;
                operatorEngaged = 1;
                firstVariable = null;
                return;
            }
            
            if (currentOperator === 'divide') {
                sum = sum / firstVariable;
                calcScreen.textContent = sum;
                operatorEngaged = 1;
                firstVariable = null;
                return; 
            }
            break;
        default:
            break;
    }
}

btn_0.addEventListener('click', () => {
    if (calcScreen.textContent === '') {
        return;
    }

    editCalcScreen(0);
})

btn_1.addEventListener('click', () => {
    editCalcScreen(1);
})

btn_2.addEventListener('click', () => {
    editCalcScreen(2);
})

btn_3.addEventListener('click', () => {
    editCalcScreen(3);
})

btn_4.addEventListener('click', () => {
    editCalcScreen(4);
})

btn_5.addEventListener('click', () => {
    editCalcScreen(5);
})

btn_6.addEventListener('click', () => {
    editCalcScreen(6);
})

btn_7.addEventListener('click', () => {
    editCalcScreen(7);
})

btn_8.addEventListener('click', () => {
    editCalcScreen(8);
})

btn_9.addEventListener('click', () => {
    editCalcScreen(9);
})

btn_period.addEventListener('click', () => {
    editCalcScreen('.');
})

btn_del.addEventListener('click', () => {
    if( calcScreen.textContent === '') {
        return;
    }

    let calcTextContent = calcScreen.textContent;
    calcTextContent = calcTextContent.slice(0, calcTextContent.length - 1);
    calcScreen.textContent = calcTextContent === '' ? '' : calcTextContent;
})

btn_plus.addEventListener('click', () => {
    doCalculation('+');
    currentOperator = 'add';
})

btn_dash.addEventListener('click', () => {
    doCalculation('-');
    currentOperator = 'sub';
})

btn_slash.addEventListener('click', () => {
    doCalculation('/');
    currentOperator = 'divide';
})

btn_ex.addEventListener('click', () => {
    doCalculation('x');
    currentOperator = 'multiply';
})

btn_reset.addEventListener('click', () => {
    calcScreen.textContent = '';
    firstVariable = null;
    sum = 0;
    operatorEngaged = 0;
    currentOperator = null;
    subtractionFlag = 0;
    multiplicationFlag = 0;
})

btn_equal.addEventListener('click', () => {
    doCalculation('=')
})