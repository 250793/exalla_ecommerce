export interface IAccount {
  name: string;
  email: string;
  phone: string;
  cpf_cnpj: string;
  id: number;
}

export interface IAccountAdress {
  cod_conta:number;
  cod_endereco:number;
  cep: string;
  bairro: string;
  cidade: string;
  rua: string;
  uf: string;
  numero: string;
  complemento: string;
  tipo:string;
  default:boolean

}
