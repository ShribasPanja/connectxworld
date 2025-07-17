import { Router, type Request, type Response } from "express";
import db from "@repo/db/client";
import bcrypt from "bcrypt";

const authRouter: Router = Router();

authRouter.get("/auth", (req: Request, res: Response) => {
  res.send("Authentication routety");
});

authRouter.post(
  "/register",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password, name } = req.body;
      if (!email || !password) {
        res.status(400).json({
          error: "Email and password are required",
        });
        return;
      }

      // Check if user already exists
      const existingUser = await db.user.findUnique({
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
      const newUser = await db.user.create({
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

export default authRouter;
