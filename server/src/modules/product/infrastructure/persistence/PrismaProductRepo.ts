import { prisma } from "../../../../infrastructure/database/prisma";
import { Product } from "../../domain/entities/Product";
import { IProductWhereInput } from "../../domain/repositories/IProductWhereInput";
import { ProductRepo } from "../../domain/repositories/ProductRepo";
import { TProductOrderByInput } from "../../domain/repositories/TProductOrderByInput";
import { ProductMapper } from "../mappers/ProductMapper";

export class PrismaProductRepo implements ProductRepo {
  async findMany(params: { where?: IProductWhereInput; orderBy?: TProductOrderByInput; }): Promise<Product[]> {
    const prismaResults = await prisma.product.findMany({
      where: params.where as any,
      orderBy: params.orderBy as any
    })
    return prismaResults.map(
      ProductMapper.toDomain
    )
  }
  async findById(id: string): Promise<Product | null> {
    const prismaResults = await prisma.product.findUnique({ where: { id } });
    return prismaResults ? ProductMapper.toDomain(prismaResults) : null;
  }
  async create(product: Product): Promise<Product> {
    const result = await prisma.product.create({
      data: ProductMapper.toPersistence(product)
    });
    return ProductMapper.toDomain(result);
  }
  async update(id: string, product: Partial<Product>): Promise<Product> {
    const result = await prisma.product.update({
      where: { id },
      data: { ...product }
    })
    return ProductMapper.toDomain(result);
  }
  async delete(id: string): Promise<void> {
    await prisma.product.delete({
      where: { id },
    });
  }
}
