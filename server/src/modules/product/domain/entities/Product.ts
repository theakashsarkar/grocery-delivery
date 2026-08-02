export interface ProductProps {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  unit: string;
  stock: number;
  isOrganic: boolean;
  rating: number;
  reviewCount: number;
}

export type CreateProductProps = Omit<
  ProductProps,
  "id" | "rating" | "reviewCount"
>;

export type UpdateProductProps = Partial<
  Omit<ProductProps, "id" | "rating" | "reviewCount">
>;



export class Product {
  constructor(private readonly props: ProductProps) { }

  get discountPercent(): number {
    if (!this.props.originalPrice || this.props.originalPrice <= 0) return 0;
    if (this.props.price > this.props.originalPrice) return 0;
    return Math.round(((this.props.originalPrice - this.props.price) / this.props.originalPrice) * 100);
  }

  static create(props: CreateProductProps) {
    return new Product({
      id: crypto.randomUUID(),
      rating: 0,
      reviewCount: 0,
      ...props,
    })
  }

  update(props: UpdateProductProps): Product {
    return new Product({
      ...this.props,
      ...props,
    })
  }

  updateImage(imageUrl: string): Product {
    return new Product({
      ...this.props,
      image: imageUrl
    });
  }

  get image(): string {
    return this.props.image;
  }
  toPrimitives(): ProductProps {
    return { ...this.props }
  }
}
