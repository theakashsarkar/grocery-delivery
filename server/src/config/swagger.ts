import { authPaths } from "../modules/auth/auth.docs";

export const swaggerSpec = {
  openapi: "3.0.0",
  info: {
    title: "Grocery Delivery API",
    version: "1.0.0",
    description: "Clean Architecture API",
  },
  servers: [
    {
      url: "http://localhost:5000/api/v1",
    },
  ],
  paths: {
    ...authPaths,
  },
};
