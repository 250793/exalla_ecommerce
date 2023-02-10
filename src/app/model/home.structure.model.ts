export interface IHomeStructure {
  id_home: number;
  id_tipo: number;
  descricao: string;
  imagem: string;
  ordem: number;
  rota: string;
}

export interface IHomeBrand {
  cod_marca: string;
  descricao: string;
  status: number;
  imagem: string;
  imagem_fundo: string;
  checked?:boolean;


}
