export interface Product{
  id : string;
  name : string;
  price : number;
  promotion : boolean;
}

export interface PageProduct{
  products: Product[];
  size: number;
  page: number;
  totalPage: number;
}
