/* eslint-disable no-undef */
const fillForm = () => {
	const cout = Number.parseFloat(document.querySelector('#cout').value);
	const mise = Number.parseFloat(document.querySelector('#mise').value);

	document.querySelector('#montant').value = (cout - mise).toString();
	document.querySelector('#pourcent').innerText = `${((mise / cout) * 100).toFixed(2)}%`;
};

const getResult = () => {
	const montant = Number.parseFloat(document.querySelector('#montant').value);
	const taux /* i */ = Number.parseFloat(document.querySelector('#taux').value) / 100 / 12;
	const paiment /* n */ =
		Number.parseFloat(document.querySelector('#amortissement').value) *
		Number.parseFloat(document.querySelector('#frequence').value);

	const numerator = montant * taux * (1 + taux) ** paiment;
	const denominator = (1 + taux) ** paiment - 1;
	document.querySelector('#result').value = (numerator / denominator).toFixed(2).toString();
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const submit = (event) => {
	event.preventDefault();
	fillForm();
	getResult();
};

document.addEventListener('DOMContentLoaded', () =>
	document.querySelector('#submitButton').addEventListener('click', submit),
);
