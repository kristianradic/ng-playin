export class Product {
  id: number;
  name: string;
  description: string;
  grade: number;
  favorite: boolean;
  review: review[];
}



export class review {
  name: string;
  title: string;
  grade: number;
  description: string;
}