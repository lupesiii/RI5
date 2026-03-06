export class Funcionario {
	#matricula;
	#cpf;
	constructor(nome, matricula, cpf, endereco, telefone) {
		this.nome = nome;
		this.#matricula = matricula;
		this.#cpf = cpf;
		this.endereco = endereco;
		this.telefone = telefone;
	}

	descreverFuncionario() {
		return (
			"Nome: " +
			this.nome +
			"\n" +
			"Matrícula: " +
			this.#matricula +
			"\n" +
			"CPF: " +
			this.#cpf +
			"\n" +
			"Endereço: " +
			this.endereco.mostrarEndereco() +
			"\n" +
			"Telefone: " +
			this.telefone.mostrarTelefone()
		);
	}
}
