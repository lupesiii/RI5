import { Empresa } from "./empresa.js";
import { Endereco } from "./endereco.js";
import { Funcionario } from "./funcionario.js";
import { Telefone } from "./telefone.js";

const endereco1 = new Endereco(
	"São José dos Campos",
	"Vila Insdustrial",
	"Av. Professor Sebastião",
	782,
);
const telefone1 = new Telefone("012", "997021543");
const funcionario1 = new Funcionario(
	"Lucas Pereira",
	"123456789",
	"400.400.400-40",
	endereco1,
	telefone1,
);

const endereco2 = new Endereco(
	"São José dos Campos",
	"Jardim Paulista",
	"Rua das Flores",
	150,
);
const telefone2 = new Telefone("012", "998765432");
const funcionario2 = new Funcionario(
	"Mariana Souza",
	"987654321",
	"321.321.321-32",
	endereco2,
	telefone2,
);

const endereco3 = new Endereco(
	"São José dos Campos",
	"Centro",
	"Av. São João",
	450,
);
const telefone3 = new Telefone("012", "996543210");
const funcionario3 = new Funcionario(
	"Carlos Oliveira",
	"456789123",
	"654.654.654-65",
	endereco3,
	telefone3,
);

const funcionarios = [funcionario1, funcionario2, funcionario3];
const telefones = [telefone1, telefone2, telefone3];

const endereco4 = new Endereco(
	"São Paulo",
	"Jardim Paulista",
	"Av. Paulista",
	123,
);
const empresa = new Empresa(
	"ABC LTDA",
	"Mercado Pago",
	"999-999-999-999-99",
	endereco4,
	funcionarios,
	telefones,
);

console.log(empresa.descreverEmpresa());
