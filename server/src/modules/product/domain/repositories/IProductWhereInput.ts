export interface IProductWhereInput {
  category?: string,
  name?: { contains: string, mode: "insensitive" }
  price?: { get?: number, lte?: number }
  stock?: { gte?: number, lte?: number }
}
