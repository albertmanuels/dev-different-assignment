export interface Property {
  title: string;
  price: number;
  description: string;
  currentSlug: string;
  titleImage?: string;
}

export interface PropertyDetail {
  title: string;
  price: number;
  description: string;
  currentSlug: string;
  titleImage?: string;
  content: string;
  location?: string;
}