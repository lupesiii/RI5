export class Telefone {
	constructor(ddd, numero) {
		this.ddd = ddd;
		this.numero = numero;
	}

	mostrarTelefone() {
		return `(${this.ddd})${this.numero}`;
	}
}
