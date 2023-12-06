/* eslint-disable no-undef */
const fillForm = () => {
	const cout = document.getElementById('cout');
	const mise = document.getElementById('mise');

	document.getElementById('montant').value = (cout - mise).toString();
	document.getElementById('pourcent').innerText = `(${((mise / cout) * 100).toFixed(2)}%)`;
};

const getResult = () => {
	const montant = document.getElementById('montant').value;
	const taux /* i */ = document.getElementById('taux').value / 100 / 12;
	const paiment /* n */ = document.getElementById('amortissement').value * document.getElementById('frequence').value;

	const numerator = montant * taux * (1 + taux) ** paiment;
	const denominator = (1 + taux) ** paiment - 1;
	document.getElementById('result').value = (numerator / denominator).toFixed(2).toString();
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const submit = (event) => {
	event.preventDefault();
	fillForm();
	getResult();
};

document.addEventListener('DOMContentLoaded', () =>
	document.getElementById('submitButton').addEventListener('click', submit),
);
