export interface Flavor {
  id: number;
  name: string;
  description: string;
  color: string;
}

export interface Pack {
  id: string;
  name: string;
  price: string;
  quantity: string;
  features: string[];
  isPopular?: boolean;
}

export interface OrderFormData {
  firstName: string;
  lastName: string;
  phone: string;
  pack: string;
  quantity: number;
  location: string;
}