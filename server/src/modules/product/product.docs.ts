export const productPaths = {
  "/products/flash-deals": {
    get: {
      tags: ["Products"],
      summary: "Get flash deal products",
      responses: {
        200: {
          description: "Success",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    id: { type: "string" },
                    name: { type: "string" },
                    description: { type: "string" },
                    price: { type: "number" },
                    originalPrice: { type: "number" },
                    image: { type: "string" },
                    category: { type: "string" },
                    unit: { type: "string" },
                    stock: { type: "integer" },
                    isOrganic: { type: "boolean" },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "/products/create": {
    post: {
      tags: ["Products"],
      summary: "Create a new product",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: [
                "name",
                "description",
                "price",
                "originalPrice",
                "category",
                "unit",
                "stock",
              ],
              properties: {
                name: { type: "string", example: "Fresh Organic Apple" },
                description: { type: "string", example: "Locally sourced organic apples" },
                price: { type: "number", example: 120 },
                originalPrice: { type: "number", example: 150 },
                category: { type: "string", example: "Fruits" },
                unit: { type: "string", example: "kg" },
                stock: { type: "integer", example: 50 },
                isOrganic: { type: "boolean", example: true },
                file: {
                  type: "string",
                  format: "binary",
                  description: "Product image file",
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "Product created successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  id: { type: "string" },
                  name: { type: "string" },
                  description: { type: "string" },
                  price: { type: "number" },
                  originalPrice: { type: "number" },
                  image: { type: "string" },
                  category: { type: "string" },
                  unit: { type: "string" },
                  stock: { type: "integer" },
                  isOrganic: { type: "boolean" },
                  rating: { type: "number" },
                  reviewCount: { type: "integer" },
                  discountPercent: { type: "number" },
                },
              },
            },
          },
        },
        400: {
          description: "Bad request — invalid or missing fields",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string", example: "Product not found" },
                },
              },
            },
          },
        },
      },
    },
  },
}
