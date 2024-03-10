let btnClear = document.querySelector('.clear');
let inputs = document.querySelectorAll('input');

btnClear.addEventListener('click', () => {
    inputs.forEach(input => input.value = '');
});