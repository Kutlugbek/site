const firstfCost = document.getElementById('firstf'),
firstsCost = document.getElementById('firsts'),
totalfirst = document.getElementById('first');

const secondfCost = document.getElementById('secondf'),
secondsCost = document.getElementById('seconds');

firstsCost.addEventListener('input', () => {
	calculation(firstsCost.value, firstfCost.value);
})

firstfCost.addEventListener('input', () => {
	calculation(firstsCost.value, firstfCost.value);
})

const calculation = (firstfCost = 0, firstsCost = 0) => {
	let answer = firstsCost * firstfCost;
	const answered = Math.round(answer);
	totalfirst.innerHTML = `${answered} грн`;
}