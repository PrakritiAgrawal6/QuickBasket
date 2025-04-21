export interface IUser {
  id?: string;
  fName: string;
  lName: string;
  email: string;
  phNo: number | null;
  password: string;
}

export interface IProduct {
  id: string;
  name: string;
  desc: string;
  price: number;
  categoryId: string;
  qty: number;
}
export interface ICategory {
  id: string;
  name: string;
}