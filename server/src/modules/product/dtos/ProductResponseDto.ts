export interface ProductResponseDto {
  id: string,
  name: string,
  description: string,
  price: number,
  originalPrice: number,
  image: string,
  category: string,
  unit: string,
  stock: number,
  isOriganic: boolean,
  rating: number,
  reviewCount: number,
  discount: number
}
