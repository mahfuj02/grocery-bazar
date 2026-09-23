export interface Product {
  _id: number;
  product_name: string;
  categories: string[];
  image_url: string;
  price:number;
  slug: string;
  weight: string[];
  description?: string;
  category?: string;
  inventory?: number;
}
