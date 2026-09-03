import {
  createAbstract,
  uploadAbstractFiles,
} from "../controllers/abstract.controller";
import { sendMail } from "../services/mail.service";
import { Request, Response, Router } from "express";

const router = Router();

// Unique route for pre-registration
router.post(
  "/abstract",
  createAbstract,
  uploadAbstractFiles,
  (req: Request, res: Response) => {
    sendMail(
      req.body,
      "Pre registration to QUITEL 2023 Montevideo-Uruguay completed successfully",
      "QUITEL 2023 Pre Registration",
    );
    res.status(201).json({ message: "success" });
  },
);

export default router;
