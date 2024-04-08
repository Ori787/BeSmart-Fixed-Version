import express from "express"

import { Router } from "express";

const app = express();

const router = Router();

router.get("/", (req, res, next) => {
    res.send("hello")
})

export { router as homeRouter }