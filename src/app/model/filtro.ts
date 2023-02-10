export interface Filtro {
  descricao?:string;
  descricao_marca?:string;
  origem_produto?:string;
  detalhe_produto?:string;
  descricao_subgrupo?:string;
  descricao_grupo?:string;
  cod_campanha?:string;
  cod_grupo?:string;
  cod_subgrupo?:string;
  estoque?: boolean;
  desconto?: boolean;
  sort?: string;
  cod_produto?: string;
  codigo_barras?: string;
  page:number;
  limit:number;

}
