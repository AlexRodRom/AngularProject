
export interface ProductInterface {
  _id?: object;
  id: string;
  creationDate: Date;
  name: string;
  description: string;
  price: number;
  urlImage: string;
}

export class Product implements ProductInterface{
  _id: object;
  id: string;
  creationDate: Date;
  name: string;
  description: string;
  price: number;
  urlImage: string;
}
