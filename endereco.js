export class Endereco {
	constructor(cidade, bairro, rua, numero) {
		this.cidade = cidade;
		this.bairro = bairro;
		this.rua = rua;
		this.numero = numero;
	}

	mostrarEndereco() {
		return `${this.rua} ${this.numero}, ${this.bairro}, ${this.cidade}`;
	}
}
