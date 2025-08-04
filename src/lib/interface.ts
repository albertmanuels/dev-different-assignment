/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Property {
  title: string;
  price: number;
  description: string;
  currentSlug: string;
  titleImage?: string;
  published: boolean;
  badrooms?: number;
  bedrooms?: number;
  area?: number;
  location: string;
}

export interface PropertyDetail {
  title: string;
  price: number;
  description: any;
  currentSlug: string;
  titleImage?: string;
  location: string;
  published: boolean;
  bathrooms: number;
  bedrooms: number;
  area: number;
}