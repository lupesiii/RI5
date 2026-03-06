export class Empresa {
	#cnpj;
	constructor(
		razaoSocial,
		nomeFantasia,
		cnpj,
		endereco,
		funcionarios,
		telefones,
	) {
		this.razaoSocial = razaoSocial;
		this.nomeFantasia = nomeFantasia;
		this.#cnpj = cnpj;
		this.endereco = endereco;
		this.funcionarios = funcionarios;
		this.telefones = telefones;
	}

	descreverEmpresa() {
		let stringResposta =
			"Razão Social: " +
			this.razaoSocial +
			"\n" +
			"Nome Fantasia: " +
			this.nomeFantasia +
			"\n" +
			"CNPJ: " +
			this.#cnpj +
			"\n" +
			"Endereço: " +
			this.endereco.mostrarEndereco() +
			"\n" +
			"---------------------------------------" +
			"\n";

		for (const func of this.funcionarios) {
			stringResposta +=
				func.descreverFuncionario() +
				"\n" +
				"----------------------------" +
				"\n";
		}

		return stringResposta;
	}
}
