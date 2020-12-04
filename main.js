const allInputs = document.querySelectorAll('.form-control');
const allLabels = document.querySelectorAll('.answer');
for(let input of allInputs) {
	input.addEventListener('input', () => {
		const idInput = input.id;
		const dataInput = input.dataset.name;
		for(let otherInput of allInputs) {
			const idOfOtherInput = otherInput.id;
			const dataOfOtherInput = otherInput.dataset.name;
			if(idOfOtherInput == idInput ) {
				if(dataOfOtherInput == dataInput) {

				} else {
					console.log(input.value);
					calculation(input.value, otherInput.value, idInput);
				}
			}
		}
	})
}

const calculation = (input = 0, otherInput = 0, idInput) => {
	let answerOf = (input * otherInput);
	const answeredOf = Math.round(answerOf);
	for(let labelForId of allLabels) {
		const idOfLabel = labelForId.id;
		if(idInput == idOfLabel) {
			labelForId.innerHTML = `${answeredOf} грн`;
		} else {}
	}
	console.log(answeredOf);
}