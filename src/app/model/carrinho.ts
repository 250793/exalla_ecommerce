export interface Carrinho{
  cod_carrinho:string;
  cod_produto:string;
  operation:string;
  quantity:number;
}

export interface ProductData {
  cod_campanha: string | undefined;
  cod_produto: string;
  quantidade: number;
}
