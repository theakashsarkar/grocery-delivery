import express from "express"
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";
import authRoutes from "./modules/auth/interface/routes/authRoutes"
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Api is running"
  });
});

app.use("/api/v1/auth",
  authRoutes,
)

app.use("/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
)
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;
