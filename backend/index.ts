import * as dotenv from 'dotenv';

dotenv.config();

import { json } from "express";

import { UsersRouter } from "./routes/users";

import { connect } from "./database/connection";

import express from "express";

import bodyParser from "body-parser";

import { configDotEnv } from "./config";

import { homeRouter } from "./routes/home";

import { DestinationRouter } from "./routes/destinationsList";

import cors from 'cors';

import { notFound } from "./middleware/not-found";



configDotEnv();

connect();

const app = express();

app.use(cors());

app.use(express.static("public"));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }))

app.use(json());

app.use("/", homeRouter)

app.use("/users", UsersRouter);

app.use("/destinations", DestinationRouter)

app.use(notFound);

app.listen(8080, () => {
    console.log("App is running")
});

