let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');
const pararSubtrair = document.getElementsByName('subtrair');
const pararAdicionar = document.getElementsByName('adicionar')

CURRENT_NUMBER.addEventListener('click', increment);

function increment() {
	count++;
	document.getElementById('currentNumber').innerHTML = count;
	if(count == 10) {
		pararAdicionar.removeEventListener('click', increment);
	}
}

function decrement() {
	document.getElementById('currentNumber').innerHTML = count--;
	if (count == 0) {
		pararSubtrair.addEventListener('click', decrement);
		document.getElementById('currentNumber').style = 'color: red';
	}
}

