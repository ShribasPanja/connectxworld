import { Router, type Request, type Response } from "express";
import bcrypt from "bcrypt";
import { prisma } from "@repo/db/client";
import jwt from "jsonwebtoken";
import { authMiddleware } from "../middleware/authmiddleware";

const authRouter: Router = Router();

authRouter.get("/auth", (req: Request, res: Response) => {
  res.send("Authentication route");
});

authRouter.post(
  "/register",
  async (req: Request, res: Response): Promise<void> => {
    console.log("Register endpoint hit");
    try {
      const { email, password, name } = req.body;
      if (!email || !password) {
        res.status(400).json({
          error: "Email and password are required",
        });
        return;
      }

      // Check if user already exists
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        res.status(409).json({
          error: "User with this email already exists",
        });
        return;
      }

      // Hash password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Create user
      const newUser = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          name: name || null,
        },
        select: {
          id: true,
          email: true,
          name: true,
          createdAt: true,
        },
      });

      res.status(201).json({
        message: "User registered successfully",
        user: newUser,
      });
    } catch (error) {
      console.error("Registration error:", error);
      res.status(500).json({
        error: "Internal server error",
      });
    }
  }
);

authRouter.post(
  "/login",
  async (req: Request, res: Response): Promise<void> => {
    console.log("Login endpoint hit");
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        res.status(400).json({
          error: "Email and password are required",
        });
        return;
      }

      // Find user
      const user = await prisma.user.findUnique({
        where: { email },
        select: { id: true, name: true, email: true, password: true },
      });

      if (!user) {
        res.status(404).json({
          error: "User not found",
        });
        return;
      }

      // Validate password
      const isValid = await bcrypt.compare(password, user.password as string);
      if (!isValid) {
        res.status(401).json({
          error: "Invalid credentials",
        });
        return;
      }
      console.log("JWT_SECRET:", process.env.JWT_SECRET ? "Set" : "Not set");

      // Create JWT token with expiration
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
          name: user.name,
          sub: user.id,
          iat: Math.floor(Date.now() / 1000),
          exp: Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60, // 7 days
        },
        process.env.JWT_SECRET || "super-secret",
      );

      console.log("Generated JWT token:", token);

      res.status(200).json({
        message: "Login successful",
        token: token, // Return the JWT token
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({
        error: "Internal server error",
      });
    }
  }
);

authRouter.get("/protected", authMiddleware, (req, res) => {
  // Access user data from req.user
  console.log("Protected route hit, user:", req.user);
  res.json({
    message: `Welcome ${req.user.name || req.user.email}! This is protected data.`,
    user: req.user,
  });
});

export default authRouter;
