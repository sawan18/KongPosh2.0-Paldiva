export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  spiceLevel: 1 | 2 | 3;
  isAvailable: boolean;
  ingredients?: string[];
}

export interface CartItem {
  dish: Dish;
  quantity: number;
  customizations?: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  favorites: string[];
}