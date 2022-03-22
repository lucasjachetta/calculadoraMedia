const botao = document.getElementById("calcular");
const resultArea = document.getElementById("notaFinal");

function calcular() {
	const nota1 = document.getElementById("nota1");

	const nota2 = document.getElementById("nota2");

	const nota3 = document.getElementById("nota3");

	const nota4 = document.getElementById("nota4");

	const notaMedia =
		(parseInt(nota1.value) +
			parseInt(nota2.value) +
			parseInt(nota3.value) +
			parseInt(nota4.value)) /
		4;

	if (notaMedia >= 7) {
		resultArea.innerHTML = `O aluno foi aprovado com a média ${notaMedia}.`;
	} else if (notaMedia >= 4) {
		resultArea.innerHTML = `A média final do aluno foi ${notaMedia}, ele deverá realizar o Exame Final.`;
	} else {
		resultArea.innerHTML = `A média final do aluno foi ${notaMedia}, ele foi reprovado. `;
	}
}