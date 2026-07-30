export interface CreateProductDto {
  name: string,
  description: string,
  price: number,
  originalPrice: number,
  image: string,
  category: string,
  unit: string,
  stock: number,
  isOrganic: boolean,
}
