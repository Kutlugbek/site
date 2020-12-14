const loginInput = document.getElementById('country'),
allLabels = document.getElementById('answer');
loginInput.addEventListener('input', () => {
	if(loginInput.value == "Зона 1"){
		allLabels.innerHTML = `400 руб.`;
	}
	if(loginInput.value == "Зона 2"){
		allLabels.innerHTML = `650 руб.`;
	}
	if(loginInput.value == "Зона 3"){
		allLabels.innerHTML = `900 руб.`;
	}
	if(loginInput.value == "Зона 4"){
		allLabels.innerHTML = `1200 руб.`;
	}
})